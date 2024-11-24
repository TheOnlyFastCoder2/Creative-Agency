import { Img } from 'lib/ui/Img';
import P from 'lib/ui/P';
import styled from 'styled-components';

interface IProps {
  images: Array<[string,string]>
}

export default function ({images}:IProps) {
  return (
    <Gallary className='Gallary'>
      {images.map(([url, text], i) => (
        <Img key={i} url={url}><P>{text}</P></Img>
      ))}
    </Gallary>
  )
};

const Gallary = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  .Img {
    display:flex;
    flex-direction: column;
    justify-content: end;
    padding-left: 26px;
    padding-bottom: 18px;
    .P {
      color: rgb(var(--white));
    }

    position:relative;
    &:nth-child(1) {
      height:400px;
    } 
    &:nth-child(4) {
      height: 550px;
    } 

    &:nth-child(2) {
      height: 530px;
    } 
    &:nth-child(5) {
      height: 420px;
    }

    &:nth-child(3) {
      height: 450px;
    } 
    &:nth-child(6) {
      height: 500px;
      }  
  }

  @media (min-width: 1024px) {
    .Img {
      &:nth-child(4) {
        top: -130px;
      } 
      &:nth-child(6) {
        top: -80px;
      }  
    }
  }
  
  @media (768px <= width <= 1024px) {
    grid-template-columns: repeat(2, 1fr);
    .Img {
      &:nth-child(3) {
        top: -130px;
      } 
      &:nth-child(5) {
        top: -230px;
      }
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    .Img {
      max-width: 380px;
      width: 100%;
      margin: 0 auto;
    }
  }
`;