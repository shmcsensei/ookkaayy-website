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
    summary: 'Download the packaged applications and open them locally.',
    steps: [
      'Download Content, Search, and Version from the Downloads page',
      'Open each disk image and drag the application into Applications',
      'Approve the first launch in System Settings → Privacy & Security when macOS asks',
      'Open Content and enable Search or Version only for the folders that need them',
    ],
    note: 'Core use is offline. No developer toolchain or account is required.',
  },
  {
    id: 'content-first-run',
    product: 'content',
    title: 'Create your first page',
    summary: 'Open an ordinary Markdown folder and begin authoring immediately.',
    steps: [
      'Open Ookkaayy Content from Applications',
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
    steps: [
      'Open Ookkaayy Search from Applications',
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
    steps: [
      'Open Ookkaayy Version from Applications',
      'Choose an absolute Markdown folder',
      'Review detected working changes',
      'Save a named version before risky edits',
    ],
  },
  {
    id: 'suite-composition',
    product: 'suite',
    title: 'Use the products together',
    summary: 'Let Content coordinate read-only Search and protected Version actions over loopback.',
    steps: [
      'Start Search on port 43110 and Version on port 43112',
      'Start Content on port 43111',
      'Open Content settings and map the same absolute collection root',
      'Confirm each integration health check before invoking it',
    ],
    note: 'Only one sync authority may manage a collection. Search always remains read-only.',
  },
  {
    id: 'content-mcp',
    product: 'content',
    title: 'Connect Content with MCP',
    summary: 'Let an AI tool find and read pages, with separately permissioned editing.',
    command: 'ookkaayy-content --data-dir /path/to/content-state mcp',
    steps: [
      'Configure the installed ookkaayy-content binary as a standard-input/output MCP server',
      'Use the same data directory that contains the collections the MCP client should access',
      'Search, read, list, inspect metadata, and retrieve backlinks with writes disabled',
      'Add --allow-mcp-writes before mcp only to permit page and metadata creation or updates',
    ],
    note: 'Write tools are rejected by default. Never expose the MCP process over a network transport without a separate authenticated gateway.',
  },
  {
    id: 'search-mcp',
    product: 'search',
    title: 'Connect Search with MCP',
    summary: 'Give an AI tool read-only retrieval over indexed Markdown.',
    command: 'ookkaayy-search --data-dir /path/to/search-state mcp',
    steps: [
      'Configure the installed ookkaayy-search binary as a standard-input/output MCP server',
      'Use the same data directory that contains the registered and indexed collections',
      'Search pages and sections with collection, path, tag, property, and date filters',
      'Retrieve complete pages, metadata, collections, and links without granting writes',
    ],
    note: 'Search MCP is always read-only and exposes seven retrieval tools.',
  },
  {
    id: 'version-mcp',
    product: 'version',
    title: 'Connect Version with MCP',
    summary: 'Let an AI tool review and compare history, with separately permissioned actions.',
    command: 'ookkaayy-version --data-dir /path/to/version-state mcp',
    steps: [
      'Configure the installed ookkaayy-version binary as a standard-input/output MCP server',
      'Use the same data directory that contains the protected collections',
      'List collections and versions, review changes, compare history, and preview restores with writes disabled',
      'Add --allow-mcp-writes before mcp only to permit saving, restoring, or synchronizing versions',
    ],
    note: 'Save, restore, and sync are rejected by default. Sync also requires explicit network permission in the host.',
  },
  {
    id: 'headless',
    product: 'suite',
    title: 'Run a headless API service',
    summary: 'Use the same product engine without the desktop shell or browser interface.',
    command:
      "ookkaayy-search --no-web --bind 127.0.0.1:43110 serve\n# Replace the product and port with Content/43111 or Version/43112",
    steps: [
      'Install the product’s -cli Cask from the Ookkaayy Homebrew tap',
      'Pass --no-web before serve to start only the versioned HTTP API',
      'Keep the default loopback bind when the caller runs on the same machine',
      'For another network interface, add a long --auth-token and an exact --cors-origin allowlist, then terminate TLS at a trusted reverse proxy',
    ],
    note: 'A non-loopback bind is refused without bearer authentication. Containers and remote hosts must mount the Markdown and data folders explicitly.',
  },
  {
    id: 'install-cli',
    product: 'suite',
    title: 'Install a command-line binary',
    summary: 'Install a prebuilt command-line, headless API, and MCP binary with Homebrew.',
    command:
      'brew tap ookkaayy-ai/tap\nbrew trust ookkaayy-ai/tap\nbrew install --cask ookkaayy-search-cli\nxattr -d com.apple.quarantine "$(brew --prefix)/bin/ookkaayy-search"\nookkaayy-search doctor',
    steps: [
      'Install Homebrew, add the Ookkaayy package tap, and explicitly trust that third-party tap',
      'Install ookkaayy-content-cli, ookkaayy-search-cli, or ookkaayy-version-cli',
      'Homebrew downloads the versioned binary archive, verifies its checksum, and places the command on PATH',
      'For the ad-hoc-signed v0.1.0 build, explicitly remove macOS quarantine from that installed command once',
      'Run doctor, then use --help to see product-specific commands and options',
    ],
    note: 'The current v0.1.0 CLI Casks support Apple-silicon Macs running macOS 11 or newer. They are ad-hoc signed and not yet notarized. Their included proprietary license permits worldwide personal and internal business use but not redistribution or hosted third-party services.',
  },
  {
    id: 'install-homebrew-apps',
    product: 'suite',
    title: 'Install the desktop apps with Homebrew',
    summary: 'Install and upgrade packaged macOS applications from the same Ookkaayy tap.',
    command:
      'brew tap ookkaayy-ai/tap\nbrew trust ookkaayy-ai/tap\nbrew install --cask ookkaayy-content ookkaayy-search ookkaayy-version',
    steps: [
      'Add and trust the Ookkaayy tap once on the Mac',
      'Install one application or all three application casks',
      'Use brew upgrade to receive later signed releases',
      'Use brew uninstall --cask with the package name to remove an application',
    ],
    note: 'The Homebrew tap is live. The current desktop Casks install the existing v0.1.0 disk-image releases.',
  },
  {
    id: 'use-cli',
    product: 'suite',
    title: 'Use the command-line tools',
    summary: 'Run diagnostics, local services, MCP servers, and Search maintenance from a terminal.',
    command:
      'ookkaayy-content doctor\nookkaayy-search add /absolute/path/to/markdown --name "Notes"\nookkaayy-search search "release checklist"\nookkaayy-version --no-web serve',
    steps: [
      'Use ookkaayy-content, ookkaayy-search, or ookkaayy-version for the selected product',
      'Run doctor first to verify that its private data directory can be opened',
      'Use serve for the browser and API, or place --no-web before serve for an API-only process',
      'Search additionally supports add, list, index, rebuild, and search commands with JSON output',
    ],
    note: 'Pass global options such as --data-dir, --bind, and --no-web before the subcommand.',
  },
  {
    id: 'embed-sdk',
    product: 'suite',
    title: 'Embed Ookkaayy in another system',
    summary: 'Use a stable packaged boundary without distributing the product source.',
    steps: [
      'Run the packaged headless binary as a supervised local service or sidecar',
      'Wait for GET /api/v1/health to report the expected api_version',
      'Call the documented /api/v1 HTTP contract from any programming language',
      'Pin the Ookkaayy release version and verify its checksum during deployment',
    ],
    note: 'A native SDK can be added later as a versioned C-compatible library and headers. The headless HTTP boundary is the portable integration supported today.',
  },
  {
    id: 'distribution-channels',
    product: 'suite',
    title: 'Choose an integration boundary',
    summary: 'Pick the smallest stable surface that matches the system hosting Ookkaayy.',
    steps: [
      'Use a future native SDK only when an in-process integration is required',
      'Use the headless HTTP API for services written in another language or running as another process',
      'Use MCP over standard input and output for AI tools with a narrow, permissioned tool surface',
      'Use the CLI for scripts, maintenance, diagnostics, and local service supervision',
    ],
    note: 'All transports delegate to the same engine. Integrate through public models and /api/v1 contracts, never through the private catalogue schema.',
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
    id: 'content-sync',
    product: 'content',
    title: 'Synchronize between devices',
    summary: 'Use a dedicated mounted or shared folder with three-way conflict protection.',
    steps: [
      'Open Sync and choose a dedicated folder outside the collection',
      'Enable Content-managed sync; Version verifies that no Git-remote authority is active',
      'Run Sync now or continue editing offline until the folder is available',
      'For divergent edits, compare both snapshots and keep one side or combine the text',
    ],
    note: 'Sync includes Markdown and _attachments. A stale conflict choice is refused if either file changed again.',
  },
  {
    id: 'content-publish',
    product: 'content',
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
      'Confirm Content-managed sync is disabled for this collection',
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
    command: 'ookkaayy-search doctor',
    steps: [
      'Run doctor with the installed command-line binary for the affected product',
      'Check that the collection path is absolute, readable, and not overlapping an output or sync folder',
      'Verify companion health on loopback before re-enabling suite integration',
      'Inspect the failed job message; retry only after its stated unsafe condition is settled',
    ],
  },
] as const;
