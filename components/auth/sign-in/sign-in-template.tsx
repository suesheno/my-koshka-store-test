'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Link from 'next/link';
import { ROUTES_LIST } from '@/constant/routes';
import { useAccount } from '@/store/useAccount';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import SignInForm from './sign-in-forms';

const SignInTemplate = () => {
  const { customer, retrievingCustomer, refetchCustomer } = useAccount(
    (state) => state
  );

  const router = useRouter();

  useEffect(() => {
    if (!retrievingCustomer && customer) {
      router.push('/');
    }
  }, [retrievingCustomer, customer, router]);
  return (
    <div className='wrapper xsmall:py-36 2xsmall:py-14'>
      <Card className='max-w-[579px] mx-auto p-4 border-input'>
        <CardHeader>
          <CardTitle className='section-title !text-[#4F4F4F]'>
            Sign In
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
        <CardFooter className='flex-wrap'>
          <h5 className='label-with-line w-full'>
            <span>New to Koshka?</span>
          </h5>

          <Link
            href={ROUTES_LIST.SIGN_UP}
            className='mx-auto w-full text-center'>
            <Button
              type='button'
              size='lg'
              variant='outline'
              className='shad-btn_outline !text-xl mt-10'>
              Registration
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignInTemplate;
