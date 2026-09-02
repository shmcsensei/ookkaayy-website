const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const githubPagesBasePath =
  process.env.GITHUB_ACTIONS === 'true' && repository && !repository.endsWith('.github.io')
    ? `/${repository}`
    : '';

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? githubPagesBasePath;

export function sitePath(path: string) {
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}
