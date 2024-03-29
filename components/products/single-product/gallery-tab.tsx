import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Tab } from '@headlessui/react';
import {TwicImg} from "@twicpics/components/react";

/*
interface GalleryTabProps {
  image: ImageProps;
}
 */
const GalleryTab = ({ image }:any ) => {
  return (
    <Tab className='relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white ring-white/60 ring-offset-2 ring-offset-gray-20 focus:outline-none focus:ring-2'>
      {({ selected }) => (
        <div>
          <span
            className={cn(
              'absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md',
              selected ? 'shadow-lg' : 'shadow-none'
            )}>
            <TwicImg
                src={image.url.substring(image.url.lastIndexOf("/") + 1)}
                alt='image'
                className='w-full h-auto'
            />
          </span>
          {/* <span
            className={cn('absolute rounded-md ring-0 ring-offset-0')}></span> */}
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
