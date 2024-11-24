import H2 from 'lib/ui/H2';
import PictureParallax from 'lib/components/PictureParallax';
import { useRef } from 'react';
import P from 'lib/ui/P';
import styled from 'styled-components';
import IMGBg_1 from 'assets/imgs/AboutHeroBg/1.png';
import IMGBg_2 from 'assets/imgs/AboutHeroBg/2.png';
import IMGBg_3 from 'assets/imgs/AboutHeroBg/3.png';
import IMGBg_4 from 'assets/imgs/AboutHeroBg/4.png';

export default function () {
  const refHero = useRef<HTMLDivElement>(null);

  return (
    <Hero className='Section' ref={refHero}>
        
      <div className="container">
        <H2>Get to know more about us</H2>
        <P>
          We are an agency engaged in the creative industry and business, 
          we are ready to help you to improve your business performance together with our great team
        </P>
        <div className="background">
          <PictureParallax refParent={refHero} range={30}>
            <img src={IMGBg_1} alt=""/>
          </PictureParallax>
          <PictureParallax refParent={refHero} range={30}>
            <img src={IMGBg_2} alt=""/>
          </PictureParallax>
          <PictureParallax refParent={refHero} range={30}>
            <img src={IMGBg_3} alt=""/>
          </PictureParallax>
          <PictureParallax refParent={refHero} range={30}>
            <img src={IMGBg_4} alt=""/>
          </PictureParallax>
        </div>
      </div>
    </Hero>
  )
};

const Hero = styled.div`
  .container {
    position: relative;
    gap: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    aspect-ratio: 1120/408;
    background-color: rgb(var(--grayscale-6));
    border-radius: 28px;
    color: rgb(var(--text-dark));
    padding: 24px;

    .H2 {max-width: 45.3%; z-index:10}
    .P {max-width: 71.4%; z-index:10}
    .background {
      width: 100%;
      height: 100%;
      border-radius: 28px;
      position: absolute;
      overflow: hidden;
      left:0;top:0;


      & > .PictureParallax  {
        position: absolute;
        width: 100%;
      }
    }

    @media (max-width: 768px) {
      aspect-ratio: 380/312;

      .H2 {max-width: 230px;}
      .P {max-width: 322px;}
     .background > .PictureParallax{
        top: 15%;
      }
    }
  } 
`;