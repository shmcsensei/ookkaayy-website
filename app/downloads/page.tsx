import type { Metadata } from 'next';
import Link from 'next/link';
import { Page } from '@/components/site';
import { products } from '@/lib/products';
import { releases } from '@/lib/releases';
import { sitePath } from '@/lib/paths';

export const metadata: Metadata = {
  title: 'Download for Mac',
  description: 'Download Ookkaayy Content, Search, and Version for macOS.',
  alternates: { canonical: '/downloads' },
};

const megabytes = (bytes: number) => `${(bytes / 1_000_000).toFixed(1)} MB`;

export default function Downloads() {
  return (
    <Page>
      <section className="page-hero shell">
        <p className="kicker">Download for macOS</p>
        <h1>Pick an app. Open the DMG. Start working.</h1>
        <p className="hero-copy">
          Ookkaayy is currently available for Apple silicon Macs. Each download is a complete app—no
          source checkout, developer tools, or account required.
        </p>
      </section>
      <section className="release-list shell" aria-label="Ookkaayy downloads">
        {releases.map((release) => {
          const product = products[release.product];
          return (
            <article
              className={`release download-release ${release.product}`}
              id={release.product}
              key={release.product}
            >
              <header>
                <div>
                  <span className="channel">macOS · v{release.version}</span>
                  <h2>Ookkaayy {product.name}</h2>
                  <p>{product.promise}</p>
                </div>
                <a
                  className="button download-button"
                  href={sitePath(release.downloadPath)}
                  download
                >
                  Download for Mac
                </a>
              </header>
              <div className="download-details">
                <span>{release.architecture}</span>
                <span>{release.requirements}</span>
                <span>{megabytes(release.sizeBytes)}</span>
              </div>
              <div className="release-bottom">
                <div>
                  <h3>What is included</h3>
                  <ul>
                    {release.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Install in two steps</h3>
                  <ol>
                    <li>Open the downloaded DMG.</li>
                    <li>Drag Ookkaayy {product.name} into Applications.</li>
                  </ol>
                  <Link href={`/docs#${release.product}-first-run`}>
                    Read the first-run guide →
                  </Link>
                </div>
              </div>
              <details className="integrity">
                <summary>Verify this download</summary>
                <p>
                  Built {release.builtOn} from revision <code>{release.revision}</code>
                </p>
                <code className="checksum">SHA-256 {release.sha256}</code>
              </details>
            </article>
          );
        })}
      </section>
      <section className="scope shell" id="cli">
        <p className="kicker">Homebrew, CLI, and headless distributions</p>
        <h2>Install the CLI, API, and MCP servers.</h2>
        <p>
          The Ookkaayy Homebrew tap provides separate CLI Casks for Content, Search, and Version.
          Each private, prebuilt binary includes terminal commands, a headless HTTP API, and its own
          standard-input/output MCP server. Homebrew verifies the versioned archive checksum and
          places the product command on PATH.
        </p>
        <pre>
          <code>
            {'brew tap ookkaayy-ai/tap\n'}
            {'brew trust ookkaayy-ai/tap\n'}
            {
              'brew install --cask ookkaayy-content-cli ookkaayy-search-cli ookkaayy-version-cli'
            }
          </code>
        </pre>
        <p>
          Version 0.1.0 currently supports Apple-silicon Macs running macOS 11 or newer. These early
          CLI binaries are ad-hoc signed and not yet notarized.
        </p>
        <div className="actions">
          <Link className="button secondary" href="/docs#install-cli">
            Preview CLI installation
          </Link>
          <Link className="button secondary" href="/docs#content-mcp">
            Review MCP options
          </Link>
        </div>
      </section>
      <section className="scope shell">
        <p className="kicker">Before you install</p>
        <h2>Early macOS builds.</h2>
        <p>
          These apps are ad-hoc signed, but not yet Developer ID signed, notarized, or automatically
          updated. macOS will ask you to approve the first launch in System Settings → Privacy &amp;
          Security. The checksum shown with each app verifies the exact file you downloaded.
        </p>
      </section>
    </Page>
  );
}
