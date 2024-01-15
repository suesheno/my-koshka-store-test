export const dynamicParams = false;

import { yannick_chasse, marvyn_sue_contenido } from '@/constant/developpers';
import type { Metadata, ResolvingMetadata } from 'next';

import SingleProductTemplate from '@/components/products/single-product';
import { IProduct } from '@/types/products';
import { fetchHowtoPage } from '@/services/strapi.service';
interface ProductPageProps {
  params: { name: string };
}

export async function generateMetadata(
  { params }: ProductPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const product: IProduct = (await fetchProduct(params.name)).products[0];
  const previousKeywords = (await parent).keywords || [];
  const previousOG = (await parent).openGraph || {};
  const previousOGImg = (await parent).openGraph?.images || [];
  const url =
    (await parent).alternates?.canonical?.url + 'products/' + product.handle ||
    '';
  const authors = (await parent).authors || [];
  return {
    title: `${product.title}`,
    description: `${product.title} product detailed description page.`,
    keywords: ['product page', product.title, ...previousKeywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...previousOG,
      url: url,
      images: [
        {
          url: product.thumbnail,
        },
        ...previousOGImg,
      ],
    },
    authors: [...authors, marvyn_sue_contenido, yannick_chasse],
  };
}

export async function generateStaticParams() {
  const url = `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}products?currency_code=cad`;
  const products = (await (await fetch(url)).json()).products as IProduct[];
  return products.map((p: IProduct) => ({
    name: p.handle,
  }));
}

async function fetchProduct(name: string) {
  const url = `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}products?handle=${name}&currency_code=cad`;
  const p = await fetch(url);
  return p.json();
}

const ProductPage = async ({ params }: { params: { name: string } }) => {
  const name: string = params.name;
  const product = (await fetchProduct(name)).products[0];
  if (!product) {
    return '';
  }
  return <SingleProductTemplate product={product} />;
};

export default ProductPage;
