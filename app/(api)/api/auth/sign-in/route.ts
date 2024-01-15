export const runtime = 'edge';

import { BACKEND_CODES as APP_CODES, Message } from '@/constant/error_codes';

import { login } from '@/services/medusa/server/profile.service';
import { NextResponse } from 'next/server';

const errorResponseHandler = (errorCode: number) => {
  const responseMessage = Message(errorCode);
  return {
    body: {
      error: responseMessage.code,
      message: responseMessage.text,
    },
    status: { status: responseMessage.html?.code },
  };
};

export async function POST(req: Request): Promise<Response> {
  const payload = await req.json();
  const requestHeaders: HeadersInit = new Headers();
  const response = await login(payload);

  if (response.ok) {
    const token = await response.json();

    requestHeaders.set('Authorization', token.access_token);
    return NextResponse.json(token, { headers: requestHeaders });
  }
  const responseMessage = errorResponseHandler(APP_CODES.LOGIN_ERROR);

  return NextResponse.json(
    responseMessage.body.message,
    responseMessage.status
  );
}
