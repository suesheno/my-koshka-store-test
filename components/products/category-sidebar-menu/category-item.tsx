import { Disclosure } from '@headlessui/react'
import React, { FC } from 'react';

interface CategoryItemProps {
  value: string;
  label: string;
}

const CategoryItem: FC<CategoryItemProps> = ({ value, label }) => {
  return (
    <>
      <Disclosure>
        <Disclosure.Button className="regular-20 font-fredoka p-2 flex-row-reverse justify-end gap-x-[10px] cursor-pointer">
          {label}
        </Disclosure.Button>
        <Disclosure.Panel className="text-gray-500">
          Yes. It adheres to the WAI-ARIA design pattern.
        </Disclosure.Panel>
      </Disclosure>
    </>
  );
};

export default CategoryItem;
