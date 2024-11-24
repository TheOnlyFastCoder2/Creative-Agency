import H3 from 'lib/ui/H3';
import H6 from 'lib/ui/H6';
import styled from 'styled-components';
import Project from './Project';
import IMG_1 from 'assets/imgs/LatestProjects/mockup_1.png';
import IMG_2 from 'assets/imgs/LatestProjects/mockup_2.png';
import IMG_3 from 'assets/imgs/LatestProjects/mockup_3.png';
import IMG_4 from 'assets/imgs/LatestProjects/mockup_4.png';
import IMG_5 from 'assets/imgs/LatestProjects/mockup_5.png';
import IMG_6 from 'assets/imgs/LatestProjects/mockup_6.png';


export default function () {
  return (
    <LatestProjects className="Section">
      <H6>Our Latest Project</H6>
      <H3>This is the last variety of projects we have worked on</H3>
      <div className="container">
        <Project
          url={IMG_1}
          H3="M’Course"
          H5='Online learning application course'
          color="--primary-1"
        />
         <Project
          url={IMG_2}
          H3="BurgerQ"
          H5='Applications for buying and selling fast food online'
          color="--secondary-3"
        />
        <Project
          url={IMG_3}
          H3="POPcorn"
          H5='Online marketplace for buying and selling popcorn'
          color="--tertiary-3"
        />
         <Project
          url={IMG_4}
          H3="CoffeeJoy"
          H5='Application for buying and selling coffee online'
          color="--tertiary-1"
        />
        <Project
          url={IMG_5}
          H3="Alpaca"
          H5='Fundraising and caring for alpacas'
          color="--dark"
        />
        <Project
          url={IMG_6}
          H3="Shopipiy"
          H5='Online marketplace to sell and buy clothes'
          color="--secondary-5"
        />
      </div>
    </LatestProjects>
  )
};

const LatestProjects = styled.div`
  & > .H3 {
    max-width: 927px;
  }
  .container {
    display:flex;
    flex-direction: column;
    gap: 60px;

    .Project:nth-child(1) img {
      aspect-ratio: 799/450;
    }

    .Project:nth-child(2) img,
    .Project:nth-child(4) img {
      aspect-ratio: 698/450;
    }

    .Project:nth-child(3) img {
      aspect-ratio: 800/450;
    }
  }

`;