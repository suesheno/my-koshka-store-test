import { useQuery } from '@tanstack/react-query';
import {
  fetchCollections,
  fetchProductList,
} from '../../../services/medusa/server/products.service';

// export const useGetProductsQuery = (page: number) => {
//   return useQuery({
//     queryKey: ['getInfiniteProducts', page],
//     queryFn: async () => {
//       const res = fetchProductList({ pageParam: page });
//       return res;
//     },
//   });
// };
export const useGetProductCollection = () => {
  return useQuery({
    queryKey: ['fetchProductCollection'],
    queryFn: async () => {
      const res = fetchCollections();
      return res;
    },
  });
};
