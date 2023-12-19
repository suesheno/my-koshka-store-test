import { Button } from '@/components/ui/button';
import React from 'react';
import QuantityInput from '../../shared/qty-input';

const AddToCartAction = () => {
  return (
    <div className='flex flex-wrap gap-y-7 w-full'>
      <QuantityInput />
      <Button
        className='!w-full !h-10 regular-18 font-sans drop-shadow-none xsmall:text-lg 2xsmall:text-xs'
        size='sm'>
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartAction;
