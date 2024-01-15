'use client';

import useBackdrop from '@/store/useBackdrop';

const BackDrop = () => {
  const backdrop = useBackdrop();
  if (!backdrop.show) {
    return;
  }
  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-black/70 z-30'></div>
  );
};

export default BackDrop;
