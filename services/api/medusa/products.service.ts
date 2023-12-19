import { medusaClient } from '@/lib/medusa/config';

type FetchProductListParams = {
  pageParam?: number;
};

export const FetchProductList = async () => {
  const { products, count } = await medusaClient.products.list();
  return products!.map((product) => product.handle);
};

export const fetchProductsList = async ({
  pageParam = 0,
}: FetchProductListParams) => {
  const { products, count, offset } = await medusaClient.products.list({
    limit: 3,
    offset: pageParam,
  });

  return {
    response: { products, count },
    nextPage: count > offset + 3 ? offset + 3 : null,
  };
};

export const fetchProduct = async (handle: string) => {
  const { products } = await medusaClient.products.list({ handle });

  if (products.length > 0) {
    return products[0];
  }
  return null;
};

export const fetchProductCollection = async () => {
  const { collections } = await medusaClient.collections.list();

  return collections;
};
