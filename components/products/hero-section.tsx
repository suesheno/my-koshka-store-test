import React from 'react';

const HeroSection = () => {
  return (
    <div className='h-[362px] bg-[url(/images/hero-product-page-bg.png)] bg-cover bg-bottom xsmall:pt-0 2xsmall:pt-8'>
      <div className='max-container padding-container h-full flex xsmall:items-center 2xsmall:items-start'>
        <div className='tablet:w-3/5 small:w-1/2 2xsmall:w-11/12 2xsmall:max-w-none'>
          <h2 className='font-fredokaOne text-white drop-shadow-sm xsmall:regular-60 2xsmall:regular-40'>
            Explore Stylish and Functional Cat Accessories by KOSHKA
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
