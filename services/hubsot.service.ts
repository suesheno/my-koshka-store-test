import { fetcher, poster, put } from '../lib/hubspot/fetcher';

/*
function to Add ( POST ) data from strapi API
 */

export async function createCRMCustomer(data: object) {
  return await poster(`contacts`, 'application/json', data);
}
