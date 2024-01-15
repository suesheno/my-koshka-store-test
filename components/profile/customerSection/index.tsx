'use client'

import { useState } from 'react'
import { PersonalInfo} from "@/components/profile/customerSection/personal-info";
import { Dialog, Switch } from '@headlessui/react'
import {
    ChartBarSquareIcon,
    Cog6ToothIcon,
    FolderIcon,
    GlobeAltIcon,
    ServerIcon,
    SignalIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Deployments', href: '#', icon: ServerIcon, current: false },
    { name: 'Activity', href: '#', icon: SignalIcon, current: false },
    { name: 'Domains', href: '#', icon: GlobeAltIcon, current: false },
    { name: 'Usage', href: '#', icon: ChartBarSquareIcon, current: false },
    { name: 'Settings', href: '#', icon: Cog6ToothIcon, current: true },
]


export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-900">
        <body class="h-full">
        ```
      */}
            <div className='block w-full'>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
                        <div className="-ml-0.5 flex h-16 items-center gap-x-6">
                            <button type="button" className="-m-2.5 p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-2 space-y-2">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </Dialog.Panel>
                </Dialog>

                <div className="w-full">
                    <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
                        <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
                            <div>
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-500">
                                    This information will be displayed publicly so be careful what you share.
                                </p>

                                <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                                    <PersonalInfo />
                                </dl>
                            </div>
                            <div>
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Bank accounts</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-500">Connect bank accounts to your account.</p>

                                <ul role="list" className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                                    <li className="flex justify-between gap-x-6 py-6">
                                        <div className="font-medium text-gray-900">TD Canada Trust</div>
                                        <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Update
                                        </button>
                                    </li>
                                    <li className="flex justify-between gap-x-6 py-6">
                                        <div className="font-medium text-gray-900">Royal Bank of Canada</div>
                                        <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Update
                                        </button>
                                    </li>
                                </ul>

                                <div className="flex border-t border-gray-100 pt-6">
                                    <button type="button" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                        <span aria-hidden="true">+</span> Add another bank
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Language and dates</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-500">
                                    Choose what language and date format to use throughout your account.
                                </p>

                                <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                                    <div className="pt-6 sm:flex">
                                        <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Language</dt>
                                        <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                            <div className="text-gray-900">English</div>
                                            <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                Update
                                            </button>
                                        </dd>
                                    </div>
                                    <div className="pt-6 sm:flex">
                                        <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Date format</dt>
                                        <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                            <div className="text-gray-900">DD-MM-YYYY</div>
                                            <button type="button" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                Update
                                            </button>
                                        </dd>
                                    </div>
                                    <Switch.Group as="div" className="flex pt-6">
                                        <Switch.Label as="dt" className="flex-none pr-6 font-medium text-gray-900 sm:w-64" passive>
                                            Automatic timezone
                                        </Switch.Label>
                                        <dd className="flex flex-auto items-center justify-end">
                                            <Switch
                                                disabled={false}
                                                checked={automaticTimezoneEnabled}
                                                onChange={setAutomaticTimezoneEnabled}
                                                className={classNames(
                                                    automaticTimezoneEnabled ? 'bg-indigo-600' : 'bg-gray-200',
                                                    'flex w-8 cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                                )}
                                            >
                      <span
                          aria-hidden="true"
                          className={classNames(
                              automaticTimezoneEnabled ? 'translate-x-3.5' : 'translate-x-0',
                              'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                          )}
                      />
                                            </Switch>
                                        </dd>
                                    </Switch.Group>
                                </dl>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
