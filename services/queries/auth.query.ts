import { StorePostAuthReq } from '@medusajs/medusa';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getMe, login, logout } from '../api/medusa/auth.service';

export const useLoginQuery = () => {
  return useMutation(['login'], async (body: StorePostAuthReq) => {
    const res = await login(body);
    return res;
  });
};

// export const useGetMe = () => {
//   return useQuery(['getMe'], async () => {
//     const res = await getMe();
//     return res;
//   });
// };

// export const useDeleteMutation = () => {
//   return useQuery(['delete-session'], async () => {
//     const res = await logout();
//     return res;
//   });
// };
