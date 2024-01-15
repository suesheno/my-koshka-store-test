import * as querystring from "querystring";

export interface IMedusaCall {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone: stirng | number;
}

export interface IMedusaAddAddress {
    first_name?: string | undefined;
    last_name?: string | undefined;
    address_1: string;
    address_2?: string | undefined;
    city: string;
    province: string;
    country_code: string;
    postal_code: string;
    phone?: stirng | number | undefined;
    metadata?: object | undefined;
}

export interface IHubspotCall {
    "properties": {
        email: string;
        phone: stirng | number;
        lastname: string;
        firstname?: string | undefined;
        address?: string | undefined;
        city: string;
        state: string;
        country: string;
        date_of_birth?: string | undefined;
        gender?: string | undefined;

    }
}