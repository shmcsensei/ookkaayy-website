import type { ProductKey } from './products';

export type Guide = {
  id: string;
  product: ProductKey | 'suite';
  title: string;
  summary: string;
  steps: readonly string[];
  command?: string;
  note?: string;
};

export const guides: readonly Guide[] = [
  {
    id: 'install',
    product: 'suite',
    title: 'Install the suite',
    summary: 'Build every product and open the native applications locally.',
    command: 'cd desktop/src-tauri\ncargo tauri build --bundles app --no-sign',
    steps: [
      'Install Rust 1.98+ and Node.js 22+',
      'Clone the four sibling repositories into one parent folder',
      'From each repository, enter desktop/src-tauri and run cargo tauri build --bundles app --no-sign',
      'Open Wiki and enable Search or Version only for the folders that need them',
    ],
    note: 'Core use is offline. A network connection is only needed while installing dependencies.',
  },
  {
    id: 'wiki-first-run',
    product: 'wiki',
    title: 'Create your first page',
    summary: 'Open an ordinary Markdown folder and begin authoring immediately.',
    command: 'cd ookkaayy-wiki\ncargo run --release -- serve',
    steps: [
      'Open http://127.0.0.1:43111',
      'Choose an absolute folder containing Markdown',
      'Create a page or select an existing file',
      'Use Source, Split, or Preview mode and save',
    ],
  },
  {
    id: 'search-first-run',
    product: 'search',
    title: 'Index and search a folder',
    summary: 'Build a disposable local index without changing source files.',
    command: 'cd ookkaayy-search\ncargo run --release -- serve',
    steps: [
      'Open http://127.0.0.1:43110',
      'Add an absolute Markdown folder as a collection',
      'Wait for the indexing job to finish',
      'Search text, headings, tags, paths, or date ranges',
    ],
  },
  {
    id: 'version-first-run',
    product: 'version',
    title: 'Protect a Markdown folder',
    summary: 'Create understandable Git-backed history without using Git commands.',
    command: 'cd ookkaayy-versions\ncargo run --release -- serve',
    steps: [
      'Open http://127.0.0.1:43112',
      'Choose an absolute Markdown folder',
      'Review detected working changes',
      'Save a named version before risky edits',
    ],
  },
  {
    id: 'suite-composition',
    product: 'suite',
    title: 'Use the products together',
    summary: 'Let Wiki coordinate read-only Search and protected Version actions over loopback.',
    steps: [
      'Start Search on port 43110 and Version on port 43112',
      'Start Wiki on port 43111',
      'Open Wiki settings and map the same absolute collection root',
      'Confirm each integration health check before invoking it',
    ],
    note: 'Only one sync authority may manage a collection. Search always remains read-only.',
  },
  {
    id: 'mcp',
    product: 'suite',
    title: 'Connect an AI tool with MCP',
    summary: 'Expose narrow local tools over standard input and output.',
    command: 'cargo run --release -- mcp',
    steps: [
      'Use the product repository as the working directory',
      'Configure the command in your MCP client',
      'Keep write actions disabled for read-only access',
      'Add --allow-mcp-writes only when you intend to permit mutations',
    ],
    note: 'Never expose the MCP process over a network transport without a separate authenticated gateway.',
  },
  {
    id: 'http-security',
    product: 'suite',
    title: 'Serve safely',
    summary: 'Understand the boundary between local UI access and automation APIs.',
    steps: [
      'The browser UI binds to loopback by default',
      'Non-loopback bindings are refused without authentication',
      'Loopback APIs are unauthenticated by default and rely on operating-system access controls',
      'Non-loopback bindings require a bearer token; use a reverse proxy with TLS for intentional remote deployment',
    ],
  },
  {
    id: 'recovery',
    product: 'version',
    title: 'Restore without losing work',
    summary: 'Version restoration is additive and preserves the state being replaced.',
    steps: [
      'Open the target version and inspect its rendered comparison',
      'Start restore and wait for the durable job',
      'Resolve any surfaced conflicts explicitly',
      'Use the recovery version to return to the pre-restore state if needed',
    ],
  },
  {
    id: 'wiki-sync',
    product: 'wiki',
    title: 'Synchronize between devices',
    summary: 'Use a dedicated mounted or shared folder with three-way conflict protection.',
    steps: [
      'Open Sync and choose a dedicated folder outside the collection',
      'Enable Wiki-managed sync; Version verifies that no Git-remote authority is active',
      'Run Sync now or continue editing offline until the folder is available',
      'For divergent edits, compare both snapshots and keep one side or combine the text',
    ],
    note: 'Sync includes Markdown and _attachments. A stale conflict choice is refused if either file changed again.',
  },
  {
    id: 'wiki-publish',
    product: 'wiki',
    title: 'Publish a static collection',
    summary: 'Generate a clean, portable site without making publishing the source of truth.',
    steps: [
      'Choose Publish from a page',
      'Select an output folder outside the collection',
      'Publish the current page or the full collection as an observable job',
      'Serve the generated HTML, CSS, and copied attachments with any static host',
    ],
  },
  {
    id: 'search-filters',
    product: 'search',
    title: 'Narrow retrieval precisely',
    summary: 'Combine semantic and keyword ranking with structured collection filters.',
    steps: [
      'Enter a word, phrase, identifier, or question',
      'Choose a collection or path prefix when scope matters',
      'Apply tags, typed properties, or inclusive modification dates',
      'Open the exact matching section or retrieve it through MCP',
    ],
  },
  {
    id: 'search-rebuild',
    product: 'search',
    title: 'Repair or rebuild an index',
    summary: 'Recover the derived SQLite index without touching Markdown.',
    steps: [
      'Confirm the collection folder still exists and is readable',
      'Run indexing again and inspect the durable job status',
      'Changed and removed files reconcile incrementally',
      'Delete and re-register only if the collection root itself changed',
    ],
    note: 'Search never edits source content. The complete index is disposable and rebuildable.',
  },
  {
    id: 'version-automatic',
    product: 'version',
    title: 'Configure automatic protection',
    summary: 'Coalesce quiet edits into labeled checkpoints without cluttering the timeline.',
    steps: [
      'Open Automatic protection and enable the collection policy',
      'Set the quiet period after edits and minimum checkpoint interval',
      'Unsafe or conflicted repositories pause automatically',
      'The timeline shows hourly, daily, then weekly automatic representatives while preserving every Git commit',
    ],
  },
  {
    id: 'version-remote',
    product: 'version',
    title: 'Connect a Git remote',
    summary: 'Synchronize standard history through system-managed Git credentials.',
    steps: [
      'Save all working changes and resolve conflicts',
      'Connect a private or self-hosted remote URL',
      'Confirm Wiki-managed sync is disabled for this collection',
      'Run Sync and resolve document conflicts before continuing',
    ],
    note: 'Credentials stay in the operating system or configured Git credential helper, never in Markdown or the local catalogue.',
  },
  {
    id: 'api-reference',
    product: 'suite',
    title: 'Use the versioned HTTP contracts',
    summary: 'Integrate through /api/v1 without depending on private catalogues.',
    steps: [
      'GET /api/v1/health and verify api_version before other calls',
      'Use collection IDs returned by each product; never infer internal database rows',
      'Treat HTTP 202 responses as jobs and poll /api/v1/jobs/{id}',
      'Handle revision_conflict, needs_attention, and integration_unavailable as actionable states',
    ],
  },
  {
    id: 'troubleshooting',
    product: 'suite',
    title: 'Diagnose a local setup',
    summary: 'Separate filesystem, companion, network, and history failures quickly.',
    command: 'cargo run --release -- doctor',
    steps: [
      'Run doctor in the affected repository',
      'Check that the collection path is absolute, readable, and not overlapping an output or sync folder',
      'Verify companion health on loopback before re-enabling suite integration',
      'Inspect the failed job message; retry only after its stated unsafe condition is settled',
    ],
  },
] as const;
