import { Input } from '@/components/ui/input';
import SearchIcon from '@/public/icons/search-icon.svg';
import Image from 'next/image';

const SearchBar = () => {
  return (
    <div className='relative mt-2 xltablet:hidden 2xsmall:flex'>
      <button className='absolute right-1 top-0 bottom-0'>
        <Image src={SearchIcon} alt='search' />
      </button>
      <Input
        type='search'
        placeholder='Search'
        className='h-6 p-1 rounded-e font-fredoka text-xs'
      />
    </div>
  );
};

export default SearchBar;
