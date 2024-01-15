import { IAPPMessages, Message } from '@/constant/error_codes';

export const createErrorReturn = (errorCode: number): IAPPMessages => {
  const responseMessage = Message(errorCode);
  return {
    code: errorCode,
    text: JSON.stringify({
      error: responseMessage.code,
      message: responseMessage.text,
    }),
  };
};
