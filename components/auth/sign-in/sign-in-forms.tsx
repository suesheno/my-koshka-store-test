'use client';

import * as z from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  userDispatchContext,
  userStateContext,
  operations,
} from '@/context/AuthenticationContext';

import { ILoginToken } from '@/types/profiles';
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
import { useContext, useState } from 'react';
import { IAPPMessages } from '@/constant/error_codes';
import { getLoginToken } from '@/services/medusa/client/profile.service';
import { useAccount } from '@/store/useAccount';
import medusaGet from '@/lib/medusa-http/medusa-get';

const SignInForm = () => {
  const router = useRouter();
  const refetchCustomer = useAccount((state) => state.refetchCustomer);
  const [authError, setAuthError] = useState<string | undefined>(undefined);
  const dispatch = useContext(userDispatchContext);

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

  const handleError = (error: string) => {
    setAuthError(error);
    form.setError('email', {
      type: 'manual',
      message: '',
    });
    form.setError('password', {
      type: 'manual',
      message: '',
    });
  };

  const formSubmit = async (credentials: {
    email: string;
    password: string;
  }) => {
    await getLoginToken(credentials)
      .then((res) => {
        const jwt = res.access_token;
        const { LOGIN } = operations;
        localStorage.setItem('jwt', jwt as string);
        const payload = { jwt };
        dispatch({ type: LOGIN, payload });
        refetchCustomer();
      })
      .catch((err) => {
        handleError(err.message);
      });
  };

  // useEffect(() => {
  //     if (loggedIn) router.push('/profile/' + jwt );
  // }, [user, jwt, loggedIn, router]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(formSubmit)} className='flex flex-col'>
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
          className='shad-btn_primary mx-auto mt-10 mb-4 !text-xl'>
          Sign In
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
