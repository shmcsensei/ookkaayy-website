import type { Metadata } from 'next';
import { Page } from '@/components/site';
import { products } from '@/lib/products';
export const metadata: Metadata = { title: 'Compare', alternates: { canonical: '/compare' } };
const rows = [
  ['Create and edit Markdown', 'Yes', 'No — read only', 'Only during restore/sync'],
  ['Local full-text search', 'Built in', 'Advanced retrieval', 'No'],
  ['Metadata and backlinks', 'Create and manage', 'Index and retrieve', 'History only'],
  ['Save version history', 'Via Version integration', 'No', 'Yes — standard Git'],
  ['Restore earlier content', 'Via Version integration', 'No', 'Yes — recovery protected'],
  ['MCP access', 'Read and permissioned write', 'Read only', 'Read and permissioned actions'],
  ['Works alone', 'Yes', 'Yes', 'Yes'],
];
export default function Compare() {
  return (
    <Page>
      <section className="page-hero shell">
        <p className="kicker">Choose by responsibility</p>
        <h1>Write. Find. Protect.</h1>
        <p className="hero-copy">
          Start with the job you need today. Add another product later without migrating your
          Markdown.
        </p>
      </section>
      <section className="content-section">
        <div className="shell table-wrap">
          <table>
            <caption>Ookkaayy product responsibility comparison</caption>
            <thead>
              <tr>
                <th>Job</th>
                {Object.values(products).map((product) => (
                  <th key={product.name}>{product.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) =>
                    index === 0 ? (
                      <th scope="row" key={cell}>
                        {cell}
                      </th>
                    ) : (
                      <td key={`${row[0]}-${cell}`}>{cell}</td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="scope shell">
        <p className="kicker">Recommended suite</p>
        <h2>Content writes. Search finds. Version protects.</h2>
        <p>
          All three can observe the same folder. Only one synchronization authority is active for a
          collection, preventing competing systems from merging the same working tree.
        </p>
      </section>
    </Page>
  );
}
