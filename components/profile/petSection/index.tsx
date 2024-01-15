'use client'

import {Disclosure} from '@headlessui/react';

import {petInfoType} from '@/types/profiles';
import PetHeader from './petHeader';
import PetDetail from './petDetail';
import AddPetProfile from './addPetProfile';


const ProfilePetList = ({profileID, pets}: { profileID: number, pets: petInfoType[] }) => {
    return (
        <div>
            <div className='grid grid-cols-2 my-5'>
                <h2 className="text-base font-semibold leading-7 text-gray-900">Pets</h2>
                <AddPetProfile profileID={profileID}/>
                <p className="text-sm leading-6 text-gray-500">Current pets associated with your profile</p>
            </div>
            {pets.map((p: petInfoType) => (
                <Disclosure key={p.name} as="div" className='border-t round-sm border-solid border-y-slate-300'>
                    <Disclosure.Button className="py-2 w-full">
                        <PetHeader petInfo={p} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500 w-fill">
                        <PetDetail petInfo={p}/>
                    </Disclosure.Panel>
                </Disclosure>
            ))}
        </div>
    )
}
export default ProfilePetList;