import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { test } from 'node:test';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('all required public routes exist in the built source', async () => {
  for (const route of ['wiki', 'search', 'version', 'compare', 'docs', 'downloads', 'about']) {
    const page = await read(`app/${route}/page.tsx`);
    assert.match(page, /export default/);
  }
});

test('portfolio responsibility language stays canonical', async () => {
  const home = await read('app/page.tsx');
  const compare = await read('app/compare/page.tsx');
  assert.match(home, /Write/);
  assert.match(home, /Find/);
  assert.match(home, /Protect/);
  assert.match(compare, /Wiki writes\. Search finds\. Version protects\./);
});

test('downloads ship direct DMGs without exposing private source', async () => {
  const downloads = await read('app/downloads/page.tsx');
  const releases = await read('lib/releases.ts');
  assert.match(downloads, /Download for Mac/);
  for (const product of ['wiki', 'search', 'version'])
    assert.match(releases, new RegExp(`product: '${product}'`));
  assert.equal((releases.match(/downloadPath: '\/downloads\/.*\.dmg'/g) ?? []).length, 3);
  assert.doesNotMatch(downloads, /github\.com|sourceUrl|cargo tauri/i);
  assert.match(downloads, /ad-hoc signed, but not yet Developer ID signed, notarized/);
  assert.equal((releases.match(/sha256: '[a-f0-9]{64}'/g) ?? []).length, 3);
  assert.equal((releases.match(/sizeBytes: [1-9][0-9]+/g) ?? []).length, 3);
});

test('documentation is searchable, filterable, and identifies security boundaries', async () => {
  const explorer = await read('components/docs-explorer.tsx');
  const docs = await read('lib/docs.ts');
  assert.match(explorer, /type="search"/);
  assert.match(explorer, /aria-pressed/);
  assert.match(explorer, /role="status"/);
  for (const topic of ['MCP', 'loopback', 'restore', 'sync authority'])
    assert.match(docs, new RegExp(topic, 'i'));
  for (const topic of ['three-way', 'Git credential', '/api/v1', 'doctor', 'automatic protection'])
    assert.match(docs, new RegExp(topic, 'i'));
  assert.equal((docs.match(/id: '/g) ?? []).length, 16);
});

test('crawl metadata and canonical URLs are generated', async () => {
  const home = await read('app/page.tsx');
  const sitemap = await read('app/sitemap.ts');
  const robots = await read('app/robots.ts');
  assert.match(home, /alternates: \{ canonical: '\/' \}/);
  for (const route of [
    '/wiki',
    '/search',
    '/version',
    '/compare',
    '/docs',
    '/downloads',
    '/about',
  ]) {
    assert.match(sitemap, new RegExp(route));
    const page = await read(`app${route}/page.tsx`);
    assert.match(page, new RegExp(`canonical: '${route}'`));
  }
  assert.match(robots, /sitemap\.xml/);
});

test('installation and release provenance are actionable and exact', async () => {
  const downloads = await read('app/downloads/page.tsx');
  const docs = await read('lib/docs.ts');
  const releases = await read('lib/releases.ts');
  const verifier = await read('scripts/verify-local-releases.mjs');
  assert.match(docs, /desktop\/src-tauri/);
  assert.doesNotMatch(releases, /sourceUrl/);
  assert.match(downloads, /download/);
  assert.match(verifier, /status.*--porcelain/s);
  assert.match(verifier, /source tree.*is dirty/);
});

test('every product page uses a recent authentic interface capture with useful alt text', async () => {
  const products = await read('lib/products.ts');
  const component = await read('components/product-page.tsx');
  for (const product of ['wiki', 'search', 'version']) {
    assert.match(products, new RegExp(`/screenshots/${product}\\.jpg`));
    const image = await stat(new URL(`../public/screenshots/${product}.jpg`, import.meta.url));
    assert.ok(image.size > 40_000, `${product} screenshot should contain a real interface capture`);
  }
  assert.equal((products.match(/verifiedAt: '2026-08-31'/g) ?? []).length, 3);
  assert.match(component, /alt=\{item\.screenshot\.alt\}/);
  assert.match(component, /This is the product UI—not a marketing reconstruction/);
});

test('privacy and accessibility foundations remain present', async () => {
  const layout = await read('app/layout.tsx');
  const styles = await read('app/globals.css');
  const site = await read('components/site.tsx');
  assert.match(layout, /sitePolicy\.defaultLocale/);
  assert.match(site, /Skip to content/);
  assert.match(styles, /prefers-reduced-motion/);
  assert.match(layout, /og\.png/);
});

test('every page uses one global navigation with every public route reachable', async () => {
  const home = await read('app/page.tsx');
  const site = await read('components/site.tsx');
  const styles = await read('app/globals.css');
  assert.match(home, /<Page>/);
  for (const route of ['wiki', 'search', 'version', 'compare', 'docs', 'about', 'downloads'])
    assert.ok(
      site.includes(`href: '/${route}'`) || site.includes(`href="/${route}"`),
      `global navigation should link to /${route}`,
    );
  assert.doesNotMatch(styles, /\.nav-links a:not\(\.button\)[^{]*\{[^}]*display:\s*none/s);
});

test('operational policy is executable and owned', async () => {
  const policy = await read('lib/site-policy.ts');
  const operations = await read('OPERATIONS.md');
  const packageJson = await read('package.json');
  const workflow = await read('.github/workflows/deploy-pages.yml');
  const nextConfig = await read('next.config.ts');
  assert.match(policy, /defaultLocale: 'en'/);
  assert.match(policy, /contentOwners/);
  assert.match(policy, /performanceBudgets/);
  assert.match(operations, /Atomic rollout and rollback/);
  assert.match(packageJson, /audit-production-build/);
  assert.match(workflow, /actions\/deploy-pages/);
  assert.match(nextConfig, /output: 'export'/);
});
