import type { Metadata } from 'next';
import { DocsExplorer } from '@/components/docs-explorer';
import { Page } from '@/components/site';
import { guides } from '@/lib/docs';

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Install, configure, integrate, and recover Ookkaayy local-first Markdown tools.',
};

export default function Docs() {
  return (
    <Page>
      <section className="page-hero shell">
        <p className="kicker">Documentation · v0.1</p>
        <h1>From install to useful, without a cloud account.</h1>
        <p className="hero-copy">
          Start with a task. Every networked, synchronized, or write-capable action is identified at
          the point where it matters.
        </p>
      </section>
      <DocsExplorer guides={guides} />
      <section className="scope shell">
        <p className="kicker">Reference boundaries</p>
        <h2>Three public contracts, one ordinary folder.</h2>
        <p>
          Search exposes read-only HTTP and MCP retrieval. Version exposes protected history
          actions. Wiki coordinates both over authenticated loopback contracts while keeping
          Markdown as the source of truth.
        </p>
        <div className="actions">
          <a className="button secondary" href="/compare">
            Review product ownership
          </a>
          <a className="button secondary" href="/downloads">
            Check local builds
          </a>
        </div>
      </section>
    </Page>
  );
}
