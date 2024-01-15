'use client';
import { ChangeEvent, RefObject, useEffect, useRef, useState } from 'react';
import * as z from 'zod';
import Image from 'next/image';

import { Country, State } from 'country-state-city';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import uploadImageDefault from '@/public/images/upload-image-default.png';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { useRouter } from 'next/navigation';
import { useAccount } from '@/store/useAccount';
import { createProfile } from '@/services/medusa/client/profile.service';

interface SelectOptionProps {
  value: string;
  displayValue: string;
  isoCode: string;
}

const formSchema = z.object({
  email: z.string().email(),
  first_name: z
    .string()
    .regex(
      new RegExp(/^([a-zA-Z]+\s)*[a-zA-Z]+$/),
      'First Name must be a string'
    ),
  last_name: z
    .string()
    .regex(
      new RegExp(/^([a-zA-Z]+\s)*[a-zA-Z]+$/),
      'Last Name must be a string'
    ),
  phone: z.string(),
  address_1: z.string(),
  address_2: z.string().optional(),
  city: z.string(),
  country_code: z.string(),
  postal_code: z.string(),
  company: z.string().optional(),
  province: z.string().optional(),
  avatar: z.string().optional(),
  password: z.string().min(1, { message: 'Required' }),
});

const RegistrationForm = () => {
  const refetchCustomer = useAccount((state) => state.refetchCustomer);
  const customer = useAccount((state) => state.customer);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const countries: SelectOptionProps[] = Country.getAllCountries().map(
    (country) => ({
      value: country.name,
      displayValue: `${country.name}`,
      isoCode: country.isoCode,
    })
  );

  const [previewImage, setPreviewImage] = useState<any>('');
  const [states, setStates] = useState<SelectOptionProps[]>([]);
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleSelectCountry = (value: string) => {
    form.setValue('country_code', value);
    const country = countries.filter((country) => country.value === value);

    const stateData = State.getStatesOfCountry(country[0]?.isoCode).map(
      (state) => ({
        value: state.name,
        displayValue: state.name,
        isoCode: state.isoCode,
      })
    );
    setStates([...stateData]);
  };

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (hiddenFileInput) hiddenFileInput?.current?.click();
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && Object.keys(event?.target?.files!).length > 0) {
      const file = event.target.files[0];
      // setPreviewImage(URL.createObjectURL(file));
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        if (fileReader.result) {
          setPreviewImage(fileReader.result);
        }
      };
    }
  };

  const handleError = (error: any) => {
    if (error.response.status === 422) {
      form.setError('email', {
        type: 'manual',
        message: error.response.data.message,
      });
    } else {
      setErrorMessage('Server error encountered, please try again');
    }
  };
  const onSubmit = async (details: z.infer<typeof formSchema>) => {
    const { country_code } = details;
    const country = countries.filter(
      (country) => country.value === country_code
    );
    const countryCode = country[0].isoCode;
    await createProfile({
      ...details,
      country_code: countryCode,
    }).then(() => {
      // refetchCustomer();
    });
  };

  useEffect(() => {
    if (customer) {
      router.push('/');
    }
  }, [customer, router]);

  return (
    <div className='pb-11 xsmall:pt-[90px] 2xsmall:pt-6'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='flex gap-x-20 tablet:flex-nowrap 2xsmall:flex-wrap'>
            <div className='flex flex-col gap-y-5 tablet:w-3/5 2xsmall:w-full'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='input-label'>Email</FormLabel>
                    <FormControl>
                      <Input className='input-field' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className=' gap-x-5 tablet:grid-cols-2 2xsmall:grid grid-cols-1 gap-y-5'>
                <FormField
                  control={form.control}
                  name='first_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='input-label'>First Name</FormLabel>
                      <FormControl>
                        <Input className='input-field' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='last_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='input-label'>Last Name</FormLabel>
                      <FormControl>
                        <Input className='input-field' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='gap-x-5 tablet:grid-cols-2 2xsmall:grid grid-cols-1 gap-y-5'>
                <FormField
                  control={form.control}
                  name='phone'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='input-label'>
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input className='input-field' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='input-label'>Password</FormLabel>
                      <FormControl>
                        <Input
                          type='password'
                          className='input-field'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {errorMessage && (
                <div className='mt-3'>
                  <FormMessage>{errorMessage}</FormMessage>
                </div>
              )}
            </div>
            <div className='justify-center flex-wrap min-w-[241px] tablet:flex w-1/5 2xsmall:hidden'>
              <Image
                src={previewImage ? previewImage : uploadImageDefault}
                width={241}
                height={241}
                alt='profile image'
              />
              <Button
                size='sm'
                className='shad-btn_primary !text-xl mt-5 w-[241px] '
                onClick={(event) => handleClick(event)}>
                Upload
              </Button>
              <FormField
                control={form.control}
                name='avatar'
                render={({ field }) => (
                  <FormItem className='hidden'>
                    <FormControl>
                      <Input
                        className='input-field'
                        {...field}
                        type='file'
                        ref={hiddenFileInput}
                        onChange={(event) => handleImageChange(event)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className='flex flex-col gap-y-5 mt-5 tablet:w-4/5 2xsmall:w-full'>
            <FormField
              control={form.control}
              name='address_1'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='input-label'>Address 1</FormLabel>
                  <FormControl>
                    <Input className='input-field' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='address_2'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='input-label'>Address 2</FormLabel>
                  <FormControl>
                    <Input className='input-field' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className='flex flex-wrap justify-between gap-y-5'>
              <FormField
                control={form.control}
                name='city'
                render={({ field }) => (
                  <FormItem className='tablet:w-[calc((100%/3)-15px)] tablet:order-1 2xsmall:w-[calc((100%/2)-15px)] order-1'>
                    <FormLabel className='input-label'>City</FormLabel>
                    <FormControl>
                      <Input className='input-field' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='country_code'
                render={({ field }) => (
                  <FormItem className='tablet:w-[calc((100%/3)-15px)] tablet:order-2 2xsmall:w-[calc((100%/2)-15px)] order-3'>
                    <FormLabel className='input-label'>Country</FormLabel>
                    <Select
                      onValueChange={(value) => handleSelectCountry(value)}
                      defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className='input-field'>
                          <SelectValue placeholder='Select a country' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className='h-80'>
                        {countries.map((country) => (
                          <SelectItem
                            value={country.value}
                            key={country.isoCode}>
                            {country.displayValue}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='postal_code'
                render={({ field }) => (
                  <FormItem className='tablet:w-[calc((100%/3)-15px)] tablet:order-3 2xsmall:w-[calc((100%/2)-15px)] order-2'>
                    <FormLabel className='input-label'>Postal Code</FormLabel>
                    <FormControl>
                      <Input className='input-field' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='company'
                render={({ field }) => (
                  <FormItem className='tablet:w-[calc((100%/2)-15px)] tablet:order-3 2xsmall:w-full order-5'>
                    <FormLabel className='input-label'>Company</FormLabel>
                    <FormControl>
                      <Input className='input-field' {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='province'
                render={({ field }) => (
                  <FormItem className='tablet:w-[calc((100%/2)-15px) tablet:order-4 2xsmall:w-[calc((100%/2)-15px)] order-4'>
                    <FormLabel className='input-label'>Province</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={form.getValues('country_code') === undefined}>
                      <FormControl>
                        <SelectTrigger className='input-field'>
                          <SelectValue placeholder='Select a state' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className='h-80'>
                        {states.map((state) => (
                          <SelectItem value={state.value} key={state.isoCode}>
                            {state.displayValue}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='flex justify-end flex-wrap min-w-[241px] tablet:w-1/5 tablet:hidden 2xsmall:block max-w-[241px] mx-auto mt-5'>
              <Image
                src={previewImage ? previewImage : uploadImageDefault}
                width={241}
                height={241}
                alt='profile image'
              />
              <Button
                size='lg'
                className='w-full !text-xl mt-5 bg-secondary rounded-full'
                onClick={(event) => handleClick(event)}>
                Upload
              </Button>
              <FormField
                control={form.control}
                name='avatar'
                render={({ field }) => (
                  <FormItem className='hidden'>
                    <FormControl>
                      <Input
                        className='input-field'
                        {...field}
                        type='file'
                        ref={hiddenFileInput}
                        onChange={(event) => handleImageChange(event)}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className='flex-start !items-start space-x-2 xsmall:mt-20 2xsmall:mt-16'>
            <Checkbox
              id='keep-logged-in'
              className='shad-checkbox border-[#5F5F5F] rounded-none mt-1'
            />
            <label
              htmlFor='keep-logged-in'
              className='font-raleway peer-disabled:cursor-not-allowed peer-disabled:opacity-70 xsmall:text-xl 2xsmall:text-xs'>
              I agree to receive communications from KOSHKA pet products and
              understand that I can unsubscribe at any time.
            </label>
          </div>
          <Button
            type='submit'
            size='lg'
            className='shad-btn_primary flex mx-auto xsmall:mt-20 2xsmall:mt-16'>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RegistrationForm;
