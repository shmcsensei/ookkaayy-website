import type { ProductKey } from './products';

export type ReleaseArtifact = {
  kind: 'dmg' | 'app' | 'source';
  platform: 'macOS' | 'Linux';
  architecture: 'Apple silicon' | 'x86_64';
  status: 'built locally' | 'build from source';
  location?: string;
  requirements: string;
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
    revision: '65d84f0',
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
    builtOn: '2026-08-30',
    notes: ['Native desktop search', 'Durable background indexing', 'Typed and date-aware filters'],
    artifacts: [
      {
        kind: 'app',
        platform: 'macOS',
        architecture: 'Apple silicon',
        status: 'built locally',
        location: '../ookkaayy-search/target/release/bundle/macos/Ookkaayy Search.app',
        requirements: 'macOS 11 or newer',
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
    revision: '5bfa578',
    builtOn: '2026-08-30',
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
