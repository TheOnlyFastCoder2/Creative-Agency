import styled from 'styled-components';
import { Img } from 'lib/ui/Img';
import H3 from 'lib/ui/H3';
import H6 from 'lib/ui/H6';
import SVGPlay from 'assets/svg/SVGPlay';
import IMGBg from 'assets/imgs/DocumentationBG.webp';
import IMGVideo from 'assets/imgs/DocumentationVideo.webp';
import { useRef } from 'react';
import PictureParallax from 'lib/components/PictureParallax';

export default function () {
  const refDoc = useRef<HTMLDivElement>(null);
  return (

    <Documentation ref={refDoc} className='Section __nopadding'>
      <H6>Our Documentation</H6>
      <H3>See what our profile is like and how we work for your business</H3>
      <Img url={IMGBg}>
      <div className="container">
        <div className="video">
          <PictureParallax refParent={refDoc} range={30}>
              <img src={IMGVideo} alt='' loading="lazy"/>
          </PictureParallax>
          <button className='video_btn'><SVGPlay/></button>
        </div>
      </div>

      </Img>
    </Documentation>
  )
};

const Documentation = styled.div`

    .container {
      width: 100%;
      height: 100%;
  
      display: flex;
      align-items: center;
      padding: 0 var(--offset);
      padding-bottom: 15%;
      .video {
        position: relative;
        display: grid;
        place-content: center;
        width: 100%;
        aspect-ratio: 16/9;
        border-radius: 20px;
        background:radial-gradient(circle, rgb(var(--dark)) 20%, rgba(0,0,0,1) 100%);
        overflow: hidden;

        .PictureParallax {
          position: relative;
          width:110%;
          height: 110%;
          left:-5%;
          top: -2.5%;
          position: absolute;
          opacity: 0.5;
        }

        .video_btn {
          display: grid;
          place-content: center;
          width: 80px;
          aspect-ratio: 2/2;
          background-color: rgb(var(--white));
          border-radius: 50%;
          z-index: 2;
          transition: 0.2s ease;
          &:hover {
            transform: scale(1.2);
            background-color: rgb(var(--primary-1));
            outline: 10px solid rgb(var(--white));
            svg > path {
              fill: rgb(var(--white));
            }
          }
          svg {
            position: relative;
            right: -2px;
          }
        }
      }
    }
`;