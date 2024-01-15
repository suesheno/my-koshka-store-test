export const runtime = 'edge';

import { createCRMCustomer } from '@/services/hubsot.service';
import { IMedusaCall, IHubspotCall, IMedusaAddAddress } from '@/types/profiles';
import { ICreateAccount } from '@/types/formData';
import {
  login,
  medusaAddShippingAddress,
  medusaCreateProfile,
} from '@/services/medusa/server/profile.service';
import { RegistrationProps } from '@/types/profiles/customer';
import { AddressCreatePayload } from '@medusajs/medusa';
import { NextResponse } from 'next/server';
import { errorResponseHandler } from '@/utils/error-response-handler';
import { FRONTEND_CODES, Message } from '@/constant/error_codes';

const testCreateAccount = (
  b: ICreateAccount | FormData
): b is ICreateAccount => {
  return (b as ICreateAccount).email !== undefined;
};

export async function POST(req: Request): Promise<Response> {
  const data: RegistrationProps = await req.json();
  const requestHeaders: HeadersInit = new Headers();

  const { first_name, last_name, email, password } = data;
  const _data: any = { ...data };

  const createCustomerPayload = { first_name, last_name, email, password };

  const register = await medusaCreateProfile(createCustomerPayload).then(
    async (register) => {
      // trigger login after successfull registration
      // await login({ email, password }).then(async (res) => {
      //   const token = await res.json();
      //   requestHeaders.set('Authorization', token.access_token);

      //   delete _data.email;
      //   delete _data.password;
      //   let addShippingAddressPayload: AddressCreatePayload = _data;

      //   // call add shipping address after login is token is needed for this api
      //   await medusaAddShippingAddress(
      //     { address: addShippingAddressPayload },
      //     { Authorization: `Bearer ${token.access_token}` }
      //   ).then(async (res: any) => {});
      // });

      return register;
    }
  );

  if (register.ok) {
    const signin = await login({ email, password });
    const token = await signin.json();
    requestHeaders.set('Authorization', token.access_token);

    if (signin.ok) {
      delete _data.email;
      delete _data.password;
      let addShippingAddressPayload: AddressCreatePayload = _data;

      // call add shipping address after login is token is needed for this api
      const addAddress = await medusaAddShippingAddress(
        { address: addShippingAddressPayload },
        { Authorization: `Bearer ${token.access_token}` }
      );
    }
  }

  if (register.ok) {
    const registration = await register.json();
    return NextResponse.json(registration, { headers: requestHeaders });
  }

  if (register.status == 422) {
    const responseMessage = errorResponseHandler(FRONTEND_CODES.EMAIL_EXIST);

    return NextResponse.json(
      responseMessage.body.message,
      responseMessage.status
    );
  }

  return NextResponse.json(register.statusText, { status: register.status });

  // const responseMessage = errorResponseHandler(APP_CODES.LOGIN_ERROR);

  // return NextResponse.json(
  //   responseMessage.body.message,
  //   responseMessage.status
  // );

  // if (testCreateAccount(data)) {
  //   const medusaData: IMedusaCall = {
  //     first_name: data.firstName ? data.firstName : 'Private',
  //     last_name: data.lastName,
  //     email: data.email,
  //     password: data.password,
  //     phone: data.phoneNumber,
  //   };
  //   const medusaAddress: IMedusaAddAddress = {
  //     first_name: data.firstName ? data.firstName : undefined,
  //     last_name: data.lastName,
  //     address_1: data!.addresOne!,
  //     address_2: data.addressTwo ? data.addressTwo : undefined,
  //     city: data!.city!,
  //     province: data!.province!,
  //     country_code: data!.country,
  //     postal_code: data!.postalCode,
  //     phone: data.phoneNumber,
  //   };
  //   const hubspotData: IHubspotCall = {
  //     properties: {
  //       email: data.email,
  //       phone: data.phoneNumber,
  //       lastname: data.lastName,
  //       firstname: !data.firstName ? data.firstName : 'Private',
  //       address: !data.addresOne
  //         ? data.addresOne + ' ' + data.addressTwo
  //         : 'Private',
  //       city: data.city ? data.city : 'Private',
  //       state: data.province ? data.province : 'Private',
  //       country: data.country,
  //     },
  //   };
  //   let newProfile = createProfile(medusaData).then((p) =>
  //     addProfileAddress(medusaData)
  //   );
  //   let newContact = createCRMCustomer(hubspotData);
  //   await Promise.all([newProfile]);

  //   return await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}upload`, {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
  //     },
  //     body: data,
  //   });
  // }
}
