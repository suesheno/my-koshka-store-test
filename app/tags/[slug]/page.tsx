"use client";
export const runtime = 'edge';
import useSWR from 'swr';
import {redirect} from 'next/navigation';

import PetProfile from '@/components/reunite/tagProfile';
import Layout from '@/components/layouts/pages/default';

const validateTag = (tag: string): void => {
  const tagValid = /^[0-9A-Za-z]{8}$/.test(tag);
  if (!tagValid) redirect("/");
}

// @ts-ignore
const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

export default function Page({params}: { params: { slug: string } }) {
  // fetch global data here
  const tagName: string = params.slug;
  validateTag(tagName);
  const url = `http://localhost:1337/api/tagid/${tagName}`;
  const {data, error, isLoading} = useSWR(url, fetcher);
  if (isLoading) return <div> Loading Pet Info </div>
  if ( error ) return redirect('/')
  if ( !data.claimed ) redirect('/registration')
  return (
    <Layout>
      <PetProfile tag={tagName} pet={data.pet} />
    </Layout>
  );
}
