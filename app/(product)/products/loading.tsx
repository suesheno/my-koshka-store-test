import SkeletonList from '@/components/shared/skeleton-loader/skeleton-list';
import SkeletonProductCard from '@/components/shared/skeleton-loader/skeleton-product-card';
import React from 'react';

const Loader = () => {
  return (
    <div className='max-container padding-container py-20'>
      <div className='flex gap-x-7 tablet:flex-nowrap 2xsmall:flex-wrap'>
        <div className='tablet:max-w-[220px]'>
          <SkeletonList />
        </div>
        <div className='grid mb-24 tablet:gap-y-14 tablet:mt-0 xsmall:gap-x-5 small:grid-cols-3 mobile:grid-cols-2 tablet:flex-1 2xsmall:w-full 2xsmall:mt-8 2xsmall:gap-x-4 2xsmall:gap-y-5 2xsmall:grid-cols-1'>
          {Array(3)
            .fill(null)
            .map((index) => (
              <SkeletonProductCard key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
