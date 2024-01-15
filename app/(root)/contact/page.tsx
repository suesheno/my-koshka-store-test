export const dynamicParams = false;

import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Contact us page',
    description: 'How to get a hold of us',
};

/*
    SSG Dynamic path and page content
*/
export default async function Page() {
    return (
        <>Contact us</>
    );
}
