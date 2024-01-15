import { FC } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface CategoryCardProps {
  title: string;
  image: StaticImageData;
}

const CategoryCard: FC<CategoryCardProps> = ({ title, image }) => {
  return (
    <div className='w-full'>
      <div className='rounded-full bg-white drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)] flex justify-center items-center mx-auto tablet:w-[193px] tablet:h-[193px] xsmall:w-[120px] xsmall:h-[120px] 2xsmall:w-[77px] h-[77px]'>
                    <Image
              src={image}
              alt={title}
              className='relative xsmall:absolute object-scale-down w-fit h-fit p-5 2xsmall:p-3'
          />
      </div>
      <h3 className='text-white font-fredoka text-center small:text-[40px] small:leading-10 small:mt-4 xsmall:text-2xl leading-5 mt-3'>
        {title}
      </h3>
    </div>
  );
};

export default CategoryCard;
