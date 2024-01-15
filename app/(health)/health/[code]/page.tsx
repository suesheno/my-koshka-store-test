export const dynamicParams = false;

import {
  fetchDiseasePage,
  fetchDiseasesPages,
} from '@/services/strapi.service';
import GenericHeroSection from '@/components/shared/generic-hero-section';
import { IDiseases } from '@/types/diseases';
import Layout from '@/components/layouts/pages/default';

/*
    SSG Dynamic path and page content
*/

export async function generateStaticParams() {
  const paths: IDiseases = await (await fetchDiseasesPages()).json();
  return paths.data.map((path): { code: string } => ({
    code: path.attributes.code,
  }));
}

export default async function Page({ params }: { params: any }) {
  const { code } = params;
  const data = await (await fetchDiseasePage(code)).json();
  return (
    <>
      <GenericHeroSection
        title={`${data.name}`}
        backgroundImage='/images/hero-product-page-bg.png'
      />
      <Layout>
        <div className='max-container padding-container py-14'>
          <div className='grid columns-5'>
            <div className='col-span-1' />
            <div
              className='col-span-3 align-center'
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
            <div className='col-span-1' />
          </div>
        </div>
      </Layout>
    </>
  );
}
