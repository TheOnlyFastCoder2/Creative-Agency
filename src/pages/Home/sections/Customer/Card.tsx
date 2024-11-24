
import H2 from 'lib/ui/H2';
import P from 'lib/ui/P';
import styled from 'styled-components';

interface IProps {
  color: string,
  topic: string
  children: string,
}

export default function (props: IProps) {
  return (
    <Card  color={props.color} className='Card'>
        <H2>{props.topic}</H2>
        <P>{props.children}</P>
    </Card>
  )
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 28px;
  text-align: center;
  background-color: rgb(var(--white));
  box-shadow: -10px 30px 70px rgb(219, 222, 225, 0.5); 
  border-radius: 20px;

  &:hover {
    .P,.H2 {
      color: rgb(var(--white));
    }
    background-color: rgb(var(--primary-1));
    box-shadow: -10px 30px 70px rgb(var(--primary-1), 0.5); 
  }

  .P,.H2 {max-width: 214px;}

  .H2 {
    color: rgb(var(${(props) => props.color }));
    text-shadow: -10px 30px 70px rgb(var(${(props) => props.color }), 0.5); 
  }
`;