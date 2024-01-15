export const runtime = 'edge';

import Image from 'next/image';
import { TwicImg } from '@twicpics/components/react';
import { Metadata } from 'next';

import PetSection from '@/components/profile/petSection';
import CustomerSection from '@/components/profile/customerSection';
import { petInfoType } from '@/types/profiles';

import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'User Profile',
  description: 'User profile Page',
};
const navigation = [
  {
    name: 'Logout',
    href: '/logout',
    icon: ArrowLeftOnRectangleIcon,
    current: false,
  },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Deployments', href: '#', icon: ServerIcon, current: false },
  { name: 'Activity', href: '#', icon: SignalIcon, current: false },
  { name: 'Domains', href: '#', icon: GlobeAltIcon, current: false },
  { name: 'Usage', href: '#', icon: ChartBarSquareIcon, current: false },
  { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: true },
];
const teams = [
  { id: 1, name: 'Planetaria', href: '#', initial: 'P', current: false },
  { id: 2, name: 'Protocol', href: '#', initial: 'P', current: false },
  { id: 3, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
];

const getProfile = async (auth: string) => {
  const id = (
    await (
      await fetch(`${process.env.NEXT_PUBLIC_ROOT}auth/me`, {
        headers: {
          Authorization: 'Bearer ' + auth,
        },
      })
    ).json()
  ).customer.id;
  const res = await fetch(`${process.env.NEXT_PUBLIC_ROOT}profile/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await res.json();
};

export default async function Page({ params }: { params: { jwt: string } }) {
  const userProf = await getProfile(params.jwt);

  const pets: petInfoType[] = userProf.pets;

  return (
    <>
      {/* Static sidebar for desktop */}
      <div className='hidden h-screen xl:sticky xl:top-0 xl:inset-y-0 xl:z-50 xl:inline-flex xl:w-72 xl:flex-col'>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5'>
          <div className='flex h-16 shrink-0 items-center'>Profile Menu</div>
          <nav className='flex flex-1 flex-col'>
            <ul role='list' className='flex flex-1 flex-col gap-y-7'>
              <li>
                <ul role='list' className='-mx-2 space-y-1'>
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={`${
                          item.current
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                        } group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}>
                        <item.icon
                          className='h-6 w-6 shrink-0'
                          aria-hidden='true'
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className='text-xs font-semibold leading-6 text-gray-400'>
                  Your teams
                </div>
                <ul role='list' className='-mx-2 mt-2 space-y-1'>
                  {teams.map((team) => (
                    <li key={team.name}>
                      <a
                        href={team.href}
                        className={`${
                          team.current
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                        } group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}>
                        <span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white'>
                          {team.initial}
                        </span>
                        <span className='truncate'>{team.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className='-mx-6 mt-auto'>
                <a
                  href='#'
                  className='flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800'>
                  <Image
                    className='h-8 w-8 rounded-full bg-gray-800'
                    width={50}
                    height={50}
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <span className='sr-only'>Your profile</span>
                  <span aria-hidden='true'>Tom Cook</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='inline-flex flex-col'>
        <div className='relative pl-5 max-w-7xl'>
          <div className='w divide-y divide-white/5'>
            <CustomerSection />
          </div>
          <div className='py-3 w-full'>
            <PetSection profileID={userProf.id} pets={pets} />
          </div>
        </div>
      </div>
    </>
  );
}
