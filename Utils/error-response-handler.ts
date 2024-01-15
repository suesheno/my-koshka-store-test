import { Message } from '@/constant/error_codes';

export const errorResponseHandler = (errorCode: number) => {
  const responseMessage = Message(errorCode);
  return {
    body: {
      error: responseMessage.code,
      message: responseMessage.text,
    },
    status: { status: responseMessage.html?.code },
  };
};
