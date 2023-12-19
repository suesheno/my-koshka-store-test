import HeroSection from '@/components/products/hero-section';
import Loader from './loading';

const Productslayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeroSection />
      {children}
    </>
  );
};

export default Productslayout;
