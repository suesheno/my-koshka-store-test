'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';
import { AccordionTrigger } from '@radix-ui/react-accordion';
import { Plus } from 'lucide-react';

const ProductDescription = () => {
  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='description' className='border-b-0'>
        <AccordionTrigger className='flex-between w-full regular-20 font-fredoka'>
          Product Information <hr className='h-1 w-[60%]' />
          <Plus width={13} height={13} strokeWidth={2} className='-mt-1' />
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductDescription;
