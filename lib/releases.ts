import type { ProductKey } from './products';

export type ReleaseArtifact = {
  kind: 'dmg' | 'app' | 'source';
  platform: 'macOS' | 'Linux';
  architecture: 'Apple silicon' | 'x86_64';
  status: 'built locally' | 'build from source';
  location?: string;
  requirements: string;
  sizeBytes?: number;
  sha256?: string;
};

export type ProductRelease = {
  product: ProductKey;
  version: string;
  channel: 'development';
  revision: string;
  builtOn: string;
  notes: readonly string[];
  artifacts: readonly ReleaseArtifact[];
};

export const releases: readonly ProductRelease[] = [
  {
    product: 'wiki',
    version: '0.1.0',
    channel: 'development',
    revision: '3bfcc6e',
    builtOn: '2026-08-31',
    notes: [
      'Native desktop workspace',
      'Live Markdown preview',
      'Search and Version suite integration',
    ],
    artifacts: [
      {
        kind: 'dmg',
        platform: 'macOS',
        architecture: 'Apple silicon',
        status: 'built locally',
        location: '../ookkaayy-wiki/target/release/bundle/dmg/Ookkaayy Wiki_0.1.0_aarch64.dmg',
        requirements: 'macOS 11 or newer',
        sizeBytes: 9088891,
        sha256: '5df87a389437aa597b3709fba6eaef06cc71e25138d3a7bac3461c36932073ce',
      },
      {
        kind: 'source',
        platform: 'Linux',
        architecture: 'x86_64',
        status: 'build from source',
        requirements: 'Rust 1.98+, WebKitGTK development packages',
      },
    ],
  },
  {
    product: 'search',
    version: '0.1.0',
    channel: 'development',
    revision: 'ce7654b',
    builtOn: '2026-08-31',
    notes: ['Native desktop search', 'Durable background indexing', 'Typed and date-aware filters'],
    artifacts: [
      {
        kind: 'dmg',
        platform: 'macOS',
        architecture: 'Apple silicon',
        status: 'built locally',
        location: '../ookkaayy-search/target/release/bundle/dmg/Ookkaayy Search_0.1.0_aarch64.dmg',
        requirements: 'macOS 11 or newer',
        sizeBytes: 8062758,
        sha256: '25fbe0a5d576aa4f4f244530fd97e0411c0c06781a65989c6dd51457bdd9826d',
      },
      {
        kind: 'source',
        platform: 'Linux',
        architecture: 'x86_64',
        status: 'build from source',
        requirements: 'Rust 1.98+, WebKitGTK development packages',
      },
    ],
  },
  {
    product: 'version',
    version: '0.1.0',
    channel: 'development',
    revision: '373527c',
    builtOn: '2026-08-31',
    notes: [
      'Native desktop history',
      'Rendered Markdown comparisons',
      'Durable restore and sync jobs',
    ],
    artifacts: [
      {
        kind: 'dmg',
        platform: 'macOS',
        architecture: 'Apple silicon',
        status: 'built locally',
        location:
          '../ookkaayy-versions/target/release/bundle/dmg/Ookkaayy Version_0.1.0_aarch64.dmg',
        requirements: 'macOS 11 or newer',
        sizeBytes: 7986099,
        sha256: 'f5261bbf043d9ee774b85c62c178c4464469b12b8b705fb787dca234fc2a99c2',
      },
      {
        kind: 'source',
        platform: 'Linux',
        architecture: 'x86_64',
        status: 'build from source',
        requirements: 'Rust 1.98+, WebKitGTK development packages',
      },
    ],
  },
] as const;

export const repositoryDirectory = (product: ProductKey) =>
  `ookkaayy-${product === 'version' ? 'versions' : product}`;
