import { ILoginToken } from '@/types/profiles';
import {
  FRONTEND_CODES as APP_CODES,
  IAPPMessages,
} from '@/constant/error_codes';
import { createErrorReturn } from '../../utils/create-error-return';

export const apiPost = async (url: string, body: object, header?: any) => {
  const res = await fetch(`/api/${url}`, {
    method: 'POST',
    headers: {
      ...header,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const error = await res.json();

    throw { message: error, status: res.status };
  }
  return res.json();
};
