import type { ReactNode } from 'react';
import Link from 'next/link';
export function Header() {
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
            <Link href="/wiki">Wiki</Link>
            <Link href="/search">Search</Link>
            <Link href="/version">Version</Link>
            <Link href="/compare">Compare</Link>
            <Link href="/docs">Docs</Link>
            <Link className="button" href="/downloads">
              Download
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <span>© 2026 Ookkaayy</span>
        <nav aria-label="Footer">
          <Link href="/about">About</Link> · <Link href="/docs">Documentation</Link> ·{' '}
          <Link href="/downloads">Downloads</Link>
        </nav>
      </div>
    </footer>
  );
}
export function Page({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
