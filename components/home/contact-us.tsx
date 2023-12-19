import Image from 'next/image';

import { Button } from '@/components/ui/button';

import ctaCatImg from '@/public/images/cta-cat-img.png';

const ContactUs = () => {
  return (
    <div className='wrapper tablet:gap-x-10 xsmall:pb-0 xsmall:pt-9 2xsmall:flex items-center justify-center py-11'>
      <div className='tablet:w-auto xsmall:w-1/2 2xsmall:w-[148px]'>
        <Image src={ctaCatImg} alt='Contact us' />
      </div>
      <div className='tablet:w-[483px] tablet:flex-none xsmall:w-1/2 2xsmall:flex-1'>
        <h2 className='section-title xsmall:mb-7 2xsmall:mb-5'>Contact Us</h2>
        <p className='xsmall:text-2xl 2xsmall:text-[#4F4F4F] text-base'>
          Have questions or need assistance? Our customer support team is here
          to help.
        </p>
        <Button
          type='button'
          size='md'
          className='shad-btn_primary tablet:mt-[4.375rem] xsmall:mt-[25px] 2xsmall:mt-6'>
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default ContactUs;
