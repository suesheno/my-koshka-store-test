import Image from 'next/image';
import { TwicImg } from '@twicpics/components/react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

const ProductCard = ({ product }: { product: PricedProduct }) => {
  return (
    <Card className='border-0 grid items-stretch h-full hover:bg-koshkaGreen/5'>
      <div className='m-3'>
      <CardHeader className='p-0'>
        <div className='relative w-full h-[220px]'>
                <TwicImg
                    src={product?.thumbnail!.substring(product?.thumbnail!.lastIndexOf("/") + 1)}
                    alt={`${product?.title} image`}
                    className='absolute w-full h-full'
                    mode="cover"
                    refit
                    ratio="none"
                    focus="auto"
                />
        </div>
      </CardHeader>
      <CardContent className='p-0 px-[10px] pt-3'>
        <CardTitle className='font-fredoka mb-5 xsmall:regular-20 2xsmall:text-base'>
          {product?.title}
        </CardTitle>
        <CardDescription className='font-raleway text-gray-200 xsmall:regular-18 2xsmall:text-xs'>
          {product?.description}
        </CardDescription>
      </CardContent>
      </div>
    </Card>
  );
};

export default ProductCard;
