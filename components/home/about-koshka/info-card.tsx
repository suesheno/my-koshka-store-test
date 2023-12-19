import { FC } from 'react';

interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard: FC<InfoCardProps> = ({ title, description }) => {
  return (
    <div className='w-full 2xsmall:max-w-[340px] mx-auto'>
      <div className='bg-[#D9D9D9] w-full xsmall:h-[130px] 2xsmall:h-[170px]'></div>
      <h3 className='font-fredoka tablet:text-2xl tablet:mt-8 2xsmall: mt-5 text-xl'>
        {title}
      </h3>
      <p className='font-raleway xsmall:text-base xsmall:mt-5 2xsmall:text-xs 2xsmall:mt-3'>
        {description}
      </p>
    </div>
  );
};

export default InfoCard;
