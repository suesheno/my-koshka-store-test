import {
  AddressCreatePayload,
  StorePostCustomersCustomerAddressesReq,
  StorePostCustomersReq,
} from '@medusajs/medusa';

export interface ICustomer {
  readonly id: stirng;
  readonly created_at?: date | string | undefined;
  readonly updated_at?: date | string | undefined;
  readonly deleted_at?: date | string | undefined;
  email: string;
  first_name: string;
  last_name: string;
  billing_address_id: object | null;
  phone: string | number;
  has_account: boolean;
  metadata: object | null;
  orders: Array<object> | null;
  shipping_addresses: Array<object> | null;
}

export interface ILoginToken {
  readonly access_token: stirng;
}

export interface RegistrationProps {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  address_1: string;
  address_2?: string;
  city: string;
  country_code: string;
  postal_code: string;
  phone: string;
  company?: string;
  province?: string;
  metadata?: object;
}
