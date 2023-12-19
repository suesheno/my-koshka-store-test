'use client';
import * as SelectRadix from '@radix-ui/react-select';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

import ArrowDownIcon from '@/public/icons/polygon-arrow-down.svg';
import Image from 'next/image';

const ProdcutsFilter = () => {
  return (
    <div>
      <Select>
        <SelectRadix.Trigger className='flex items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-xl font-raleway gap-x-[10px] text-gray-200 ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 xsmall:text-xl xsmall:h-10 xsmall:min-w-[190px] 2xsmall:min-w-[130px] 2xsmall:h-[22px] 2xsmall:text-xs 2xsmall:px-[8px]'>
          <SelectRadix.Value placeholder='Filter by Order' />
          <SelectRadix.Icon className='SelectIcon'>
            <Image
              src={ArrowDownIcon}
              alt='dropdown icon'
              className='xsmall:w-[28px] 2xsmall:w-[22px]'
            />
          </SelectRadix.Icon>
        </SelectRadix.Trigger>
        {/* <SelectTrigger className='w-[194px] regular-20 font-raleway text-gray-200 p-[10px]'>
          <SelectValue placeholder='Filter by Order' />
        </SelectTrigger> */}
        <SelectContent>
          <SelectItem value='light'>Light</SelectItem>
          <SelectItem value='dark'>Dark</SelectItem>
          <SelectItem value='system'>System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProdcutsFilter;
