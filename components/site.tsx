import type { ReactNode } from 'react';
import Link from 'next/link';

const navigation = [
  { href: '/content', label: 'Content' },
  { href: '/search', label: 'Search' },
  { href: '/version', label: 'Version' },
  { href: '/compare', label: 'Compare' },
  { href: '/docs', label: 'Docs' },
  { href: '/about', label: 'About' },
] as const;

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
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="button" href="/downloads">
              Download
            </Link>
          </div>
          <details className="mobile-menu">
            <summary aria-label="Open main navigation">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </summary>
            <div className="mobile-menu-panel">
              {navigation.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link className="button" href="/downloads">
                Download
              </Link>
            </div>
          </details>
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
