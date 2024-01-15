export const dynamicParams = false;

import { IProducts, ICollections } from '@/types/products';
import Breadcrumbs from './breadcrumbs';
import ProductList from './product-list';
import {
  fetchCollections,
  fetchProductList,
} from '@/services/medusa/server/products.service';

async function fetchCollection(): Promise<ICollections> {
  return await (await fetchCollections()).json();
}
async function fetchProduct(): Promise<IProducts> {
  return await (await fetchProductList('cad')).json();
}

const ProductsTemplate = async () => {
  //
  // Fetch Collection and Product data concurrently
  //
  const collectionsData = fetchCollection();
  const productsData = fetchProduct();
  const [collections, products] = await Promise.all([
    collectionsData,
    productsData,
  ]);

  return (
    <div className='max-container padding-container pb-20'>
      <Breadcrumbs />
      <div className='flex gap-x-7 tablet:flex-nowrap 2xsmall:flex-wrap'>
        <ProductList
          productList={products.products}
          collections={collections.collections}
        />
      </div>
    </div>
  );
};

export default ProductsTemplate;
