'use client';

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  userDispatchContext,
  userStateContext,
  operations,
} from '@/context/AuthenticationContext';
import { logout } from '@/services/medusa/client/profile.service';

const Page = () => {
  const router = useRouter();
  const dispatch = useContext(userDispatchContext);
  const { jwt, loggedIn } = useContext(userStateContext);
  const { LOGOUT } = operations;
  useEffect(() => {
    logout(jwt as string)
      .then((e) => dispatch({ type: LOGOUT }))
      .then(() =>
        setTimeout(() => {
          router.push('/');
        }, 1000)
      );
  });
  return <>You have been logged out</>;
};

export default Page;
