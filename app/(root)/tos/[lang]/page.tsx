// export const dynamicParams = false;

// import {Metadata, ResolvingMetadata} from "next";
// import {fetchTermesOfService, fetchLocals} from '@/lib/strapi/queries';
// import {tosQueryType} from '@/types/tos'
// import GenericHeroSection from '@/components/shared/generic-hero-section';
// import {yannick_chasse} from "@/constant/developpers";

// import Layout from '@/components/layouts/pages/default';

// interface Props {
//     params: { lang: string }
// }

// // Dynamic metadata
// export async function generateMetadata(
//     { params }: Props,
//     parent: ResolvingMetadata
// ): Promise<Metadata> {
//     const authors = (await parent).authors || [];
//     return {
//         title: 'Terms of Service',
//         description: 'Legal Terms, of use of our online store',
//         authors: [
//             ...authors,
//             yannick_chasse
//         ],
//     }
// }

// /*
//     SSG Dynamic path and page content
// */

// export async function generateStaticParams() {
//     const paths = await ( await fetchLocals() ).json();
//     return paths.map(
//         (path: { code: string } ) => ({
//             lang: path.code,
//         })
//     );
// }

// export default async function Page({ params }: Props) {
//     const { lang } = params;
//     const data: tosQueryType = ( await ( await fetchTermesOfService(lang) ).json() ).data;

//     return (
//         <>
//             <GenericHeroSection
//                 title={`${data.attributes.title}`}
//                 backgroundImage='/images/hero-product-page-bg.png'
//             />
//             <Layout>
//                 <div className='max-container padding-container py-14'>
//                     <div
//                         className=''
//                         dangerouslySetInnerHTML={{ __html: data.attributes.content }}
//                     />
//                 </div>
//             </Layout>
//         </>
//     );
// }

import React from 'react';

const page = () => {
  return <div>page</div>;
};

export default page;
