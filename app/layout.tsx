import '@/styles/globals.css';

import BackDrop from '@/components/modals/backdrop';
import Footer from '@/components/layouts/footer/footer';
import NavBar from '@/components/layouts/header/header';

import type { Metadata } from 'next';
import QueryProvider from '@/providers/query-provider';

// export const metadata: Metadata = {
//   metadataBase: new URL(process.env.FRONTEND_URL!),
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // fetch global data here

  return (
    <html lang='en'>
      <body>
        <QueryProvider>
          <BackDrop />
          <NavBar />
          <main>{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
