import Image from 'next/image';

import catInCarrierImage from '@/public/images/promotional-cat.jpg';
import { Button } from '@/components/ui/button';

const PromotionalSection = () => {
  return (
    <div className='wrapper xsmall:pt-[120px] xsmall:pb-[105px] 2xsmall:pt-8 2xsmall:pb-7'>
      <div className='flex gap-x-10 items-center 2xsmall:flex-wrap lg:flex-nowrap'>
        <div className='small:w-1/2 xsmall:w-full mx-auto'>
          <Image
            src={catInCarrierImage}
            alt='Cat inside carrier'
            className='w-full max-w-[623px] 2xsmall:mx-auto mb-7 2xsmall:mb-5'
          />
        </div>
        <div className='small:w-1/2 2xsmall:w-full'>
          <h2 className='section-title xsmall:!leading-[72px] xsmall:!text-[60px] 2xsmall:!text-3xl'>
            Elevate Your Cat&apos;s Life with Koshka
          </h2>

          <p className='xsmall:mt-12 xsmall:text-4xl 2xsmall:text-xl 2xsmall:mt-5'>
            Discover Premium Cat Care Products for Safety, Style, and
            Playfulness
          </p>

          <p className='xsmall:text-xl xsmall:mt-8 2xsmall:text-base 2xsmall:mt-5 lg:text-[#4F4F4F]'>
            Find the Perfect Products for Your Feline Friend
          </p>

          <Button type='button' size='lg' className='shad-btn_primary mt-9'>
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromotionalSection;
