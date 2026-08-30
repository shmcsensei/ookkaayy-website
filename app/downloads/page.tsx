import { Page } from '@/components/site';
import { products } from '@/lib/products';
export default function Downloads() {
  return (
    <Page>
      <section className="page-hero shell">
        <p className="kicker">Downloads</p>
        <h1>Run the source release locally.</h1>
        <p className="hero-copy">
          Packaged desktop installers are not published yet. The current development release builds
          reproducibly from each repository and works fully offline after dependencies are
          installed.
        </p>
      </section>
      <section className="download-grid shell">
        {Object.entries(products).map(([key, item]) => (
          <article className="download-card" id={key} key={key}>
            <span className="channel">Development · v0.1.0</span>
            <h2>Ookkaayy {item.name}</h2>
            <p>{item.promise}</p>
            <pre>
              <code>{`cd ookkaayy-${key === 'version' ? 'versions' : key}\ncargo run --release -- serve`}</code>
            </pre>
            <p className="availability">
              macOS and Linux source builds · Rust 1.98+ · Localhost port {item.port}
            </p>
            <a className="button secondary" href={`/docs#${key}`}>
              Installation guide
            </a>
          </article>
        ))}
      </section>
      <section className="scope shell">
        <p className="kicker">Release trust</p>
        <h2>No imaginary downloads.</h2>
        <p>
          This page will list signed packages, checksums, publication dates, architectures, and
          release notes only when the release pipeline produces them. Development builds are labeled
          honestly.
        </p>
      </section>
    </Page>
  );
}
