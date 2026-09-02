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
    revision: 'b4dd136',
    builtOn: '2026-09-01',
    downloadPath: '/downloads/ookkaayy-wiki-0.1.0-aarch64.dmg',
    architecture: 'Apple silicon',
    requirements: 'macOS 11 or newer',
    sizeBytes: 9110966,
    sha256: '20cdb07328a4a27ed3916279e6318948667efea8c8efbc32a3cb02f6ccf718f1',
    notes: [
      'Native desktop workspace',
      'Live Markdown preview',
      'Search and Version suite integration',
    ],
  },
  {
    product: 'search',
    version: '0.1.0',
    revision: 'b9e74d0',
    builtOn: '2026-09-01',
    downloadPath: '/downloads/ookkaayy-search-0.1.0-aarch64.dmg',
    architecture: 'Apple silicon',
    requirements: 'macOS 11 or newer',
    sizeBytes: 8067999,
    sha256: 'a10193ff4b69ec400b28bd5f46c759d13145d5430ab976af4b81eb0a8b36e4c5',
    notes: ['Native desktop search', 'Durable background indexing', 'Typed and date-aware filters'],
  },
  {
    product: 'version',
    version: '0.1.0',
    revision: '1c7a5ff',
    builtOn: '2026-09-01',
    downloadPath: '/downloads/ookkaayy-version-0.1.0-aarch64.dmg',
    architecture: 'Apple silicon',
    requirements: 'macOS 11 or newer',
    sizeBytes: 7991777,
    sha256: '6a8457a940a42b05de284efda8efa56e1b5b569a12e870f3e3c5b6dfb6eb7680',
    notes: [
      'Native desktop history',
      'Rendered Markdown comparisons',
      'Durable restore and sync jobs',
    ],
  },
] as const;

export const repositoryDirectory = (product: ProductKey) =>
  `ookkaayy-${product === 'version' ? 'versions' : product}`;
