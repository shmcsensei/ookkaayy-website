import type { Metadata } from 'next';
import { ProductPage } from '@/components/product-page';
export const metadata: Metadata = { title: 'Search', alternates: { canonical: '/search' } };
export default function Search() {
  return <ProductPage product="search" />;
}
