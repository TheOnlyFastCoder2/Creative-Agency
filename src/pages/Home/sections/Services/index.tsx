import H3 from 'lib/ui/H3';
import H6 from 'lib/ui/H6';
import styled from 'styled-components';
import Card from './Card';
import SVGFire from 'assets/svg/SVGFire';
import SVGPen from 'assets/svg/SVGPen';
import SVGComputer from 'assets/svg/SVGComputer';
import SVGPhone from 'assets/svg/SVGPhone';
import SVGHome from 'assets/svg/SVGHome';
import SVGStatistical from 'assets/svg/SVGStatistical';

export default function () {
  return (
    <Services className="Section">
      <H6>Our Services</H6>
      <H3>The various services we provide to make your business more powerful</H3>
      <div className="container">
        <Card color="--primary-1" topic={"Ideate"} svg={<SVGFire/>}>
          We help you develop creative ideas 
          so that your business can grow more rapidly
        </Card>
        <Card color="--tertiary-3" topic={"Design"} svg={<SVGPen/>}>
          We provide services with the best 
          designs than our designer team for your business
        </Card>
        <Card color="--secondary-4" topic={"Web Development"} svg={<SVGComputer/>}>
          We help develop company websites to be more professional and attractive
        </Card>
        <Card color="--secondary-3" topic={"App Development"} svg={<SVGPhone/>}>
          We help develop company mobile apps to be more professional and attractive
        </Card>
        <Card color="--tertiary-1" topic={"Business Growth"} svg={<SVGHome/>}>
          We also provide services by providing input for your business growth
        </Card>
        <Card color="--primary-2" topic={"Digital marketing"} svg={<SVGStatistical/>}>
          We also help you market your products through an online marketplace
        </Card>
      </div>
    </Services>
  )
};

const Services = styled.div`
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 60px 32px;

    @media (max-width: 1124px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: unset;
    }
 
  }
`;