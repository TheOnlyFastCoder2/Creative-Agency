import H5 from 'lib/ui/H5';
import P from 'lib/ui/P';
import styled from 'styled-components';

interface IProps {
  color: string,
  name: string,
  src: string
  profession: string
}

export default function ({profession, src, name, color}:IProps) {
  return (
    <Card color={color}>
      <div className="avatar">
        <img src={src} alt="" loading='lazy'/>
      </div>
      <div className="lowerPanel">
        <H5>{name}</H5>
        <P>{profession}</P>
      </div>
    </Card>
  )
};

const Card = styled.div`
  --radius: 12px;
  /* aspect-ratio:  352/488; */
  height: 488px;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  box-shadow: -10px 30px 70px rgb(219, 222, 225, 0.40);
  overflow: hidden;

  .avatar {
    height: 352px;
    display:flex;
    justify-content: center;
    align-items: flex-end;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    background-color: rgb(var(${({color}) => color}));
    overflow: hidden;
    img{transition: 0.2s ease;}

    &:hover, &:focus-visible {
      img {
        transform: scale(1.05);
        filter: drop-shadow(5px 5px 20px rgb(0, 0, 0, 0.25));
      }
    }
  }

  .lowerPanel {
    width: 100%;
    height: calc(100% - 352px);
    padding: 28px 10px 32px; 
    text-align: center;
    background-color: rgb(var(--white));
    .H5 {margin-bottom: 12px}
  }
`;