import SingleProductTemplate from '@/components/products/single-product';
import {
  FetchProductList,
  fetchProduct,
} from '@/services/api/medusa/products.service';
import { Metadata } from 'next';

interface ProductPageProps {
  params: { name: string };
}

export const generateMetadata = async ({
  params: { name },
}: ProductPageProps): Promise<Metadata> => {
  const product = await fetchProduct(name);

  return {
    title: product?.title + ' - Koshka',
    description: product?.description,
    openGraph: {
      images: [{ url: product?.thumbnail! }],
    },
  };
};

export async function generateStaticParams() {
  const paths = await FetchProductList();
  return paths.map((path) => ({
    name: path,
  }));
}

const ProductPage = async ({ params }: { params: { name: string } }) => {
  const name: string = params.name;
  const product = await fetchProduct(name);
  if (!product) {
    return '';
  }
  return <SingleProductTemplate product={product} />;
};

export default ProductPage;
