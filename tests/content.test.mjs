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

test('downloads make no unavailable binary claim', async () => {
  const downloads = await read('app/downloads/page.tsx');
  assert.match(downloads, /Packaged desktop installers are not published yet/);
  assert.match(downloads, /Development/);
  assert.doesNotMatch(downloads, /Stable release/);
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
