import Image from 'next/image';
import Link from 'next/link';

import { petInfoType } from '@/types/profiles'

import {
    PhoneArrowUpRightIcon,
} from '@heroicons/react/24/outline'

type propsType = { tag: string; pet: petInfoType }

const DataBlock = ({ label, value}: { label: string, value: string}) => (
    <div className="px-4 py-3 sm:grid  xs:grid-cols-2 sm:grid-cols-1 md:grid-cols-3 sm:gap-4 sm:px-0">
      <dt className="text-sm font-bold leading-6 text-gray-900">{label}</dt>
      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{value}</dd>
    </div>
)

export default function Pet (props: propsType) {
  const pet = props.pet;
  const tag = props.tag;

  return (
    <>
    <h1 className="text-3xl font-bold text-center my-5"><span className="text-red-600">ReUnite</span> Profile - Vital Information</h1>
    <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 pt-5">
      <div className="row-span-5 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1 min-h-[50vh] lg:min-h-0">
        <div className="relative h-3/4">
        <Image
          className="object-cover rounded-2xl"
          src={pet.image.url}
          //width={150}
          //height={150}
          sizes="100vw"
          alt={`${pet.name}'s photo`}
          loading='eager'
          fill={true}
        />
        </div>
        <div className="pt-6 md:grid hidden place-items-center">
        <a href={`tel:${process.env.NEXT_PUBLIC_REUNITE_PHONE},${pet.contact}`}>
          <button
              type="button"
              className="inline-flex items-center gap-x-2 rounded-md bg-koshkaGreen px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <PhoneArrowUpRightIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
            Contact Care Giver
          </button>
        </a>
          </div>
        <div className="grid pt-4 md:hidden col-span-1 place-items-center">
          <a href={`tel:${process.env.REUNITE_NUMBER},${pet?.contact}`} >
            <button
                type="button"
                className="inline-flex items-center gap-x-2 rounded-md bg-koshkaGreen px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <PhoneArrowUpRightIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
              Contact Care Giver
            </button>
          </a>
        </div>
      </div>
      <DataBlock label="Name" value={pet.name} />
      <DataBlock label="Tag ID" value={tag} />
      <DataBlock label="Age" value={`Approximately ${pet.age} years`} />
      <DataBlock label="Vaccinated" value={pet.vaccinated == undefined ? "Vaccines not up to date" : "Up to date"} />
      <DataBlock label="Neutered" value={pet.sterilized == undefined ? "Not Neutered" : "Neutered"} />
      <DataBlock label="Microchip ID" value={pet.microchip == undefined ? "Not microchiped" : pet.microchip} />
      <DataBlock label="Municiple License" value={pet.cityLicense == undefined ? "Not Registed" : pet.cityLicense} />
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-bold leading-6 text-gray-900">Known Diseases</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <ul className="list-disc list-outside">
          {pet?.diseases?.map((d) => (
            <li key={d.disease.code}>
              <Link href={`/health/${d.disease.code}`} className='underline cursor-pointer hover:text-red-700'>{d.disease.code}</Link>
            </li>
          ))}
          </ul>
        </dd>
      </div>
      { pet.description &&
        <div className="md:col-span-3 lg:col-span-2 col-span-1">
          <span className="text-sm font-bold leading-6 text-gray-900">Description:</span><br />
          {pet.description}
        </div>
      }
    </div>
  </>
  )
}
