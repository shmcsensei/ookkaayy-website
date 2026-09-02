import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.SITE_URL ?? 'http://localhost:3000';
  return ['', '/wiki', '/search', '/version', '/compare', '/docs', '/downloads', '/about'].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date('2026-08-31'),
      changeFrequency: path === '' ? 'weekly' : 'monthly',
      priority: path === '' ? 1 : 0.8,
    }),
  );
}
