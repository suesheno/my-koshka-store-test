import medusaDelete from '@/lib/medusa-http/medusa-delete';
import medusaGet from '@/lib/medusa-http/medusa-get';
import medusaPost from '@/lib/medusa-http/medusa-post';
import {
  StorePostCustomersCustomerAddressesReq,
  StorePostCustomersReq,
} from '@medusajs/medusa';

export const login = async (payload: object) => {
  return medusaPost(`auth/token`, payload);
};

export const medusaLogout = async (header: object) => {
  return medusaDelete({ url: 'auth', header });
};

export const fetchProfile = async (token: string) => {
  return medusaGet('auth', { Authorization: token });
};

export const medusaCreateProfile = async (payload: StorePostCustomersReq) => {
  return medusaPost('customers', payload);
};
export const medusaAddShippingAddress = async (
  payload: StorePostCustomersCustomerAddressesReq,
  header?: {}
) => {
  return medusaPost(`customers/me/addresses`, payload, header);
};
