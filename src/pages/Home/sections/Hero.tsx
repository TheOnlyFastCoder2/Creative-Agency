import styled from 'styled-components';
import IMGHero_1 from 'assets/imgs/HomeHeroBg/1.png';
import IMGHero_2 from 'assets/imgs/HomeHeroBg/2.png';
import IMGHero_3 from 'assets/imgs/HomeHeroBg/3.png';
import IMGHero_4 from 'assets/imgs/HomeHeroBg/4.png';
import IMGHero_5 from 'assets/imgs/HomeHeroBg/5.png';
import IMGHero_6 from 'assets/imgs/HomeHeroBg/6.png';
import IMGHero_7 from 'assets/imgs/HomeHeroBg/7.png';
import IMGHero_8 from 'assets/imgs/HomeHeroBg/8.png';

import H2 from 'lib/ui/H2';
import P from 'lib/ui/P';
import Button from 'lib/ui/Button';
import SVGArrow from 'assets/svg/SVGArrow';
import PictureParallax from 'lib/components/PictureParallax';
import { useRef } from 'react';


export default function () {
  const refHero = useRef<HTMLDivElement>(null);
  
  return (
    <Hero className="Section" ref={refHero}>
      <div className="left">
        <H2>Make your business <span>more powerful</span> with us</H2>
        <P>
          We provide various services to make your business grow and get bigger. 
          Your satisfaction is our first priority.
        </P>
        <Button>
          Get Started <SVGArrow/>
        </Button>
      </div>
      <div className="right">
        <div className="wrapper">
          <PictureParallax refParent={refHero} range={25}>
            <img src={IMGHero_6} alt='' loading="lazy"/>
            <img src={IMGHero_7} alt='' loading="lazy"/>
          </PictureParallax>
          
          <PictureParallax refParent={refHero} range={18}>
            <img src={IMGHero_5} alt='' loading="lazy"/>
            <img src={IMGHero_4} alt='' loading="lazy"/>
          </PictureParallax>
       
          <PictureParallax refParent={refHero} range={30}>
            <img src={IMGHero_8} alt='' loading="lazy"/>
          </PictureParallax>
          <PictureParallax refParent={refHero} range={20}>
            <img  className="Img_3" src={IMGHero_3} alt='' loading="lazy"/>
          </PictureParallax>
          
          <PictureParallax refParent={refHero} range={8}>
            <img className="Img_2" src={IMGHero_2} alt='' loading="lazy"/>
          </PictureParallax>
          
          <PictureParallax refParent={refHero} range={9}>
            <img  className="Img_1" src={IMGHero_1} alt='' loading="lazy"/>
          </PictureParallax>
        </div>
      </div>
    </Hero>
  )
};

const Hero = styled.div`
  display: flex;
  justify-content:  space-between;
  padding: 0 var(--offset);
  width: 100%;

  
  .left {
    padding-top: 113px;
    .H2 {
      max-width: 570px; 
    }

    .P {
      max-width: 365px;
      margin: 24px 0;
    }

    .Button {
      display:flex;
      align-items: center;
      gap: 16px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    width: 49%;
    padding-top: 20px;
    & > .wrapper {
      position: relative;
      width: 100%;
      height:50%;
      right:-3vw;
      & > * > *.active {
        backdrop-filter: blur(0.7px);
      }
      
      .Img_1 {
        filter: drop-shadow(5px 4px 50px rgba(var(--secondary-2), 0.5))
      }
      .Img_3,.Img_2 {
        filter: drop-shadow(-20px -12px 10px rgba(var(--dark), 0.15))
      }
      & > .PictureParallax, & > img {
        width: 120%;
        position: absolute;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    .left { 
      order: 2;
      padding-top: 60px;
    }
    .right {
      width: 100%;
      .wrapper {
        max-width: 380px;
        aspect-ratio: 1/1;
        margin: 0 auto;
        & > .PictureParallax, & > img {
          width: 100%;
        }
      }
    }
  }
`;