import { medusaClient } from '@/lib/medusa/config';
import { StorePostAuthReq } from '@medusajs/medusa';

export const login = async (body: StorePostAuthReq) => {
  const { customer } = await medusaClient.auth.authenticate(body);

  return customer;
};

export const getMe = async () => {
  const { customer } = await medusaClient.auth.getSession();
  return customer;
};

export const logout = async () => {
  return await medusaClient.auth.deleteSession();
};
