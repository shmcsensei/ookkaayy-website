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
    product: 'content',
    version: '0.1.0',
    revision: 'fb7ed02',
    builtOn: '2026-09-04',
    downloadPath: '/downloads/ookkaayy-content-0.1.0-aarch64.dmg',
    architecture: 'Apple silicon',
    requirements: 'macOS 11 or newer',
    sizeBytes: 9053743,
    sha256: 'bfbb10a730d7d3b9c0ea4574f30748af36a313ba773e9a591bf902d3d3af3887',
    notes: [
      'Native desktop workspace',
      'Live Markdown preview',
      'Search and Version suite integration',
    ],
  },
  {
    product: 'search',
    version: '0.1.0',
    revision: 'b5fef8b',
    builtOn: '2026-09-04',
    downloadPath: '/downloads/ookkaayy-search-0.1.0-aarch64.dmg',
    architecture: 'Apple silicon',
    requirements: 'macOS 11 or newer',
    sizeBytes: 8029170,
    sha256: '2531b6123877ef931a96250cf4f65ea5e6fc6d937a4735b6320f3e529a8c76c3',
    notes: ['Native desktop search', 'Durable background indexing', 'Typed and date-aware filters'],
  },
  {
    product: 'version',
    version: '0.1.0',
    revision: 'd6672d8',
    builtOn: '2026-09-04',
    downloadPath: '/downloads/ookkaayy-version-0.1.0-aarch64.dmg',
    architecture: 'Apple silicon',
    requirements: 'macOS 11 or newer',
    sizeBytes: 7954265,
    sha256: 'c90fa6b8628b2775a6a162bca24744aa0fc05a3ef40ab6823013e6a4ee3b2275',
    notes: [
      'Native desktop history',
      'Rendered Markdown comparisons',
      'Durable restore and sync jobs',
    ],
  },
] as const;

export const repositoryDirectory = (product: ProductKey) =>
  `ookkaayy-${product === 'version' ? 'versions' : product}`;
