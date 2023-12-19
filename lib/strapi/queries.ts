import { fetcher } from '../fetcher';

export async function getLocals() { return await fetcher(`i18n/locales`); }
export async function fetchHowtoPages() { return await fetcher('howtopages'); }
export async function fetchHowtoPage(slug: string) { return await fetcher(`howto/${slug}`); }
export async function fetchTermesOfService(locale: string = "en") { return await fetcher(`tos?locale=${locale}`); }
