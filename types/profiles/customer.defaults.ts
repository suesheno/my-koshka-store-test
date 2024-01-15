import { ICustomer } from "@/types/profiles/customer";

export const CustomerDefaults: ICustomer = {
    id: '',
    created_at: undefined,
    updated_at: undefined,
    deleted_at: undefined,
    email: '',
    first_name: '',
    last_name: '',
    billing_address_id: null,
    phone: '',
    has_account: false,
    metadata: null,
    orders: null,
    shipping_addresses: null,
}
