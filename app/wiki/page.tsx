import type { Metadata } from 'next';
import { ProductPage } from '@/components/product-page';
export const metadata: Metadata = { title: 'Wiki', alternates: { canonical: '/wiki' } };
export default function Wiki() {
  return <ProductPage product="wiki" />;
}
