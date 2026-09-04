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
    revision: 'ebc11ec',
    builtOn: '2026-09-04',
    downloadPath: '/downloads/ookkaayy-wiki-0.1.0-aarch64.dmg',
    architecture: 'Apple silicon',
    requirements: 'macOS 11 or newer',
    sizeBytes: 9053822,
    sha256: 'c79a2b70527ce6f2f6b8a44fde821ef1ddaee9c74237af2d4d338f0b53318fd9',
    notes: [
      'Native desktop workspace',
      'Live Markdown preview',
      'Search and Version suite integration',
    ],
  },
  {
    product: 'search',
    version: '0.1.0',
    revision: '1212bbd',
    builtOn: '2026-09-04',
    downloadPath: '/downloads/ookkaayy-search-0.1.0-aarch64.dmg',
    architecture: 'Apple silicon',
    requirements: 'macOS 11 or newer',
    sizeBytes: 8029178,
    sha256: 'aea18e11c9fea239cb404d8f6f46c912118775cc2b5e85bb21618629be1bab2a',
    notes: ['Native desktop search', 'Durable background indexing', 'Typed and date-aware filters'],
  },
  {
    product: 'version',
    version: '0.1.0',
    revision: 'c0089fe',
    builtOn: '2026-09-04',
    downloadPath: '/downloads/ookkaayy-version-0.1.0-aarch64.dmg',
    architecture: 'Apple silicon',
    requirements: 'macOS 11 or newer',
    sizeBytes: 7953792,
    sha256: 'e4907ab05c460c9ba75148dd3dfec1b6a2f26b5e31de4e5a655bee6e0a32f411',
    notes: [
      'Native desktop history',
      'Rendered Markdown comparisons',
      'Durable restore and sync jobs',
    ],
  },
] as const;

export const repositoryDirectory = (product: ProductKey) =>
  `ookkaayy-${product === 'version' ? 'versions' : product}`;
