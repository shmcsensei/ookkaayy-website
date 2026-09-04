import type { Metadata } from 'next';
import { ProductPage } from '@/components/product-page';
export const metadata: Metadata = { title: 'Content', alternates: { canonical: '/content' } };
export default function Content() {
  return <ProductPage product="content" />;
}
