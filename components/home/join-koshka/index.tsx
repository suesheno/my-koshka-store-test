import NewsletterForm from './newsletter-form';

const JoinKoshka = () => {
  return (
    <div className='py-14 xsmall:bg-[url(/images/join-koshka-bg.png)] xsmall:h-[387px] 2xsmall:bg-[url(/images/join-koshka-bg-mobile.jpg)] h-[520px] bg-center bg-cover w-full bg-tertiary flex items-center'>
      <div className='wrapper'>
        <div className='tablet:w-[700px] xsmall:w-full xsmall:pl-0 2xsmall:w-9/12 pl-8'>
          <h2 className='section-title !text-[#4F4F4F] mb-10 2xsmall:mb-4 2xsmall:pr-0 mobile:pr-11'>
            Join the Koshka Community
          </h2>
          <p className=' text-[#4F4F4F] mb-10 xsmall:text-3xl 2xsmall:text-base 2xsmall:mb-4'>
            Explore our products, join our community of cat lovers, and give
            your cat the care they deserve.
          </p>
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
};

export default JoinKoshka;
