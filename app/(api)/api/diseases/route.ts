export const runtime = 'edge';

import { fetchDiseasesPages } from '@/services/strapi.service';

export async function GET(req: Request): Promise<Response> {
  const ret = await fetchDiseasesPages();
  if (ret.status == 200) return new Response(JSON.stringify(await ret.json()));
  return ret;
}
