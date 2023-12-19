import { Metadata } from 'next';
import { FC } from 'react';
import SignInTemplate from '@/components/auth/sign-in/sign-in-template';

export const metadata: Metadata = {
  title: 'Sign In Page',
  description: 'Customer sign in page',
};

const LoginPage: FC = () => {
  return <SignInTemplate />;
};

export default LoginPage;
