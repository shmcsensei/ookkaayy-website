import type { ReactNode } from 'react';
export function Header() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <nav className="nav shell" aria-label="Main navigation">
          <a className="logo" href="/">
            ookkaayy<span>.</span>
          </a>
          <div className="nav-links">
            <a href="/wiki">Wiki</a>
            <a href="/search">Search</a>
            <a href="/version">Version</a>
            <a href="/compare">Compare</a>
            <a href="/docs">Docs</a>
            <a className="button" href="/downloads">
              Download
            </a>
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
          <a href="/about">About</a> · <a href="/docs">Documentation</a> ·{' '}
          <a href="/downloads">Downloads</a>
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
