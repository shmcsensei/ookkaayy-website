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
    command: 'cargo tauri build',
    steps: [
      'Install Rust 1.98+ and Node.js 22+',
      'Clone the four sibling repositories into one parent folder',
      'Build each desktop crate with cargo tauri build',
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
      'Automation endpoints require an explicit bearer token',
      'Use a reverse proxy with TLS for any intentionally remote deployment',
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
] as const;
