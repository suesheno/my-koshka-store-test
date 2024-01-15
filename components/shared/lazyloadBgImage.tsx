import React, { useState } from 'react';
import Image from 'next/image';

type Props = {
  img: string;
  traceSVG?: string;
  children?: JSX.Element;
  className?: string;
  isDarkened?: boolean;
};

export default function LazyBackgroundImg({
  img,
  children,
  traceSVG,
  className,
  isDarkened,
}: Props) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };
  const displauImg = loaded ? img : traceSVG ? traceSVG : img;

  return (
    <div
      onClick={handleLoad}
      onLoad={() => alert('loaded')}
      className={className}
      style={{
        backgroundImage: `${
          isDarkened
            ? 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ),'
            : ''
        }url(${displauImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        filter: loaded ? 'none' : 'blur(20px)',
        transition: 'filter 0.5s',
      }}>
      <>
        <Image
          loading='lazy'
          width='100'
          height='100'
          src={img}
          alt='loadstatus checker'
          onLoad={handleLoad}
          className='hidden'
        />
        {children}
      </>
    </div>
  );
}
