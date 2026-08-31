import type { Metadata } from 'next';
import { Page } from '@/components/site';
import { products } from '@/lib/products';
import { releases, repositoryDirectory } from '@/lib/releases';

export const metadata: Metadata = {
  title: 'Downloads',
  description: 'Verified local development builds and source instructions for Ookkaayy.',
};

export default function Downloads() {
  return (
    <Page>
      <section className="page-hero shell">
        <p className="kicker">Local release catalog</p>
        <h1>Use the builds that actually exist.</h1>
        <p className="hero-copy">
          The current development channel includes native macOS builds. They are local, unsigned
          development artifacts—not public stable releases—and every source path is shown
          explicitly.
        </p>
      </section>
      <section className="release-list shell">
        {releases.map((release) => {
          const product = products[release.product];
          return (
            <article className="release" id={release.product} key={release.product}>
              <header>
                <div>
                  <span className="channel">Development · v{release.version}</span>
                  <h2>Ookkaayy {product.name}</h2>
                  <p>{product.promise}</p>
                </div>
                <dl>
                  <div>
                    <dt>Built</dt>
                    <dd>
                      <time dateTime={release.builtOn}>{release.builtOn}</time>
                    </dd>
                  </div>
                  <div>
                    <dt>Revision</dt>
                    <dd>
                      <code>{release.revision}</code>
                    </dd>
                  </div>
                </dl>
              </header>
              <div className="artifact-table table-wrap">
                <table>
                  <caption>Available {product.name} artifacts</caption>
                  <thead>
                    <tr>
                      <th>Package</th>
                      <th>Platform</th>
                      <th>Requirements</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {release.artifacts.map((artifact) => (
                      <tr key={`${artifact.platform}-${artifact.kind}`}>
                        <th scope="row">
                          {artifact.kind.toUpperCase()} · {artifact.architecture}
                        </th>
                        <td>{artifact.platform}</td>
                        <td>{artifact.requirements}</td>
                        <td>
                          <strong>{artifact.status}</strong>
                          {artifact.location && (
                            <code className="artifact-path">{artifact.location}</code>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="release-bottom">
                <div>
                  <h3>What is in this build</h3>
                  <ul>
                    {release.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Build from source</h3>
                  <pre>
                    <code>{`cd ${repositoryDirectory(release.product)}\ncargo test --all-targets\ncargo tauri build`}</code>
                  </pre>
                  <a href={`/docs#${release.product}-first-run`}>Read the first-run guide →</a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
      <section className="scope shell">
        <p className="kicker">Release trust</p>
        <h2>Development means development.</h2>
        <p>
          These builds are not notarized, signed, or automatically updated. Stable download links
          will appear only when a release pipeline supplies immutable files, SHA-256 checksums,
          signatures, sizes, publication dates, and release notes. Until then, verify the revision
          above and build locally.
        </p>
      </section>
    </Page>
  );
}
