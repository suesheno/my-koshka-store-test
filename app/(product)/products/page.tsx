import HeroSection from '@/components/products/hero-section';
import ProductsTemplate from '@/components/products/productsTemplate';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Loader from './loading';

export const metadata: Metadata = {
  title: 'Product',
  description: 'This is the product page',
};

const ProductPage = () => {
  return <ProductsTemplate />;
};

export default ProductPage;
