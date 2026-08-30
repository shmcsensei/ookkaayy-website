import { Page } from '@/components/site';
import { products } from '@/lib/products';
export default function Docs() {
  return (
    <Page>
      <section className="page-hero shell">
        <p className="kicker">Documentation</p>
        <h1>From install to useful in minutes.</h1>
        <p className="hero-copy">
          Every application runs locally with Rust 1.98 or newer. No account, cloud service, or
          database daemon is required.
        </p>
      </section>
      <section className="docs-grid shell">
        {Object.entries(products).map(([key, item]) => (
          <article id={key} key={key} className="doc-card">
            <p className="kicker">Ookkaayy {item.name}</p>
            <h2>First run</h2>
            <pre>
              <code>{`cd ookkaayy-${key === 'version' ? 'versions' : key}\ncargo test --all-targets\ncargo run -- serve`}</code>
            </pre>
            <p>
              Open <code>http://127.0.0.1:{item.port}</code>, choose an absolute Markdown folder
              path, and follow the focused workflow.
            </p>
            <h3>AI access</h3>
            <pre>
              <code>cargo run -- mcp</code>
            </pre>
            <p>
              Write-capable MCP operations remain disabled unless you explicitly pass{' '}
              <code>--allow-mcp-writes</code>. Search tools are always read-only.
            </p>
          </article>
        ))}
      </section>
      <section className="scope shell">
        <p className="kicker">Local networking</p>
        <h2>Loopback is the safe default.</h2>
        <p>
          The applications refuse non-loopback bindings without authentication. Content stays on
          your device unless you explicitly configure synchronization, publishing, or another
          provider.
        </p>
      </section>
    </Page>
  );
}
