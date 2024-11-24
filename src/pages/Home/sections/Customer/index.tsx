import styled from 'styled-components';
import Card from './Card';
import P from 'lib/ui/P';
import H2 from 'lib/ui/H2';
import SVGMarcheck from 'assets/svg/SVGMark';

export default function () {
  return (
    <Customer className="Section">
      <div className="left">
        <div className="container">
          <Card color="--primary-1" topic="70K+">
            We have more than customers
          </Card>
          <Card color="--tertiary-3" topic="10М+">
            People who are helped because of our hard work
          </Card>
        </div>
        <div className="container">
          <Card color="--primary-2" topic="100+">
            Projects we have
            completed
          </Card>
    
          <Card color="--secondary-4" topic="200+">
              Support from world-renowned companies
          </Card>
        </div>
      </div>
      <div className="right">
        <H2>Customer satisfaction is our first priority</H2>
        <P>
          We serve many customers, ranging from small businesses, 
          medium entrepreneurs, 
          to world-renowned companies. 
          Their satisfaction is our pleasure. 
          We strive to provide the best service by:
        </P>
        <ul>
          <li><SVGMarcheck/><P>Provide idea support from our creative team</P></li>
          <li><SVGMarcheck/><P>Provide attractive and professional design services</P></li>
          <li><SVGMarcheck/><P>Support for service 24 hours a week</P></li>
          <li><SVGMarcheck/><P>Helping our customers to grow their business</P></li>
          <li><SVGMarcheck/><P>Provide support to market products through online marketplace </P></li>
        </ul>
      </div>
    </Customer>
  )
};

const Customer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #F9F9FD;
  gap: clamp(53px, 2.5988rem + 2.668vw, 80px);
  --p: clamp(80px, 4.4713rem + 1.9763vw, 100px);
  padding-top: var(--p);
  padding-bottom: var(--p);
  
  .left {

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(21px, 0.8103rem + 1.8775vw,40px);
    max-width: 580px;
    .container {
      display:flex;
      flex-direction: column;
      gap: clamp(21px, 0.8103rem + 1.8775vw,40px);
      &:first-child  {
        margin-top: 56px;
      }
    }
    .Card {
      min-width: 232px;
      max-width: clamp(232px, 13.4956rem + 3.7549vw, 270px) ;
      height: clamp(239px, 13.3251rem + 6.0277vw, 300px);
    }
  }
  .right {
    display:flex;
    flex-direction: column;
    gap: 35px;
    max-width: 460px;

    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;
      li {
        display: flex;
        align-items: center;
        gap: 24px;
        svg {
          min-width: 24px;
          min-height: 24px;
        }
      }
    }
  }

  @media (max-width: 1024px) {
  
    flex-direction: column;
    align-items: center;
    .left .container
    {
      &:first-child {
        margin-top: unset;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    .left  {
      grid-template-columns: 1fr;

      .Card {
        max-width: unset;
        height:188px;
        .H2 {font-size: 42px;}
        .P{ max-width: unset;}
      }
    }
  }


`;