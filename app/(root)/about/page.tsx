export const dynamicParams = false;

import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Information about us',
    description: 'Page about our believes and who we are',
};

/*
    SSG Dynamic path and page content
*/
export default async function Page() {
    return (
        <>About us</>
    );
}
