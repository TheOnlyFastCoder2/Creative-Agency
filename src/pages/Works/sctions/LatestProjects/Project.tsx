import PictureParallax from 'lib/components/PictureParallax';
import H3 from 'lib/ui/H3';
import H5 from 'lib/ui/H5';
import { useRef } from 'react';
import styled from 'styled-components';

interface IProps {
  H3:string,
  H5:string,
  url: string,
  color: string
}

export default function (props:IProps) {
  const refProject = useRef<HTMLDivElement>(null);

  return (
    <Project color={props.color}  ref={refProject} className='Project'>
      <div className="left">
        <H3>{props.H3}</H3>
        <H5>{props.H5}</H5>
      </div>
      <div className="right">
        <img src={props.url} alt=""/>
      </div>
    </Project>
  )
};

const Project = styled.div`
  display:flex;
  width: 100%;
  aspect-ratio: 112/45;
  gap: clamp(44px,2.2742rem + 1.7787vw ,62px);
  background-color: rgb(var(${({color}) => color}));
  border-radius: 28px;
  padding-top: 44px;
  padding-left:clamp(24px, 0.5484rem + 3.5573vw, 60px);


  .left {
    align-content: center;
    color: rgb(var(--white));
    max-width: 300px;
    height: 100%;
   
    .H3 {
      padding-bottom: 32px;
      border-bottom: 4px solid rgb(var(--white));
      margin-bottom: 32px;
    }
  }

  .right {
    display: flex;
    align-items: flex-end;
    width: 100%;
    height:100%;
    & > img {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    /* min-height: 121px; */
    aspect-ratio: unset;
    .left {
      min-width: 100%;
      text-align: center;
      height: fit-content;
      padding-right:clamp(24px, 0.5484rem + 3.5573vw, 60px);
      .H5 {
        font-weight:200;
      }
    }
  }
`;