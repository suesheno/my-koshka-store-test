import medusaGet from '@/lib/medusa-http/medusa-get';

export const fetchProductList = async (curr: string = 'cad') => {
  return medusaGet(`products?currency_code=${curr}`);
};

export const fetchCollections = async (curr: string = 'cad') => {
  return medusaGet(`collections`);
};
