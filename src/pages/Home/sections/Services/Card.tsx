import SVGArrow from 'assets/svg/SVGArrow';
import H6 from 'lib/ui/H6';
import P from 'lib/ui/P';
import styled from 'styled-components';

interface IProps {
  color: string,
  svg: JSX.Element,
  topic: string
  children: string,
}

export default function (props: IProps) {
  return (
    <Card  color={props.color} className='Card'>
        <div className="Card_icon">
          {props.svg}
        </div>
        <div className="Card_text">
          <H6>{props.topic}</H6>
          <P>{props.children}</P>
        </div>
        <button className='Card_btn'>
          <SVGArrow/>
        </button>
    </Card>
  )
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 44px 44px 56px ;
  text-align: center;
  background-color: rgb(var(--white));
  box-shadow: -10px 30px 70px rgb(219, 222, 225, 0.5); 
  border-radius: 20px;

  &:hover {
    .Card_text {
      .P,.H6 {color:  rgb(var(--white));}
    }

    background-color: rgb(var(--primary-1));
    box-shadow: -10px 30px 70px rgb(var(--primary-1), 0.5); 

    &:first-child .Card_icon path {
      fill: rgb(var(${(props) => props.color }));
    } 

    .Card_icon {
      background-color: rgb(var(--white));
      box-shadow: 0 15px 30px #372DBC;
      svg {
        rect,path {
          fill: rgb(var(${(props) => props.color }));
        }
      }
    }
  }

  &:first-child .Card_icon path {
    fill: rgb(var(--white))
  } 

  .Card_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 97px;
    aspect-ratio: 2/2;
    background-color: rgb(var(${(props) => props.color }));
    box-shadow: -10px 30px 70px rgb(var(${(props) => props.color }), 0.5); 
    border-radius: 50%;

    svg {
      rect {
        fill: rgb(var(--white))
      }
    }

  }

  .Card_text {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 44px 0;
    max-width: 292px;
  }

  .Card_btn {
    width: 45px;
    aspect-ratio: 2/2;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(var(--grayscale-6));
    transition: var(--transition);
    border-radius: 50%;
    &:hover {
      transform: scale(1.2);
    }
    svg {
      width: 15px;
      path,rect {
        stroke: rgb(var(--primary-1));
      }
    }
  }
`;