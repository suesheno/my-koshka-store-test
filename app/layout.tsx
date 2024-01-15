import { Inter, Fredoka, Raleway } from 'next/font/google';
import localFont from 'next/font/local'
import { TwicInstall } from "@twicpics/components/react";
import "@twicpics/components/style.css";

import type { Metadata } from 'next';
import { MetaDataDefaults } from "@/constant/metaDataDefaults";

import '@/styles/globals.css';

import BackDrop from '@/components/modals/backdrop';
import Footer from '@/components/layouts/footer/footer';
import NavBar from '@/components/layouts/header/header';
import AuthProvider from '@/context/AuthenticationContext';
import QueryProvider from '@/providers/query-provider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
const fredoka = Fredoka({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fredoka',
});
const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
});
const fredokaOne = localFont({
  src: [
    {
      path: '../styles/fonts/FredokaOne-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-fredokaOne',
});

export const metadata: Metadata = MetaDataDefaults;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // fetch global data here
  return (
    <html lang='en' className={`${inter.variable} ${fredoka.variable} ${raleway.variable} ${fredokaOne.variable}`}>
      <TwicInstall domain="https://koshka.twic.pics" step={10} path="images" env="production" />
      <body>
        <AuthProvider >
            <QueryProvider>
              <BackDrop />
              <NavBar />
              <main>{children}</main>
              <Footer />
            </QueryProvider>
        </AuthProvider>
        {/*<!-- Start of HubSpot Embed Code -->*/}
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/8532401.js"></script>
        {/*<!-- End of HubSpot Embed Code -->*/}
      </body>
    </html>
  );
}