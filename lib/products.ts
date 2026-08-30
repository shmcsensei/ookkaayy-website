export const products = {
  wiki: {
    name: 'Wiki',
    verb: 'Write',
    accent: 'var(--wiki)',
    promise: 'Your knowledge, stored as simple Markdown.',
    description:
      'A local-first Markdown wiki, notes application, and lightweight content-management system.',
    features: [
      'Create and edit portable Markdown pages',
      'YAML properties, tags, links, and backlinks',
      'Attachments beside your knowledge base',
      'Immediate local search and permissioned AI tools',
    ],
    workflow: [
      'Choose an existing Markdown folder',
      'Create a page or open one written elsewhere',
      'Write visually or edit the raw Markdown',
      'Browse through folders, tags, metadata, and links',
    ],
    scope: 'Wiki owns current content. It does not own Git history or enhanced retrieval indexes.',
    port: '43111',
  },
  search: {
    name: 'Search',
    verb: 'Find',
    accent: 'var(--search)',
    promise: 'Fast, private search for your Markdown knowledge.',
    description:
      'A local-first retrieval engine distributed as an embeddable library and standalone application.',
    features: [
      'Markdown-aware headings and section retrieval',
      'Fast SQLite FTS keyword ranking',
      'Frontmatter, tags, folder, and collection filters',
      'Read-only API and MCP retrieval tools',
    ],
    workflow: [
      'Choose one or more Markdown folders',
      'Let the rebuildable local index reconcile',
      'Search terms, identifiers, phrases, or questions',
      'Open the exact page and matching section',
    ],
    scope:
      'Search reads current Markdown and never edits it. It does not synchronize content or history.',
    port: '43110',
  },
  version: {
    name: 'Version',
    verb: 'Protect',
    accent: 'var(--version)',
    promise: 'Understandable version history for Markdown.',
    description:
      'A local-first history application that uses standard Git without making users learn Git.',
    features: [
      'Plain-language working change review',
      'Manual or generated version descriptions',
      'Exact comparisons and chronological history',
      'Recovery-protected, additive restoration',
    ],
    workflow: [
      'Choose a Markdown folder to protect',
      'Review new, edited, moved, or removed pages',
      'Save a meaningful version',
      'Compare or safely restore earlier content',
    ],
    scope:
      'Version owns history. It edits the working tree only for explicit restore, conflict resolution, or synchronization.',
    port: '43112',
  },
} as const;
export type ProductKey = keyof typeof products;
