import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
//import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

import Gallery from './gallery';
import Info from './info';
import {Metadata} from "next";
import {IProduct} from "@/types/products";

export const generateMetadata = async ({ product }: { product: IProduct }): Promise<Metadata> => {
    return {
        title: product?.title,
        description: product?.description,
        keywords: ["product page", product?.title, product?.collection.title],
        openGraph: {
            images: [{ url: product?.thumbnail! }],
        },
    };
};
const SingleProductTemplate = ({ product }: { product: IProduct }) => {
  return (
    <div className='max-container padding-container'>
      <div className='flex gap-x-6 pt-24 pb-24 2xsmall:flex-wrap 2xsmall:justify-center'>
        <div className='w-[24rem]'>
          <Card className='p-7 border-gray-200 border-opacity-10'>
            <Gallery images={product?.images!} />
          </Card>
        </div>
        <div className='xltablet:mt-0 xltablet:flex-1 xltablet:max-w-[39rem] 2xsmall:w-full 2xsmall:mt-10'>
          <Info product={product} />
        </div>
      </div>
      <div className='w-full'>
        <Separator className='my-4' />
      </div>
    </div>
  );
};

export default SingleProductTemplate;
