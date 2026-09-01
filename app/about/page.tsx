import type { Metadata } from 'next';
import { Page } from '@/components/site';
export const metadata: Metadata = { title: 'About', alternates: { canonical: '/about' } };
export default function About() {
  return (
    <Page>
      <section className="page-hero shell">
        <p className="kicker">About Ookkaayy</p>
        <h1>Software can disappear. Your knowledge should not.</h1>
        <p className="hero-copy">
          Ookkaayy is built around an unfashionable, durable idea: useful text should remain
          understandable without the application that created it.
        </p>
      </section>
      <section className="content-section">
        <div className="shell split">
          <div>
            <h2>Local first is a technical boundary.</h2>
            <p>
              Core authoring, retrieval, and history work offline without an account. Network access
              is an optional capability with an explicit owner and visible state.
            </p>
          </div>
          <div>
            <h2>Markdown is the durable substrate.</h2>
            <p>
              Product databases contain disposable catalogues and preferences. Current content stays
              in Markdown; history stays in standard Git.
            </p>
          </div>
        </div>
      </section>
      <section className="scope shell">
        <p className="kicker">Privacy posture</p>
        <h2>Collect as little as practical.</h2>
        <p>
          The public site has no third-party trackers, fingerprinting, account requirement, or
          remotely loaded fonts. Local applications do not send content anywhere unless a user
          configures and invokes a network capability.
        </p>
      </section>
    </Page>
  );
}
