import { featuredProdCategory } from '@/constant/featured-product-category';

import CategoryCard from './category-card';

const ProductCategories = () => {
  return (
    <div className='w-full bg-tertiary'>
      <div className='wrapper xsmall:pt-11 xsmall:pb-14 2xsmall:pt-7 2xsmall:pb-7'>
        <h2 className='section-title text-center xsmall:mb-16 2xsmall:mb-7 2xsmall:text-2xl'>
          Shop by Categories
        </h2>
        <div className='mobile:mobile:place-items-center mobile:grid-cols-4 2xsmall:grid grid-cols-2 gap-y-4'>
          {featuredProdCategory.map((category, index) => (
            <CategoryCard
              title={category.title}
              image={category.image}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
