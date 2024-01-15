import { Slider, Slide } from '@/components/animations'
import AboutKoshka from "@/components/home/about-koshka";
import { TwicImg } from '@twicpics/components/react'

const SlideTempate = ({img, index, title}: {img:string, index:number, title:string}) => {
  return (
      <div
          className={`w-full h-[468px] bg-cover bg-center flex items-center ${'text-class'}`}
      >
          <TwicImg src={img}
                   focus="auto"
                   className='absolute h-auto w-full'
                   mode="cover"
                   refit={true}
          />
        <div
            className={`wrapper flex ${
                (index + 1) % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}>
          <div className='tablet:w-[550px] tablet:min-w-min 2xsmall:w-1/2 min-w-[200px]'>
            <h2
                className={`font-fredokaOne drop-shadow-[0_4px_3px_rgba(0,0,0,0.25)] ${
                    (index + 1) % 2 === 0 ? 'text-secondary' : 'text-white'
                } tablet:text-[80px] tablet:leading-[84px] 2xsmall:text-[40px] 2xsmall:leading-normal`}>
              {title}
            </h2>
          </div>
        </div>
      </div>
  )
}

const HeroCarousel = () => {
  return (
      <div className='h-[468px]'>
        <Slider swipeDelay={5} swipeDuration={0.7}>
          <Slide>
            <SlideTempate
                img='carousel-bg-1.webp'
                index={0}
                title='Simplified Feline Care'
            />
          </Slide>
          <Slide>
            <SlideTempate
                img='carousel-bg-2.webp'
                index={1}
                title='Safety Meets Style'
            />
          </Slide>
          <Slide>
            <SlideTempate
                img='carousel-bg-3.webp'
                index={2}
                title='Playful Comfort for Your Precious Friend'
            />
          </Slide>
        </Slider>
      </div>
  )
}

export default HeroCarousel;