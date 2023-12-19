import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import SampleProdImage from '@/public/images/sample-prod-1.png';
import AddToCartAction from './add-to-cart-action';
import { ProductProps } from '@/types/types';
import Link from 'next/link';
import {
  ProductType,
  StoreProductsListRes,
  StoreProductsRes,
} from '@medusajs/medusa';
import { FilterableProductProps } from '@medusajs/medusa/dist/types/product';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

const ProductCard = ({ product }: { product: PricedProduct }) => {
  return (
    <Card className='border-0 grid items-stretch'>
      <CardHeader className='p-0 px-[10px]'>
        <div className='relative w-full h-[220px]'>
          <Image
            fill
            src={product?.thumbnail!}
            alt='image'
            className='object-cover object-center'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      </CardHeader>
      <CardContent className='p-0 px-[10px] pt-3'>
        <CardTitle className='font-fredoka mb-5 xsmall:regular-20 2xsmall:text-base'>
          <Link href={`/products/${product?.handle}`}>{product?.title}</Link>
        </CardTitle>
        <CardDescription className='font-raleway text-gray-200 xsmall:regular-18 2xsmall:text-xs'>
          {product?.description}
        </CardDescription>
      </CardContent>
      <CardFooter className='p-0 px-[10px] pt-7 pb-2 self-end'>
        <AddToCartAction />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
