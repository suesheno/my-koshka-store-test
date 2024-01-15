import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '@/assets/images/logo.png';
import LogoName from '@/assets/images/logo-name.png';
import ConnectWithUs from './connectWithUs';

const routes = [
  { key: 'product', name: 'Our Products', route: '/products' },
  { key: 'about', name: 'About Us', route: '/about' },
  { key: 'contact', name: 'Contact Us', route: '/contact' },
  { key: 'socials', name: 'Socials', route: '/socials' },
];

export default function Footer({ footer }: any) {
  return (
    <footer className='height-auto bg-secondary w-full'>
      <div className='max-container padding-container flex text-white p-16 gap-x-5 2xsmall:flex-col 2xsmall:justify-center gap-y-12 xltablet:flex-row xltablet:justify-between'>
        <Link href='/'>
          <div className='flex 2xsmall:justify-center xltablet:justify-start'>
            <Image priority src={Logo} alt='Logo' />

            <div className='w-[213px] mt-[16px] ml-[17px]'>
              <Image priority src={LogoName} alt='LogoName' />
            </div>
          </div>
        </Link>

        <div className='flex flex-col gap-[10px] m-w-[100px] 2xsmall:items-center xltablet:items-start'>
          {routes.map((item): any => {
            return (
              <div key={item.key}>
                <Link href={item.route}>{item.name}</Link>
              </div>
            );
          })}
        </div>

        <ConnectWithUs />
      </div>

      <div className='w-full bg-tertiary py-3 flex justify-center text-center text-[#4F4F4F] pt-[10px]'>
        <p className='xltablet:text-base 2xsmall:text-[10px]'>
          © 2023 Koshka Pet Products. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
