import type { NextConfig } from 'next';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isProjectSite = process.env.GITHUB_ACTIONS === 'true' && !repository?.endsWith('.github.io');
const basePath = isProjectSite && repository ? `/${repository}` : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
};
export default nextConfig;
