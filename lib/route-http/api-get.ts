import { FRONTEND_CODES as APP_CODES } from '@/constant/error_codes';
import { createErrorReturn } from '../../utils/create-error-return';

export const apiFetch = async (url: string, token?: string) => {
  let accesToken = null;
  if (typeof window !== 'undefined') {
    accesToken = localStorage.getItem('jwt');
  }
  const headerConfig: any = {};
  if (accesToken) {
    headerConfig['Authorization'] = `Bearer ${accesToken}`;
  }
  const data = await fetch(`/api/${url}`, {
    method: 'GET',
    headers: headerConfig,
  });
  if (data.status === 200) return await data.json();
  return createErrorReturn(APP_CODES.LOGIN_ERROR);
};
