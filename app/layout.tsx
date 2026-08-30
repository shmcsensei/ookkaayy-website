import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:3000'),
  title: { default: 'Ookkaayy — Own your Markdown', template: '%s · Ookkaayy' },
  description:
    'Write, find, and protect your knowledge as ordinary Markdown with local-first tools that work offline.',
  openGraph: {
    title: 'Ookkaayy',
    description: 'Write · Find · Protect your Markdown',
    images: [
      {
        url: '/og.png',
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
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
