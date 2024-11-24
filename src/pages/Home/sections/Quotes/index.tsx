import 'swiper/css';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import SwiperType from 'swiper';
import SVGArrowSlide from 'assets/svg/SVGArrowSlide';
import Card from './Card';

export default  function () {
  const [currSlide, setCurrSlide] = useState(0);
  const [lenSlides, setLenSlides] = useState(0);
  const refSwiper = useRef<SwiperType>(null);

  function toNextSlide() {
    const swiper = refSwiper.current;
    if(swiper) {
      swiper.slideNext();
      setCurrSlide(swiper.realIndex)
    }
  }
  function toPrevSlide() {
      const swiper = refSwiper.current;
      if(swiper) {
        swiper.slidePrev();
        setCurrSlide(swiper.realIndex)
      }
  }

  return (
    <Quotes className='Section __nopadding __noTopPadding __marginTop'>
      <button onClick={toPrevSlide}><SVGArrowSlide/></button>
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          onSwiper={(swiper) =>{
            //@ts-ignore
            refSwiper.current = swiper;
            setLenSlides(swiper.slides.length);

          }}
          modules={[EffectCoverflow]}
          >
          <SwiperSlide>
            <Card
              H4='1 We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.'
              H6_1='Mark Garfield'
              H6_2='CEO & Head of Product'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              H4='2 We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.'
              H6_1='Mark Garfield'
              H6_2='CEO & Head of Product'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              H4='3 We are serious about providing our best service to all the customers we help. Customers satisfaction is our number one priority.'
              H6_1='Mark Garfield'
              H6_2='CEO & Head of Product'
            />
          </SwiperSlide>
        </Swiper>
        <div className="checkpoints">
          {
           refSwiper.current?.slides && (
            Array.from({length:lenSlides}).map((_, i) => {
              const isActive = currSlide === i ? 'active' : '';
              return <span key={i} className={isActive}/>
             })
           )
          }
        </div>
      </div>
      <button onClick={toNextSlide}><SVGArrowSlide/></button>
    </Quotes>
  )
};

const Quotes = styled.div`
  display:flex;
  align-items: center;
  gap: 32px;
  justify-content: space-between;
  background-color: rgb(var(--secondary-2));
  padding-left: var(--offset);
  padding-right: var(--offset);
  min-height: 547px;

  button {
    width: 45px;
    aspect-ratio: 2/2;
    border-radius: 50%;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(var(--white));

    &:hover {
      background-color: rgb(var(--primary-1));
      path {fill: rgb(var(--white))}
    }
    &:last-child {
      transform: rotate(180deg);
    }
  }
  .container {
    width: min(723px, calc(100% - 64px - 90px));
    position: relative;
    .checkpoints {
      width: min-content;
      display: flex;
      margin: 0 auto;
      margin-top: 24px;
      gap: 4px;

      span {
        width: 15px;
        height: 4px;
        background-color: rgb(var(--white),0.3);
        &.active {
          background-color: rgb(var(--white));
        }
      }
    }
  }
`;
  
Quotes.defaultProps = {
  className: 'Quotes'
};
  
