import { IAPPMessages } from '@/constant/error_codes';
import { ILoginToken } from '@/types/profiles';
import { apiFetch } from '@/lib/route-http/api-get';
import { apiPost } from '@/lib/route-http/api-post';
import {
  Customer,
  StoreCustomersRes,
  StorePostCustomersReq,
} from '@medusajs/medusa';
import { CreateCustomerInput } from '@medusajs/medusa/dist/types/customers';
import { RegistrationProps } from '@/types/profiles/customer';

export const getLoginToken = async (
  credentials: object
): Promise<ILoginToken> => {
  return await apiPost('auth/sign-in', credentials);
};

export const getMyProfile = async (): Promise<{ customer: Customer }> => {
  return await apiFetch('auth/me');
};

export const logout = async (token: string) => {
  const data = await fetch('/api/auth', {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
  return await data.json();
};

export const createProfile = async (customer: RegistrationProps) => {
  return await apiPost('profile/create', customer);
};
