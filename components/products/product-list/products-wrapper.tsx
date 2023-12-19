import ProductList from '.';

import { dehydrate } from '@tanstack/query-core';
import getQueryClient from '@/lib/react-query/get-query-client';
import Hydrate from '@/lib/react-query/hydrate-client';
import { fetchProductsList } from '@/services/api/medusa/products.service';

export default async function ProductsWrapper() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['getInfiniteProducts', 0],
    queryFn: fetchProductsList,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <div>
        <ProductList />
      </div>
    </Hydrate>
  );
}
