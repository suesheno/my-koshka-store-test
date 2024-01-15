'use client';

import { IProduct } from '@/types/products';
import ProductCard from './product-card';
import CategoriesSidebarMenu from '../category-sidebar-menu';
import Link from 'next/link';
import { useState } from 'react';

interface Props {
  productList: Array<IProduct>;
  collections: any;
}
const ProductList = ({ productList, collections }: Props) => {
  const [filter, setFilter] = useState<string | null>(null);
  const products =
    filter !== null
      ? productList.filter((p) => p.collection_id === filter)
      : productList;
  return (
    <>
      <CategoriesSidebarMenu data={collections} filter={setFilter} />
      <div className='grid mb-24 tablet:gap-y-14 tablet:mt-0 xsmall:gap-x-5 small:grid-cols-3 mobile:grid-cols-2 tablet:flex-1 2xsmall:w-full 2xsmall:mt-8 2xsmall:gap-x-4 2xsmall:gap-y-5 2xsmall:grid-cols-1'>
        {products.map((product: any) => (
          <Link key={product.id} href={`products/${product.handle}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductList;
