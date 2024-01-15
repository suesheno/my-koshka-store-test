'use client';
import React, { useState } from 'react';

export default function ConnectWithUs() {
  const [email, setEmailValue] = useState('');

  return (
    <div className='flex flex-col font-raleway medium:w-[494px] medium:max-w-none medium:mx-0 xltablet:w-[400px] 2xsmall:max-w-[500px] mx-auto'>
      <div className='mb-[10px] text-lg'>🐾 Stay Connected with Us 🐾</div>
      <div className='mb-[10px]'>
        Join the Koshka Pet community for the latest updates, pet care tips, and
        exclusive offers. Your furry friend deserves the best, and we&apos;re
        here to provide just that.
      </div>
      <div className='w-full flex'>
        <input
          className='w-full max-w-[336px] h-[29px] px-[10px] rounded-l-[5px] text-black'
          placeholder='Email'
          type={'email'}
          value={email}
          onChange={(e) => setEmailValue(e.target.value || '')}
        />
        <button
          className='w-[93px] text-center bg-primary h-[29px] rounded-r-[5px]'
          onClick={() => {
            setEmailValue('');
          }}>
          Submit
        </button>
      </div>
    </div>
  );
}
