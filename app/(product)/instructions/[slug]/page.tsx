export const dynamicParams = false;

import { Metadata, ResolvingMetadata } from 'next';
import { fetchHowtoPage, fetchHowtoPages } from '@/services/strapi.service';
import { HowToPageFields } from '@/types/howto';
import GenericHeroSection from '@/components/shared/generic-hero-section';
import { yannick_chasse } from '@/constant/developpers';

import Layout from '@/components/layouts/pages/default';

interface Props {
  params: { slug: string };
}

// Dynamic metadata
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const authors = (await parent).authors || [];
  const data: HowToPageFields = await (
    await fetchHowtoPage(params.slug)
  ).json();
  return {
    title: `${data.title}`,
    description: 'Page about our believes and who we are',
    authors: [...authors, yannick_chasse],
  };
}

/*
    SSG Dynamic path and page content
*/

export async function generateStaticParams() {
  const paths = await (await fetchHowtoPages()).json();
  return paths.data.map(
    (path: { id: number; attributes: { slug: string } }) => ({
      slug: path.attributes.slug,
    })
  );
}

export default async function Page({ params }: { params: any }) {
  const { slug } = params;
  const data: HowToPageFields = await (await fetchHowtoPage(slug)).json();

  return (
    <>
      <GenericHeroSection
        title={`${data.title}`}
        backgroundImage='/images/hero-product-page-bg.png'
      />
      <Layout>
        <main className='max-container padding-container py-14'>
          <div className='grid columns-5'>
            <div className='col-span-1' />
            <div
              className='col-span-3 w-1/2'
              dangerouslySetInnerHTML={{ __html: data.page }}
            />
            <div className='col-span-1' />
          </div>
        </main>
      </Layout>
    </>
  );
}
