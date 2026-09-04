import type { ProductKey } from './products';

export type ProductRelease = {
  product: ProductKey;
  version: string;
  revision: string;
  builtOn: string;
  downloadPath: string;
  architecture: 'Apple silicon';
  requirements: string;
  sizeBytes: number;
  sha256: string;
  notes: readonly string[];
};

export const releases: readonly ProductRelease[] = [
  {
    product: 'wiki',
    version: '0.1.0',
    revision: '867b87c',
    builtOn: '2026-09-03',
    downloadPath: '/downloads/ookkaayy-wiki-0.1.0-aarch64.dmg',
    architecture: 'Apple silicon',
    requirements: 'macOS 11 or newer',
    sizeBytes: 9053833,
    sha256: '3eef081d1e5859acc483c89f1687f6e96afc2758370a8180d749fa3526c34112',
    notes: [
      'Native desktop workspace',
      'Live Markdown preview',
      'Search and Version suite integration',
    ],
  },
  {
    product: 'search',
    version: '0.1.0',
    revision: 'bcadd3e',
    builtOn: '2026-09-03',
    downloadPath: '/downloads/ookkaayy-search-0.1.0-aarch64.dmg',
    architecture: 'Apple silicon',
    requirements: 'macOS 11 or newer',
    sizeBytes: 8029244,
    sha256: '006a7930d51d1bfaa4453b4e5b3e6e42a146d2006b37375121d14dcd6e678bea',
    notes: ['Native desktop search', 'Durable background indexing', 'Typed and date-aware filters'],
  },
  {
    product: 'version',
    version: '0.1.0',
    revision: 'b53c0db',
    builtOn: '2026-09-03',
    downloadPath: '/downloads/ookkaayy-version-0.1.0-aarch64.dmg',
    architecture: 'Apple silicon',
    requirements: 'macOS 11 or newer',
    sizeBytes: 7954535,
    sha256: '2f71213c497d57c23d470df7f70de1a81077b32e55ea158b0b719928562e7e2c',
    notes: [
      'Native desktop history',
      'Rendered Markdown comparisons',
      'Durable restore and sync jobs',
    ],
  },
] as const;

export const repositoryDirectory = (product: ProductKey) =>
  `ookkaayy-${product === 'version' ? 'versions' : product}`;
