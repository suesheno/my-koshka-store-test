import { fetcher, poster, put } from '../lib/strapi/fetcher';

/*
function to fetch ( GET ) data from strapi API
 */
export async function fetchLocals() {
  return await fetcher(`i18n/locales`);
}
export async function fetchHowtoPages() {
  return await fetcher('howtopages');
}
export async function fetchHowtoPage(slug: string) {
  return await fetcher(`howto/${slug}`);
}
export async function fetchDiseasesPages() {
  return await fetcher(`diseases`);
}
export async function fetchDiseasePage(slug: string) {
  return await fetcher(`disease/code/${slug}`);
}
export async function fetchTermesOfService(locale: string = 'en') {
  return await fetcher(`tos?locale=${locale}`);
}

export async function fetchProfile(uid: string) {
  return await fetcher(`profiles/user/${uid}`);
}

/*
function to Add ( POST ) data from strapi API
 */

export async function addPetProfile(data: object) {
  return await poster(`pets`, 'application/json', data);
}

/*
function to Change ( PUT ) data from strapi API
 */

export async function chgPetProfile(pid: string, data: object) {
  return await put(`pets/${pid}`, 'application/json', data);
}
