'use client';

import ProdcutsFilter from '../products-filter';
import { useGetProductCollection } from '@/services/queries/products.query';

const CategoriesSidebarMenu = () => {
  const { data, isSuccess } = useGetProductCollection();

  return (
    <div className='justify-between tablet:max-w-[220px] tablet:items-start 2xsmall:w-full 2xsmall:flex 2xsmall:items-center 2xsmall:gap-x-2 2xsmall:gap-y-3 2xsmall:flex-wrap'>
      {/* <Accordion type='single' disabled>
        {PRODUCTS_CATEGORY.map((item: ProductsCategoryProps) => (
          <CategoryItem value={item.catId} label={item.name} key={item.catId} />
        ))}
      </Accordion> */}
      <ul className='flex gap-y-[10px] tablet:flex-col 2xsmall:flex-[1_0_auto] 2xsmall:flex-row xsmall::gap-x-[3%] 2xsmall:gap-x-[10px]'>
        {isSuccess &&
          data.map((item: any) => (
            <li
              key={item.id}
              className=' text-gray-200 font-fredoka border-gray-300 tablet:border-b-[1px] tablet:pb-[10px] xsmall:regular-20 2xsmall:border-b-0 2xsmall:pb-0 2xsmall:text-xs'>
              {item.title}
            </li>
          ))}
      </ul>
      <div className='tablet:hidden 2xsmall:block 2xsmall:flex-[0_0_150px]'>
        <ProdcutsFilter />
      </div>
    </div>
  );
};

export default CategoriesSidebarMenu;
