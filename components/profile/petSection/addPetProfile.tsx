import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import { XMarkIcon, PlusCircleIcon } from '@heroicons/react/20/solid';

import { ChangeEvent, FormEvent, useState } from 'react';

interface IInputText {
  label: string;
  id: string;
  value?: string;
  placeHolder?: string;
  onChangeFunc?: Function;
  ValueFunc?: Function;
}

const InputText = ({ label, id, placeHolder, onChangeFunc }: IInputText) => {
  return (
    <>
      <label
        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
        htmlFor={id}>
        {label}
      </label>
      <input
        className='appearance-none block w-full bg-gray-50 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
        name={id}
        id={id}
        type='text'
        placeholder={placeHolder}
      />
      <p className='text-red-500 text-xs italic'>Please fill out this field.</p>
    </>
  );
};
const InputToggle = ({ label, id, onChangeFunc }: IInputText) => {
  return (
    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
      <div className='pb-3'>{label}</div>
      <div className='relative inline-flex items-center cursor-pointer'>
        <input
          type='checkbox'
          data-val='true'
          value='true'
          name={id}
          id={id}
          className='sr-only peer'
        />
        <div className="w-11 h-6 bg-gray-50 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
      </div>
    </label>
  );
};
const CreatePetOverlay = ({
  id,
  dialogCtl,
}: {
  id: number;
  dialogCtl: Function;
}) => {
  const [file, setFile] = useState<string | Blob>('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [diseases, setDiseases] = useState<string[]>(['0']);
  const [formData, setFormData] = useState({
    name: '',
    age: 0,
    description: '',
    image: null,
    vaccinated: 'false',
    sterilized: 'false',
    contact: '',
    tags: null,
    reunites: null,
    cityLicense: '',
    microchip: '',
    diseases: [''],
    profile: id,
  });

  const onFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;

    if (!fileInput.files) {
      alert('No file was chosen');
      return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      alert('Files list is empty');
      return;
    }

    const file = fileInput.files[0];

    /** File validation */
    if (!file.type.startsWith('image')) {
      alert('Please select a valide image');
      return;
    }

    /** Setting file state */
    setFile(file); // we will use the file state, to send it later to the server
    setPreviewUrl(URL.createObjectURL(file)); // we will use this to show the preview of the image

    /** Reset file input */
    e.currentTarget.type = 'text';
    e.currentTarget.type = 'file';
  };

  const setD = (d: HTMLCollectionOf<HTMLOptionElement>) => {
    // @ts-ignore
    setDiseases([...d].map((o) => o.value));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const imgSend = new FormData();
    imgSend.append('files', file);

    // Upload Image
    const imageResponse = await fetch('/api/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: imgSend,
    });

    // Add Pet
    formData.image = (await imageResponse.json())[0].id;
    formData.diseases = diseases;
    await fetch('/api/pets', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });
    dialogCtl(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <span className='w-full py-5 text-center text-xl'>Add a new Pet</span>
      <form
        className='grid gap-2 grid-cols-2 w-full px-0 md:px-5'
        onSubmit={(e) => handleSubmit(e)}>
        <div className='flex flex-wrap col-span-2'>
          {previewUrl ? (
            <div className='mx-auto w-80'>
              <XMarkIcon
                className='absolute cursor-pointer text-red-700 w-10 h-10'
                onClick={() => setPreviewUrl(null)}
              />
              <Image
                alt='file uploader preview'
                objectFit='cover'
                src={previewUrl}
                width={320}
                height={218}
                layout='fixed'
              />
            </div>
          ) : (
            <label className='flex flex-col items-center justify-center w-full h-full py-3 transition-colors duration-150 cursor-pointer hover:text-gray-600'>
              <div className='w-20 h-20'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
              </div>
              Add Image
              <input
                className='block w-0 h-0'
                id='image'
                name='image'
                type='file'
                onChange={(e) => onFileUploadChange(e)}
              />
            </label>
          )}
        </div>
        <div className='col-span-2'>
          <InputText
            label='Name'
            id='name'
            placeHolder='Garfield'
            onChangeFunc={handleInputChange}
          />
        </div>
        <div className=''>
          <InputText
            label='City License'
            id='cityLicense'
            placeHolder='C0000000'
            onChangeFunc={handleInputChange}
          />
        </div>
        <div className=''>
          <InputText
            label='Microchip Number'
            id='microchip'
            placeHolder='0000000'
            onChangeFunc={handleInputChange}
          />
        </div>
        <div className='col-span-2'>
          <InputText
            label='Description'
            id='description'
            placeHolder='Black and very freindly'
            onChangeFunc={handleInputChange}
          />
        </div>
        <div className=''>
          <InputToggle
            label='Vaccinated'
            id='vaccinated'
            onChangeFunc={handleInputChange}
          />
        </div>
        <div className=''>
          <InputToggle
            label='Neutered'
            id='sterilized'
            onChangeFunc={handleInputChange}
          />
        </div>
        <div className='col-span-2'>
          <label
            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
            htmlFor='diseases'>
            Known Diseases
          </label>
          <select
            className='rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            name='diseases'
            id='diseases'
            multiple
            value={diseases}
            onChange={(e) => {
              setD(e.target.selectedOptions);
            }}>
            <option value={'0'}>None</option>
            <option value={'1'}>Feline Immunodeficiency Virus (FIV)</option>
            <option value={'2'}>Feline Leukemia Virus (FelV)</option>
            <option value={'3'}>Upper Respiratory Infections</option>
            <option value={'4'}>Diabetes</option>
            <option value={'5'}>Heartworm</option>
            <option value={'6'}>Cancer</option>
            <option value={'7'}>Rabies</option>
            <option value={'8'}>Ringworm</option>
            <option value={'9'}>Worms</option>
          </select>
        </div>
        <div className='col-span-2 grid grid-cols-2 gap-6 pt-5'>
          <button
            type='submit'
            className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Add to profile
          </button>
          <button
            type='button'
            className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            onClick={() => dialogCtl(false)}>
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

const AddPetProfile = ({ profileID }: { profileID: number }) => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className='relative z-50'>
        {/* Overlay */}{' '}
        <div className='fixed inset-0 bg-black/60' aria-hidden='true' />
        {/* Scroll */}{' '}
        <div className='fixed inset-0 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <Dialog.Panel className='mx-auto min-w-1/2 max-w-sm rounded bg-slate-200 p-5'>
              <CreatePetOverlay id={profileID} dialogCtl={setIsOpen} />
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
      <div className='flex row-span-2 my-1 ml-auto'>
        <button type='button' onClick={() => setIsOpen(true)}>
          <PlusCircleIcon className='rounded-md px-3 py-2 text-sm font-semibold text-koshkaGreen shadow-sm hover:animate-pulse animate-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' />
        </button>
      </div>
    </>
  );
};

export default AddPetProfile;
