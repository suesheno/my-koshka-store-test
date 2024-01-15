import ProdcutsFilter from '../products-filter';

interface props {
  data: any;
  filter: Function;
}

const CategoriesSidebarMenu = ({ data, filter }: props) => {
  return (
    <div className='justify-between tablet:max-w-[220px] tablet:items-start 2xsmall:w-full 2xsmall:flex 2xsmall:items-center 2xsmall:gap-x-2 2xsmall:gap-y-3 2xsmall:flex-wrap'>
      <ul className='flex gap-y-[10px] tablet:flex-col 2xsmall:flex-[1_0_auto] 2xsmall:flex-row xsmall::gap-x-[3%] 2xsmall:gap-x-[10px]'>
        <li
          className='hover:bg-koshkaGreen/10 text-gray-200 font-fredoka border-gray-300 tablet:border-b-[1px] tablet:pb-[10px] xsmall:regular-20 2xsmall:border-b-0 2xsmall:pb-0 2xsmall:text-xs'
          onClick={() => filter(null)}>
          Clear Filters
        </li>
        {data?.map((item: any) => (
          <li
            key={item.id}
            className={`hover:bg-koshkaGreen/10 text-gray-200 font-fredoka border-gray-300 tablet:border-b-[1px] tablet:pb-[10px] xsmall:regular-20 2xsmall:border-b-0 2xsmall:pb-0 2xsmall:text-xs`}
            onClick={() => filter(item.id)}>
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
