import styled from 'styled-components';
import SVGArrowTrigger from 'assets/svg/SVGArrowTrigger';
import P from 'lib/ui/P';

interface IProps {
  topic:string,
  children: string,
}

export default function (props: IProps) {
  return (
    <Details>
      <summary><span>{props.topic}</span> <SVGArrowTrigger/></summary>
      <P>{props.children}</P>
    </Details>
  )
};

const Details = styled.details`
  width: 100%;
  outline: 1px solid rgb(var(--footer-line), 0.2);
  border-radius: 8px;
  box-shadow: 0 0 30px rgb(var(--primary-1), 0.1);
  background-color: rgb(var(--white));
  &[open] {
    outline:1px solid rgb(var(--primary-1));
    .P { padding: 32px;}
    summary {  
      border-bottom: 1px solid rgb(var(--footer-line));
      svg {
        transform: unset;
      }
    }
  }
  summary {
    display:flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    padding: 32px;
    color: rgb(var(--text-dark));

    cursor: pointer;
    span {cursor:text;}
    svg{
      min-width: 24px;
      aspect-ratio: 2/2;
      transform: rotate(180deg);
    }
    &::marker {
      content: "";
    }
  }
`;