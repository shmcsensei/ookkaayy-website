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
    revision: '5f66cbd',
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
        sizeBytes: 9088925,
        sha256: 'ec1d25c7958ac0c7f6ae1af16ee615494af479f6ef80ed3cd4c4a4c7bf1ac3ae',
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
    revision: 'f3be952',
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
        sizeBytes: 7986088,
        sha256: '1b6b2e59e4705ef0af4f0a0e20e26b993dbb0438b70bd1af8633e619a6f6ff60',
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
