'use client';
import Image from 'next/image';

import { Tab } from '@headlessui/react';

import GalleryTab from './gallery-tab';
import {TwicImg} from "@twicpics/components/react";

const Gallery = ({ images }: any) => {
  return (
    <Tab.Group as='div' className='flex flex-col-reverse'>
      <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
        <Tab.List className='grid grid-cols-4 gap-6'>
          {images.map((image: any) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className='aspect-square w-full'>
        {images.map((image: any) => (
          <Tab.Panel key={image.id}>
            <div className='aspect-square relative h-full w-full sm:rounded-lg overflow-hidden'>
                <TwicImg
                    src={image.url.substring(image.url.lastIndexOf("/") + 1)}
                    alt='image'
                    className='w-full h-auto'
                />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
