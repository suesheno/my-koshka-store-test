'use client';
import { useState } from 'react';

import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import ProductCard from './product-card';
import Pagination from './pagination';
import { useGetProductsQuery } from '@/services/queries/products.query';

const ProductList = () => {
  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useGetProductsQuery(page);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setPage((pageNumber - 1) * 3);
  };

  if (isLoading) {
    return null;
  }

  return (
    <>
      <div className='grid mb-24 tablet:gap-y-14 tablet:mt-0 xsmall:gap-x-5 small:grid-cols-3 mobile:grid-cols-2 tablet:flex-1 2xsmall:w-full 2xsmall:mt-8 2xsmall:gap-x-4 2xsmall:gap-y-5 2xsmall:grid-cols-1'>
        {data?.response?.products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {data?.response?.count! > 3 && (
        <Pagination
          currentPage={currentPage}
          totalCount={data?.response.count!}
          pageSize={3}
          onPageChange={(pageNumber: any) => handlePageChange(pageNumber)}
        />
      )}
    </>
  );
};

export default ProductList;
