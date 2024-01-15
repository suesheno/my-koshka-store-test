'use client';

import { Disclosure } from '@headlessui/react'
import { Plus } from 'lucide-react';

const ProductDescription = () => {
  return (
        <Disclosure>
          <Disclosure.Button className="flex-between w-full regular-20 font-fredoka">
            Product Information <hr className='h-1 w-[60%]' />
              <Plus width={13} height={13} strokeWidth={2} className='-mt-1' />
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            Yes. It adheres to the WAI-ARIA design pattern.
          </Disclosure.Panel>
        </Disclosure>
  );
};

export default ProductDescription;
