import { TextField } from '@/components/ui/formFields/text-input';
import { ChangeEvent, useState } from 'react';

const testData = {
  name: 'Tom Cook',
  email: 'tom.cook@gmail.com',
  mobile: '555-555-5555',
};

export const PersonalInfo = () => {
  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState(testData);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  const saveRecord = async () => {
    setEdit(false);
  };

  return (
    <>
      <div className='pt-6 sm:flex'>
        <div className='mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto'>
          <TextField
            id='name'
            label='Name'
            placeholder='John Doe'
            defaultValue={formData.name}
            enabled={edit}
            onChange={handleInputChange}
          />
          <TextField
            id='email'
            label='Email'
            placeholder='John.Doe@email.com'
            defaultValue={formData.email}
            enabled={edit}
            onChange={handleInputChange}
          />
          <TextField
            id='mobile'
            label='Mobile'
            placeholder='514 452-3075'
            defaultValue={formData.mobile}
            enabled={edit}
            onChange={handleInputChange}
          />
          {edit && (
            <button
              type='button'
              className='font-semibold text-indigo-600 hover:text-indigo-500'
              onClick={() => saveRecord()}>
              Save
            </button>
          )}
          {!edit && (
            <button
              type='button'
              className='font-semibold text-indigo-600 hover:text-indigo-500'
              onClick={() => setEdit(!edit)}>
              Update
            </button>
          )}
        </div>
      </div>
    </>
  );
};
