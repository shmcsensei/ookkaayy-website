import { Page } from './site';
import { products, type ProductKey } from '@/lib/products';
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
          <a className="button" href={`/downloads#${product}`}>
            Run {item.name} locally
          </a>
          <a className="button secondary" href={`/docs#${product}`}>
            Read the guide
          </a>
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
      <section className="scope shell">
        <p className="kicker">Clear responsibility</p>
        <h2>{item.scope}</h2>
        <p>
          That boundary keeps each application independently useful and lets the suite compose
          through public contracts and ordinary files.
        </p>
        <a href="/compare">See how the products fit together →</a>
      </section>
    </Page>
  );
}
