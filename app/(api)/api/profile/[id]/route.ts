export const runtime = 'edge';

import { fetchProfile } from '@/services/strapi.service';

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  const ret = await fetchProfile(`${id!}`);
  if (ret.status == 200) return ret;
  return ret;
}
