export const runtime = 'edge';

import { BACKEND_CODES as APP_CODES } from '@/constant/error_codes';

import { fetchProfile } from '@/services/medusa/server/profile.service';
import { errorResponseHandler } from '@/utils/error-response-handler';
import { NextResponse } from 'next/server';

export async function GET(request: Request): Promise<Response> {
  const headersList = request.headers;
  const token = headersList.get('Authorization') as string;

  const response = await fetchProfile(token);
  if (response.ok) {
    const user = await response.json();

    return NextResponse.json(user);
  }

  const responseMessage = errorResponseHandler(APP_CODES.LOGIN_ERROR);
  return new Response(responseMessage.body.message, responseMessage.status);
}
