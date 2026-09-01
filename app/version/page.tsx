import type { Metadata } from 'next';
import { ProductPage } from '@/components/product-page';
export const metadata: Metadata = { title: 'Version', alternates: { canonical: '/version' } };
export default function Version() {
  return <ProductPage product="version" />;
}
