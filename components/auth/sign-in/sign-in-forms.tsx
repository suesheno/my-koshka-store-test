'use client';
import * as z from 'zod';
import Link from 'next/link';
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
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useLoginQuery } from '@/services/queries/auth.query';
import { useAccount } from '@/store/useAccount';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SignInForm = () => {
  const { isLoading, mutateAsync: login } = useLoginQuery();
  const refetchCustomer = useAccount((state) => state.refetchCustomer);
  const [authError, setAuthError] = useState<string | undefined>(undefined);
  const router = useRouter();

  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, { message: 'Required' }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const handleError = (_e: Error) => {
    setAuthError('Invalid email or password');
    form.setError('email', {
      type: 'manual',
      message: '',
    });
    form.setError('password', {
      type: 'manual',
      message: '',
    });
  };
  const onSubmit = async (credentials: z.infer<typeof formSchema>) => {
    await login(credentials)
      .then(() => {
        refetchCustomer();
        router.push('/');
      })
      .catch(handleError);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-xl font-medium font-fredoka'>
                Email
              </FormLabel>
              <FormControl>
                <Input {...field} className='h-[60px]' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem className='mt-6'>
              <FormLabel className='text-xl font-medium font-fredoka'>
                Password
              </FormLabel>
              <FormControl>
                <Input type='password' {...field} className='h-[60px]' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {authError && (
          <div className='mt-3'>
            <FormMessage>{authError}</FormMessage>
          </div>
        )}
        <div className='flex justify-between mt-6 align-middle gap-x-1'>
          <div className='flex items-center space-x-2'>
            <Checkbox
              id='keep-logged-in'
              className='border-[#5F5F5F] rounded-none'
            />
            <label
              htmlFor='keep-logged-in'
              className='text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
              Keep me Logged-In
            </label>
          </div>
          <Link href='' className='text-xs text-secondary underline'>
            Forgot Password?
          </Link>
        </div>
        <Button
          type='submit'
          size='lg'
          disabled={isLoading}
          className='shad-btn_primary mx-auto mt-10 mb-4 !text-xl'>
          Sign In
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
