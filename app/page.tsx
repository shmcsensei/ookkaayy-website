import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { alternates: { canonical: '/' } };

const products = [
  {
    slug: 'wiki',
    verb: 'Write',
    name: 'Wiki',
    copy: 'Create and organize notes, documentation, research, and publishable pages as ordinary Markdown.',
  },
  {
    slug: 'search',
    verb: 'Find',
    name: 'Search',
    copy: 'Index and retrieve current Markdown by exact words, meaning, metadata, headings, and links.',
  },
  {
    slug: 'version',
    verb: 'Protect',
    name: 'Version',
    copy: 'Save understandable, Git-backed history and restore earlier content without learning Git.',
  },
];
export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <nav className="nav shell" aria-label="Main navigation">
          <Link className="logo" href="/">
            ookkaayy<span>.</span>
          </Link>
          <div className="nav-links">
            <Link href="/compare">Compare</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/about">About</Link>
            <Link className="button" href="/downloads">
              Download
            </Link>
          </div>
        </nav>
      </header>
      <main id="main">
        <section className="hero">
          <div className="hero-grid shell">
            <div>
              <p className="kicker">Local-first Markdown tools</p>
              <h1>
                Your knowledge.
                <br />
                Your files.
                <br />
                Ookkaayy.
              </h1>
              <p className="hero-copy">
                Write, find, and protect everything you know as simple Markdown—offline, portable,
                and never trapped in somebody else’s cloud.
              </p>
              <div className="actions">
                <Link className="button" href="/downloads">
                  Get Ookkaayy
                </Link>
                <Link className="button secondary" href="/compare">
                  Choose your tools
                </Link>
              </div>
            </div>
            <div className="markdown-window" aria-label="Example Markdown document">
              <div className="window-bar">
                <i />
                <i />
                <i />
              </div>
              <div className="code">
                <span className="comment">---</span>
                <br />
                <span className="token">title:</span> Project Atlas
                <br />
                <span className="token">status:</span> active
                <br />
                <span className="token">tags:</span> [research, local-first]
                <br />
                <span className="comment">---</span>
                <br />
                <br />
                <span className="token"># Project Atlas</span>
                <br />
                <br />
                Knowledge should stay useful
                <br />
                long after an app disappears.
                <br />
                <br />
                <span className="token">## Decision</span>
                <br />
                <br />
                Keep Markdown as the source of truth.
              </div>
            </div>
          </div>
        </section>
        <section className="responsibilities">
          <div className="shell">
            <div className="section-head">
              <p className="kicker">One format, three clear jobs</p>
              <h2>Install only what you need. They become better together.</h2>
              <p>
                No overlapping databases or proprietary handoffs. Every product works directly with
                the same normal Markdown folders.
              </p>
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  className={`product-card ${product.slug}`}
                  href={`/${product.slug}`}
                >
                  <span className="verb">{product.verb}</span>
                  <h3>Ookkaayy {product.name}</h3>
                  <p>{product.copy}</p>
                  <span className="learn">Explore {product.name} →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="substrate">
          <div className="substrate-box shell">
            <div>
              <p className="kicker">Markdown at the center</p>
              <h2>Useful without us.</h2>
              <p>
                Your pages and attachments remain readable in any text editor. Every catalogue,
                search index, cache, and interface can be rebuilt. The files are the product.
              </p>
            </div>
            <div className="principles">
              <div className="principle">
                <strong>Works offline</strong>
                <span>No account or network required for the core experience.</span>
              </div>
              <div className="principle">
                <strong>Local by default</strong>
                <span>
                  Networking, synchronization, publishing, and AI access are explicit choices.
                </span>
              </div>
              <div className="principle">
                <strong>Open escape hatches</strong>
                <span>Normal Markdown and standard Git remain usable with other tools.</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="shell">
          <span>© 2026 Ookkaayy</span>
          <span>Write · Find · Protect</span>
        </div>
      </footer>
    </>
  );
}
