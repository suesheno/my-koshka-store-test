'use client';
import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const QuantityInput = () => {
  const [qty, setQty] = useState<number>(1);
  return (
    <div className='flex'>
      <button
        className='p-[10px] border-[1px] border-gray-50 border-solid '
        onClick={() => setQty(qty + 1)}>
        <Plus size={15} />
      </button>
      <input
        name='qty'
        type='text'
        readOnly
        className='border-[1px] border-gray-50 border-solid border-r-0 border-l-0 regular-12 font-sans text-center p-[10px] w-[4.25rem]'
        value={qty}
      />
      <button
        className='p-[10px] border-[1px] border-gray-50 border-solid '
        onClick={() => qty > 1 && setQty(qty - 1)}>
        <Minus size={15} />
      </button>
    </div>
  );
};

export default QuantityInput;
