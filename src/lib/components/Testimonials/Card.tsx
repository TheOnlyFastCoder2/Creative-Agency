
import P from 'lib/ui/P';
import H6 from 'lib/ui/H6';
import { Img } from 'lib/ui/Img';
import styled from 'styled-components';
import SVGStar from 'assets/svg/SVGStar';

interface IProps {
  url: string,
  name: string,
  inc: string,
  children: string,
  qntyStars: number,
}

export default function (props: IProps) {
  return (
    <Card  className='Card'>
        <div className="wrapper">
          <div className="container">
            <Img url={props.url}/>
            <H6 >{props.name}</H6>
            <P>{props.inc}</P>
          </div>
          <P>{props.children}</P>
          <div className="stars">
              {Array.from({length:5}).map((_, i) => (
                <SVGStar key={i} className={i+1 <= props.qntyStars ? 'active' : ''}/>
              ))}
          </div>
        </div>
    </Card>
  )
};


const Card = styled.div`
  text-align: center;
  background-color: rgb(var(--white));
  box-shadow: -15px 20px 70px rgb(var(--primary-1), 0.2); 
  border-radius: 20px;
  width: fit-content;
  height: fit-content;
  padding: 0 32px;
  .P {  
    margin-left:auto;
    margin-right: auto;
  }
  .wrapper {
    top: -60px;
    position: relative;
    .P {
      max-width: 288px;
      margin-top: 24px;
      margin-bottom: 24px;
      color: rgb(var(--grayscale-4))
    }
  }
  
  .container { 
    .Img {  
      width: 120px;
      aspect-ratio: 2/2;
      border-radius: 50%;
      box-shadow: 0 20px 30px rgb(var(--primary-1), 0.2);
      background-color: rgb(var(--white));
      margin: 0 auto;
    }

    .H6 {
      margin-top: 30px;
      margin-bottom: 8px;
    }

    .P {
      font-size: 16px;
      line-height: 24px;
      color: rgb(var(--grayscale-5))
    }
  }

  .stars {
    display:flex;
    justify-content: center;
    gap: 9.5px;
    svg {
      path {fill: rgb(var(--primary-1), 0.2);}
      &.active path {
        fill: rgb(var(--primary-1));
      }
    }
  }

  &:hover, &:focus-visible {
    background-color: rgb(var(--primary-1));
    .container {
      .H6 {color: rgb(var(--white))}
      .P {color: rgb(var(--white), 0.3)}
    }
    .wrapper {
      & > .P {color: rgb(var(--white),0.8)}
      .stars svg {
        path {fill: rgb(var(--white), 0.2);}
        &.active path {
          fill: rgb(var(--white));
        }
      }
    }
  }
`;