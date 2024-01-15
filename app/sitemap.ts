import { MetadataRoute } from 'next';
import {
  fetchDiseasesPages,
  fetchHowtoPages,
  fetchTermesOfService,
} from '@/services/strapi.service';
import { IProducts } from '@/types/products';

interface siteMap {
  path: string;
  lm?: Date;
  changeFrequency?: string;
  priority?: number;
}

async function fetchProduct(): Promise<IProducts> {
  const url = `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}products`;
  const p = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  return p.json();
}

const smEntry = ({
  path,
  lm = new Date(),
  changeFrequency = 'monthly',
  priority = 0.5,
}: siteMap) => ({
  url: `${process.env.NEXT_PUBLIC_ROOT}${path}`,
  lastModified: lm,
  changeFrequency: changeFrequency,
  priority: priority,
});
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Howto pages load
  const howtoPages = (await (await fetchHowtoPages()).json()).data.map(
    (h: any) =>
      smEntry({
        path: 'instructions/' + h.attributes.slug,
        lm: h.lastModified,
        changeFrequency: 'monthly',
        priority: 0.3,
      })
  );
  // Product pages load
  const products = (await fetchProduct()).products.map((p: any) =>
    smEntry({
      path: 'products/' + p.handle,
      lm: p.updated_at,
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  );
  // Health pages load
  const health = (await (await fetchDiseasesPages()).json()).data.map(
    (h: any) =>
      smEntry({
        path: 'health/' + h.attributes.code,
        lm: h.lastModified,
        changeFrequency: 'monthly',
        priority: 0.2,
      })
  );
  // TOS page load
  const tos = smEntry({
    path: 'tos',
    changeFrequency: 'yearly',
    priority: 0.1,
  });
  return [
    {
      url: `${process.env.NEXT_PUBLIC_ROOT}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_ROOT}about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_ROOT}contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    tos,
    ...products,
    ...howtoPages,
    ...health,
  ];
}
