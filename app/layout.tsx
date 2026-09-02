import type { Metadata } from 'next';
import { sitePolicy } from '../lib/site-policy';
import './globals.css';
import { sitePath } from '../lib/paths';

const siteUrl = process.env.SITE_URL ?? 'http://localhost:3000';
const socialImage = new URL(sitePath('/og.png'), `${new URL(siteUrl).origin}/`).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Ookkaayy — Own your Markdown', template: '%s · Ookkaayy' },
  description:
    'Write, find, and protect your knowledge as ordinary Markdown with local-first tools that work offline.',
  openGraph: {
    title: 'Ookkaayy',
    description: 'Write · Find · Protect your Markdown',
    images: [
      {
        url: socialImage,
        width: 1536,
        height: 1024,
        alt: 'Ookkaayy — Write, Find, Protect your Markdown',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ookkaayy',
    description: 'Write · Find · Protect your Markdown',
    images: [socialImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={sitePolicy.defaultLocale}>
      <body>{children}</body>
    </html>
  );
}
