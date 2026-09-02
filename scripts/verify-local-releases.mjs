import { createHash } from 'node:crypto';
import { execFile } from 'node:child_process';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';

import { releases, repositoryDirectory } from '../lib/releases.ts';

const exec = promisify(execFile);
const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const sha256 = (file) =>
  new Promise((resolve, reject) => {
    const hash = createHash('sha256');
    createReadStream(file)
      .on('data', (chunk) => hash.update(chunk))
      .on('error', reject)
      .on('end', () => resolve(hash.digest('hex')));
  });

for (const release of releases) {
  const repository = path.resolve(root, '..', repositoryDirectory(release.product));
  const [{ stdout: shortRevision }, { stdout: fullRevision }, { stdout: status }] =
    await Promise.all([
      exec('git', ['rev-parse', '--short', 'HEAD'], { cwd: repository }),
      exec('git', ['rev-parse', 'HEAD'], { cwd: repository }),
      exec('git', ['status', '--porcelain=v1', '--untracked-files=all'], { cwd: repository }),
    ]);
  if (shortRevision.trim() !== release.revision) {
    throw new Error(
      `${release.product}: manifest revision ${release.revision} does not match ${shortRevision.trim()}`,
    );
  }
  if (status.trim()) {
    throw new Error(
      `${release.product}: source tree ${fullRevision.trim()} is dirty; local artifacts cannot claim clean revision provenance`,
    );
  }
  const file = path.resolve(
    root,
    'public',
    release.downloadPath.replace(/^\/downloads\//, 'downloads/'),
  );
  const details = await stat(file);
  if (details.size !== release.sizeBytes) {
    throw new Error(
      `${release.product}: expected ${release.sizeBytes} bytes, found ${details.size}`,
    );
  }
  const digest = await sha256(file);
  if (digest !== release.sha256)
    throw new Error(`${release.product}: SHA-256 mismatch for ${file}`);
  console.log(`${release.product}: DMG verified at ${release.revision}`);
}
