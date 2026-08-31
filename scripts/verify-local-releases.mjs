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
  const { stdout } = await exec('git', ['rev-parse', '--short', 'HEAD'], { cwd: repository });
  if (stdout.trim() !== release.revision) {
    throw new Error(
      `${release.product}: manifest revision ${release.revision} does not match ${stdout.trim()}`,
    );
  }
  for (const artifact of release.artifacts.filter((value) => value.status === 'built locally')) {
    const file = path.resolve(root, artifact.location);
    const details = await stat(file);
    if (details.size !== artifact.sizeBytes) {
      throw new Error(
        `${release.product}: expected ${artifact.sizeBytes} bytes, found ${details.size}`,
      );
    }
    const digest = await sha256(file);
    if (digest !== artifact.sha256) {
      throw new Error(`${release.product}: SHA-256 mismatch for ${file}`);
    }
    console.log(
      `${release.product}: ${artifact.kind.toUpperCase()} verified at ${release.revision}`,
    );
  }
}
