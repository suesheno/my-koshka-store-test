import { errorResponseHandler } from '@/utils/error-response-handler';
import { BACKEND_CODES as APP_CODES, Message } from '@/constant/error_codes';
import { medusaLogout } from '@/services/medusa/server/profile.service';

export async function DELETE(req: Request): Promise<Response> {
  const requestHeaders: HeadersInit = new Headers();
  const jwt = req.headers.get('Authorization') as string;
  const resp = await medusaLogout({ Authorization: jwt });
  if (resp.status === 200) return Response.json({ status: 'Session ended' });
  const responseMessage = errorResponseHandler(APP_CODES.LOGIN_ERROR);
  return new Response(responseMessage.body.message, responseMessage.status);
}
