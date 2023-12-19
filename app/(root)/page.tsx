import { Metadata } from 'next';

import AboutKoshka from '@/components/home/about-koshka';
import HeroCarousel from '@/components/home/carousel';
import ContactUs from '@/components/home/contact-us';
import JoinKoshka from '@/components/home/join-koshka';
import ProductCategories from '@/components/home/product-categories';
import PromotionalSection from '@/components/home/promotional-section';

export const metadata: Metadata = {
  title: 'Koshka Pet Product',
  description: 'This is an e-commerce pet products',
};

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <PromotionalSection />
      <ProductCategories />
      <AboutKoshka />
      <JoinKoshka />
      <ContactUs />
    </>
  );
};

export default HomePage;
