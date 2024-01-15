export const runtime = 'edge';

import { addPetProfile, chgPetProfile } from '@/services/strapi.service';

export async function POST(req: Request): Promise<Response> {
  const data = await req.json();
  const pet = await addPetProfile({ data });
  if (pet.status === 200) return Response.json(await pet.json());
  return new Response(
    JSON.stringify({ error: '100.1', message: 'Error creating pet' }),
    { status: pet.status }
  );
}

export async function PUT(req: Request): Promise<Response> {
  const data = await req.json();
  const id = data.id;
  const pet = await chgPetProfile(id, { data });

  if (pet.status === 200) return Response.json(await pet.json());
  return new Response(
    JSON.stringify({ error: '100.2', message: 'Error updating pet' }),
    { status: pet.status }
  );
}
