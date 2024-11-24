import styled from 'styled-components';
import SVGQuote from 'assets/svg/SVGQuote';
import H6 from 'lib/ui/H6';
import H4 from 'lib/ui/H4';

interface IProps {
  H4: string,
  H6_1: string,
  H6_2: string,
}
export default function (props: IProps) {
  return (
    <Card>
        <SVGQuote/>
        <H4>{props.H4}</H4>
        <H6>{props.H6_1}</H6>
        <H6>{props.H6_2}</H6>
    </Card>
  )
};

const Card = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(var(--white));
    text-align: center;

    .H4 {
      margin-bottom: 44px;
      margin-top: 44px;
    }

    .H6:nth-child(3) {
      margin-bottom: 8px;
    }
`;