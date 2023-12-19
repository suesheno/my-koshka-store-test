import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import React, { FC } from 'react';

interface CategoryItemProps {
  value: string;
  label: string;
}

const CategoryItem: FC<CategoryItemProps> = ({ value, label }) => {
  return (
    <>
      <AccordionItem value={value}>
        <AccordionTrigger className='regular-20 font-fredoka p-2 flex-row-reverse justify-end gap-x-[10px] cursor-pointer'>
          {label}
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default CategoryItem;
