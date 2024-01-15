import RegistrationForm from '@/components/auth/sign-up/registration-form';

const RegistrationPage = () => {
  return (
    <div>
      <div className='h-[372px] bg-[url(/images/registration-bg.jpg)] bg-cover bg-center w-full flex justify-center items-center'>
        <h1 className='wrapper font-fredokaOne text-white tablet:text-[80px] tablet:leading-[84px] 2xsmall:text-[40px] leading-[44px] text-center'>
          Registration Form
        </h1>
      </div>
      <div className='wrapper'>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
