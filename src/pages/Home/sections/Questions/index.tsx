import styled from 'styled-components';
import IMGBg from 'assets/imgs/QuestionBG.webp';
import H6 from 'lib/ui/H6';
import H3 from 'lib/ui/H3';
import Details from './Details';
import { Img } from 'lib/ui/Img';
import PictureParallax from 'lib/components/PictureParallax';
import { useRef } from 'react';



export default function () {
  const refContainer = useRef<HTMLDivElement>(null);
  return (
    <Questions className='Section' ref={refContainer}>
      <H6>Frequently Ask Question</H6>
      <H3>Some of our frequently asked questions</H3>
     
      <div className="container">
        <Details topic='What are the services provided to customers?'>
          Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, 
          to help customers market their products online through the marketplace.
        </Details>
        <Details topic='How can I submit a proposal for cooperation?'>
          Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, 
          to help customers market their products online through the marketplace.
        </Details>
        <Details topic='I come from a faraway place, can collaboration be done full time online through several meeting applications?'>
          Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, 
          to help customers market their products online through the marketplace.
        </Details>
        <Details topic='How do I get the payment complete?'>
          Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, 
          to help customers market their products online through the marketplace.
        </Details>
        <Details topic='How long can the collaboration last?'>
          Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, 
          to help customers market their products online through the marketplace.
        </Details>
      </div>
      <PictureParallax refParent={refContainer} range={-30} >
        <Img url={IMGBg}/>
      </PictureParallax>
    </Questions>
  )
};

const Questions = styled.div`
  position: relative;
  padding-bottom: 65px;
  width: 100%;
  min-height: 1218px;
  overflow: hidden;
  .PictureParallax {
    top:0;
    left:0;
    width: 100%;
    height: 100%;

    position: absolute;
    overflow: hidden;
    .Img {
      
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top;
      width: 105%;
      height: 105%;
      filter: drop-shadow(5px 5px 20px rgb(var(--dark), 0.15));
    }

    
    z-index: -1;
  }
  .container {
    display:flex;
    flex-direction: column;
    gap: 32px;
    z-index: 990;
  }
`;