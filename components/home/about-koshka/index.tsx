import React from 'react';
import InfoCard from './info-card';

const AboutKoshka = () => {
  return (
    <div className='wrapper xsmall:pt-24 xsmall:pb-20 2xsmall:pt-5 2xsmall:pb-8'>
      <h2 className='section-title text-center mb-8'>
        Why Choose Koshka Pet Products
      </h2>
      <div className='tablet:grid-cols-4 gap-x-6 xsmall:grid-cols-2 gap-y-5 2xsmall:grid '>
        <InfoCard
          title='Quality Products'
          description='We prioritize the comfort and well-being of your feline friend.'
        />
        <InfoCard
          title='Quality Products'
          description='We prioritize the comfort and well-being of your feline friend.'
        />
        <InfoCard
          title='Quality Products'
          description='We prioritize the comfort and well-being of your feline friend.'
        />
        <InfoCard
          title='Quality Products'
          description='We prioritize the comfort and well-being of your feline friend.'
        />
      </div>
    </div>
  );
};

export default AboutKoshka;
