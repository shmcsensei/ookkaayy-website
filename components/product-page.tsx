import { Page } from './site';
import { products, type ProductKey } from '@/lib/products';
import { sitePath } from '@/lib/paths';
import Link from 'next/link';
export function ProductPage({ product }: Readonly<{ product: ProductKey }>) {
  const item = products[product];
  return (
    <Page>
      <section
        className="page-hero shell"
        style={{ '--product-accent': item.accent } as React.CSSProperties}
      >
        <p className="kicker">
          {item.verb} with Ookkaayy {item.name}
        </p>
        <h1>{item.promise}</h1>
        <p className="hero-copy">{item.description}</p>
        <div className="actions">
          <Link className="button" href={`/downloads#${product}`}>
            Run {item.name} locally
          </Link>
          <Link className="button secondary" href={`/docs#${product}`}>
            Read the guide
          </Link>
        </div>
      </section>
      <section className="content-section">
        <div className="shell split">
          <div>
            <p className="kicker">Core experience</p>
            <h2>Focused on one job.</h2>
            <ul className="feature-list">
              {item.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="workflow-card">
            <p className="kicker">A calm workflow</p>
            <ol>
              {item.workflow.map((step, index) => (
                <li key={step}>
                  <span>{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="product-proof shell" aria-labelledby={`${product}-proof`}>
        <div className="proof-heading">
          <div>
            <p className="kicker">Verified interface</p>
            <h2 id={`${product}-proof`}>{item.name}, working on real Markdown.</h2>
          </div>
          <p>
            Captured from the local v0.1 development build on{' '}
            <time dateTime={item.screenshot.verifiedAt}>{item.screenshot.verifiedAt}</time>.
          </p>
        </div>
        <figure className="product-shot">
          <img
            src={sitePath(item.screenshot.src)}
            alt={item.screenshot.alt}
            width="1280"
            height="720"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            This is the product UI—not a marketing reconstruction. The example collection is shared
            across Content, Search, and Version.
          </figcaption>
        </figure>
      </section>
      <section className="scope shell">
        <p className="kicker">Clear responsibility</p>
        <h2>{item.scope}</h2>
        <p>
          That boundary keeps each application independently useful and lets the suite compose
          through public contracts and ordinary files.
        </p>
        <Link href="/compare">See how the products fit together →</Link>
      </section>
    </Page>
  );
}
