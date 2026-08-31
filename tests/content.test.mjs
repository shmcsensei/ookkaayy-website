import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
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

test('downloads distinguish local artifacts from stable releases', async () => {
  const downloads = await read('app/downloads/page.tsx');
  const releases = await read('lib/releases.ts');
  assert.match(downloads, /Development means development/);
  for (const product of ['wiki', 'search', 'version'])
    assert.match(releases, new RegExp(`product: '${product}'`));
  assert.match(releases, /built locally/);
  assert.match(downloads, /not notarized, signed, or automatically updated/);
});

test('documentation is searchable, filterable, and identifies security boundaries', async () => {
  const explorer = await read('components/docs-explorer.tsx');
  const docs = await read('lib/docs.ts');
  assert.match(explorer, /type="search"/);
  assert.match(explorer, /aria-pressed/);
  assert.match(explorer, /role="status"/);
  for (const topic of ['MCP', 'loopback', 'restore', 'sync authority'])
    assert.match(docs, new RegExp(topic, 'i'));
});

test('crawl metadata and canonical URLs are generated', async () => {
  const layout = await read('app/layout.tsx');
  const sitemap = await read('app/sitemap.ts');
  const robots = await read('app/robots.ts');
  assert.match(layout, /alternates: \{ canonical: '\/' \}/);
  for (const route of ['/wiki', '/search', '/version', '/compare', '/docs', '/downloads', '/about'])
    assert.match(sitemap, new RegExp(route));
  assert.match(robots, /sitemap\.xml/);
});

test('privacy and accessibility foundations remain present', async () => {
  const layout = await read('app/layout.tsx');
  const styles = await read('app/globals.css');
  const site = await read('components/site.tsx');
  assert.match(layout, /lang="en"/);
  assert.match(site, /Skip to content/);
  assert.match(styles, /prefers-reduced-motion/);
  assert.match(layout, /og\.png/);
});
