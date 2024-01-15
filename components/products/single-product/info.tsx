
import { FC } from 'react';

import QuantityInput from '@/components/shared/qty-input';
import { Button } from '@/components/ui/button';
//import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

import ProductDescription from './product-description';
import {IProduct} from "@/types/products";

const Info: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <div className='flex flex-col gap-6 pt-3'>
      <h1 className='xsmall:regular-40 font-fredokaOne text-black 2xsmall:regular-30'>
        {product?.title}
      </h1>
      <p className='regular-30 font-raleway !font-light italic'>
        {product?.subtitle}
      </p>
      <p className='regular-20 font-raleway mb-3'>{product?.description}</p>
      <QuantityInput />
      <ProductDescription />
      <Button size='md' className='mt-3'>
        Add to Cart
      </Button>
    </div>
  );
};

export default Info;
