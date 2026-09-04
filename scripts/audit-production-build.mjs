import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { gzipSync } from 'node:zlib';
import { access, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { sitePolicy } from '../lib/site-policy.ts';

const root = fileURLToPath(new URL('..', import.meta.url));
const routeNames = ['', 'about', 'compare', 'docs', 'downloads', 'search', 'version', 'content'];
const routeSet = new Set(routeNames.map((route) => `/${route}`.replace(/\/$/, '') || '/'));
const sourceFiles = (await readdir(join(root, 'app'), { recursive: true }))
  .filter((path) => path.endsWith('.tsx'))
  .map((path) => join(root, 'app', path));
sourceFiles.push(
  ...(await readdir(join(root, 'components')))
    .filter((path) => path.endsWith('.tsx'))
    .map((path) => join(root, 'components', path)),
);

const brokenLinks = [];
for (const file of sourceFiles) {
  const source = await readFile(file, 'utf8');
  for (const [, href] of source.matchAll(/href=["'](\/[A-Za-z0-9/_-]*)["']/g)) {
    const route = `/${href.split('/').filter(Boolean)[0] ?? ''}`.replace(/\/$/, '') || '/';
    if (!routeSet.has(route)) brokenLinks.push(`${relative(root, file)} -> ${href}`);
  }
}
assert.deepEqual(brokenLinks, [], `broken internal links:\n${brokenLinks.join('\n')}`);

for (const route of routeNames.filter(Boolean)) await access(join(root, 'app', route, 'page.tsx'));
for (const [product, expected] of Object.entries(sitePolicy.screenshotDigests)) {
  const image = await readFile(join(root, 'public', 'screenshots', `${product}.jpg`));
  assert.equal(
    createHash('sha256').update(image).digest('hex'),
    expected,
    `${product} screenshot changed without freshness review`,
  );
}

const clientRoot = join(root, 'out');
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const expectedBasePath =
  process.env.GITHUB_ACTIONS === 'true' && repository && !repository.endsWith('.github.io')
    ? `/${repository}`
    : '';
for (const route of routeNames) {
  const html = route ? join(clientRoot, route, 'index.html') : join(clientRoot, 'index.html');
  await access(html);
  const markup = await readFile(html, 'utf8');
  for (const [, reference] of markup.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (reference.startsWith('#') || reference.startsWith('http')) continue;
    assert.ok(
      reference.startsWith(`${expectedBasePath}/`),
      `${route || 'home'} contains a path outside the deployment base: ${reference}`,
    );
    const localPath = reference.slice(expectedBasePath.length).split(/[?#]/)[0];
    const target = localPath.endsWith('/') ? `${localPath}index.html` : localPath;
    await access(join(clientRoot, target));
  }
}
await access(join(clientRoot, '404.html'));
await access(join(clientRoot, 'sitemap.xml'));
await access(join(clientRoot, 'robots.txt'));
const builtFiles = (await readdir(clientRoot, { recursive: true })).map((path) =>
  join(clientRoot, path),
);
const sizes = { javascript: 0, css: 0 };
for (const file of builtFiles) {
  const info = await stat(file);
  if (!info.isFile()) continue;
  if (file.endsWith('.js')) sizes.javascript += gzipSync(await readFile(file)).byteLength;
  if (file.endsWith('.css')) sizes.css += gzipSync(await readFile(file)).byteLength;
}
assert.ok(
  sizes.javascript <= sitePolicy.performanceBudgets.clientJavaScriptBytes,
  `client JavaScript is ${sizes.javascript} bytes`,
);
assert.ok(
  sizes.css <= sitePolicy.performanceBudgets.clientCssBytes,
  `client CSS is ${sizes.css} bytes`,
);
for (const product of Object.keys(sitePolicy.screenshotDigests)) {
  const info = await stat(join(clientRoot, 'screenshots', `${product}.jpg`));
  assert.ok(
    info.size <= sitePolicy.performanceBudgets.productScreenshotBytes,
    `${product} screenshot exceeds its budget`,
  );
}
const socialImage = await stat(join(clientRoot, 'og.png'));
assert.ok(
  socialImage.size <= sitePolicy.performanceBudgets.socialImageBytes,
  'social image exceeds its budget',
);

const report = {
  auditedAt: new Date().toISOString(),
  locale: sitePolicy.defaultLocale,
  routes: [...routeSet],
  internalLinks: 'valid',
  screenshotFreshness: 'verified',
  output: 'static GitHub Pages export verified',
  bytes: { ...sizes, socialImage: socialImage.size },
  budgets: sitePolicy.performanceBudgets,
};
await writeFile(join(root, 'out', 'audit-report.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(
  `Production audit passed: ${routeSet.size} routes, ${sizes.javascript} B JS, ${sizes.css} B CSS`,
);
