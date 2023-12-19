'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ProfileIcon from '@/assets/icons/profile.svg';
import Logo from '@/public/images/company-logo.png';
import SearchIcon from '@/assets/icons/search.svg';
import CartIcon from '@/assets/icons/cart.svg';
import MBartIcon from '@/public/icons/mobile-cart-icon.svg';
import CaretRightIcon from '@/public/icons/caret-right.svg';
import EmailIcon from '@/public/icons/email-icon.svg';

import SearchBar from './search';

import MobileHamburgerMenu from './mobile-hamburger-menu';
import { ROUTES, ROUTES_LIST } from '@/constant/routes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAccount } from '@/store/useAccount';

export default function NavBar() {
  const customer = useAccount((state) => state.customer);
  const logout = useAccount((state) => state.logoutCustomer);
  const [open, setOpen] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return '';
  }

  return (
    <header className='bg-secondary z-50 relative'>
      <div className='w-full bg-tertiary py-3 xltablet:inline-block 2xsmall:hidden'>
        <div className='max-container padding-container flex justify-between'>
          <div className='flex gap-2'>
            <Image priority src={EmailIcon} alt='email us' />
            <Link href='mailto:koshkapetproducts@gmail.com'>
              koshkapetproducts@gmail.com
            </Link>
          </div>

          <div className='flex gap-2'>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className='flex gap-2'>
                  <Image priority src={ProfileIcon} alt='me' />{' '}
                  {!customer && (
                    <Link href={ROUTES_LIST.SIGN_IN}>Sign-In / Sign-Up</Link>
                  )}
                  {customer && <span>{customer.first_name}</span>}
                </div>
              </DropdownMenuTrigger>
              {customer && (
                <DropdownMenuContent className='border-0 chil'>
                  <DropdownMenuItem>My Account</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => logout()}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              )}
            </DropdownMenu>
          </div>
        </div>
      </div>
      <nav className='max-container padding-container py-5 bg-secondary relative z-20'>
        <div className='flex-between'>
          <div className='flex items-center gap-x-2'>
            <MobileHamburgerMenu
              open={open}
              toggleMenu={() => setOpen((prev) => !prev)}
            />
            <Image
              priority
              src={Logo}
              alt='Logo'
              className='w-auto medium:w-auto xltablet:w-[290px] 2xsmall:w-[120px]'
            />
          </div>
          <div id='right-nav' className='flex items-center'>
            <div className='mr-[20px] medium:gap-[41px] xltablet:gap-9 xltablet:flex 2xsmall:hidden'>
              {ROUTES.map((item): any => {
                return (
                  <div key={item.key}>
                    <Link
                      href={item.route}
                      className='text-white font-fredoka text-lg'>
                      {item.name}
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className='flex items-center gap-x-3 xltablet:hidden'>
              <Link
                href={ROUTES_LIST.SIGN_IN}
                className='text-white font-fredoka'>
                Sign Up
              </Link>
              <Image src={MBartIcon} alt='Logo' />
            </div>

            <div className='gap-[30px] xltablet:flex 2xsmall:hidden'>
              <Image priority src={SearchIcon} alt='Logo' />
              <Image priority src={CartIcon} alt='Logo' />
            </div>
          </div>
        </div>
        <SearchBar />
      </nav>
      <ul
        id='mobile-nav'
        className={`bg-white absolute z-10 w-full transition-all duration-500 ease-in ${
          open ? 'top-[6.4rem]' : 'top-[-200px]'
        } `}>
        {ROUTES.map((item): any => {
          return (
            <li key={item.key} className='border-b-[1px] last:border-0'>
              <Link
                href={item.route}
                className='text-secondary font-fredoka text-xs p-[10px] flex justify-between items-center '>
                {item.name}

                <Image src={CaretRightIcon} alt='arrow right' />
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
