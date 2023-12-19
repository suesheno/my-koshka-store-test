'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const carouselItems = [
  {
    imgSrc: '/images/carousel-bg-1.jpg',
    title: 'Simplified Feline Care',
  },
  {
    imgSrc: '/images/carousel-bg-2.jpg',
    title: 'Safety Meets Style',
  },
  {
    imgSrc: '/images/carousel-bg-3.jpg',
    title: 'Playful Comfort for Your Precious Friend',
  },
];

const HeroCarousel = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<div class="${className}"></div>`;
    },
  };

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      pagination={pagination}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      onSlideChange={() => {}}
      onSwiper={(swiper) => {}}
      height={468}
      autoHeight={false}>
      {carouselItems.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className={`w-full h-[468px] bg-cover bg-center flex items-center ${'text-class'}`}
            style={{ backgroundImage: `url(${item.imgSrc})` }}>
            <div
              className={`wrapper flex ${
                (index + 1) % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}>
              <div className='tablet:w-[550px] tablet:min-w-min 2xsmall:w-1/2 min-w-[200px]'>
                <h2
                  className={`font-fredokaOne drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)] ${
                    (index + 1) % 2 === 0 ? 'text-secondary' : 'text-white'
                  } tablet:text-[80px] tablet:leading-[84px] 2xsmall:text-[40px] 2xsmall:leading-normal`}>
                  {item.title}
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousel;
