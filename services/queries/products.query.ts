import { useQuery } from '@tanstack/react-query';
import {
  fetchProductCollection,
  fetchProductsList,
} from '../api/medusa/products.service';

export const useGetProductsQuery = (page: number) => {
  return useQuery({
    queryKey: ['getInfiniteProducts', page],
    queryFn: async () => {
      const res = fetchProductsList({ pageParam: page });
      return res;
    },
  });
};
export const useGetProductCollection = () => {
  return useQuery({
    queryKey: ['fetchProductCollection'],
    queryFn: async () => {
      const res = fetchProductCollection();
      return res;
    },
  });
};
