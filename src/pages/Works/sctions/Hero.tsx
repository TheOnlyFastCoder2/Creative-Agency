import H3 from 'lib/ui/H3';
import styled from 'styled-components';
import IMGHero_1 from 'assets/imgs/WorksHeroBg/1.png';
import IMGHero_2 from 'assets/imgs/WorksHeroBg/2.png';
import IMGHero_3 from 'assets/imgs/WorksHeroBg/3.png';
import IMGHero_4 from 'assets/imgs/WorksHeroBg/4.png';
import IMGHero_5 from 'assets/imgs/WorksHeroBg/5.png';
import IMGHero_6 from 'assets/imgs/WorksHeroBg/6.png';
import IMGHero_7 from 'assets/imgs/WorksHeroBg/7.png';
import IMGHero_8 from 'assets/imgs/WorksHeroBg/8.png';
import IMGHero_9 from 'assets/imgs/WorksHeroBg/9.png';

import PictureParallax from 'lib/components/PictureParallax';
import { useRef } from 'react';


export default function () {
  const refHero = useRef<HTMLDivElement>(null);
  return (
    <Hero className='Section' ref={refHero}>
     <H3>Some of the companies we have worked with</H3>
      <PictureParallax refParent={refHero} range={10}>
        <img className="Img_8" src={IMGHero_8} alt="" />
        <img className="Img_9" src={IMGHero_9} alt="" />
        <img className="Img_6" src={IMGHero_6} alt="" />
        <img className="Img_7" src={IMGHero_7} alt="" />
        <PictureParallax refParent={refHero} range={8}>
          <img className="Img_4" src={IMGHero_4} alt="" />
        </PictureParallax>
        <PictureParallax refParent={refHero} range={20}>
          <img className="Img_5" src={IMGHero_5} alt="" />
        </PictureParallax>
        <img className="Img_3" src={IMGHero_3} alt="" />
        <img className="Img_1" src={IMGHero_1} alt="" />
        <PictureParallax refParent={refHero} range={15}>
          <img className="Img_2" src={IMGHero_2} alt="" />
        </PictureParallax>
      </PictureParallax>
    </Hero>
  )
};



const Hero = styled.div`
    text-align: center;

    .H3 {
      max-width:851px;
      margin: 0 auto;
    }

    .Img_1{
      filter: drop-shadow(-12px 12px 40px rgba(var(--primary-1), 0.5))
    }
    .Img_2 {
      filter: drop-shadow(5px 4px 50px rgba(var(--secondary-4), 0.5))
    }
    .Img_3 {
      filter: drop-shadow(5px 4px 50px rgba(var(--secondary-2), 0.25))
    }
    .Img_5 {
      filter: drop-shadow(-20px -12px 100px rgba(var(--primary-1), 0.25))
    }

    .PictureParallax {
      max-width:1041px;
      aspect-ratio: 16/9;
    }
`;