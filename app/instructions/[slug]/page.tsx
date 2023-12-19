import { fetchHowtoPage, fetchHowtoPages } from '@/lib/strapi/queries';
import { HowToPageProps, HowToPageFields } from '@/types/howto';
import GenericHeroSection from '@/components/shared/generic-hero-section';

import Layout from '@/components/layouts/pages/default';


/*
    SSG Dynamic path and page content
*/

export async function generateStaticParams() {
  const paths = await fetchHowtoPages();
  return paths.data.map(
    (path: { id: number; attributes: { slug: string } }) => ({
      slug: path.attributes.slug,
    })
  );
}

export default async function Page({ params }: { params: any }) {
  const { slug } = params;
  const data: HowToPageFields = await fetchHowtoPage(slug);

  return (
    <>
      <GenericHeroSection
        title={`${data.title}`}
        backgroundImage='/images/hero-product-page-bg.png'
      />
        <Layout>
          <div className='max-container padding-container py-14'>
            <div className='grid columns-5'>
              <div className='col-span-1' />
                <div
                  className='col-span-3 w-1/2'
                  dangerouslySetInnerHTML={{ __html: data.page }}
                />
              <div className='col-span-1' />
            </div>
          </div>
        </Layout>
    </>
  );
}
