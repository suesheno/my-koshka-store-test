import { ChevronRight } from 'lucide-react';
import ProdcutsFilter from './products-filter';

const Breadcrumbs = () => {
  return (
    <div className='pt-11 flex-between tablet:pb-16 2xsmall:py-5'>
      <div className='flex-start font-sans xsmall:regular-40 2xsmall:text-2xl'>
        <span className='text-gray-400'>Categories</span>
        <ChevronRight
          size={95}
          strokeWidth={0.5}
          className='tablet:w-auto tablet:h-auto 2xsmall:w-[52px] 2xsmall:h-[52px]'
        />
        <span className='text-secondary'>Accesories</span>
      </div>
      <div className='tablet:flex 2xsmall:hidden'>
        <ProdcutsFilter />
      </div>
    </div>
  );
};

export default Breadcrumbs;
