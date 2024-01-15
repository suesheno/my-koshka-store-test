import { userStateContext } from '@/context/AuthenticationContext';
import { getMyProfile } from '@/services/medusa/client/profile.service';
import { fetchProfile } from '@/services/medusa/server/profile.service';
import { Customer } from '@medusajs/medusa';
import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface AccountProps {
  customer: Customer | null;
  retrievingCustomer: boolean;
  refetchCustomer: () => void;
  logoutCustomer: () => void;
}

export const useAccount = create<AccountProps>()(
  persist(
    (set) => ({
      customer: null,
      retrievingCustomer: false,
      refetchCustomer: async () => {
        try {
          set({ retrievingCustomer: true });
          const res = await getMyProfile();

          set({ retrievingCustomer: false });
          set({ customer: res.customer });
        } catch (error) {
          set({ customer: null });
        }
      },
      logoutCustomer: async () => {
        try {
          // await logout();
          set({ customer: null });
        } catch (error) {}
      },
    }),
    { name: 'account' }
  )
);
