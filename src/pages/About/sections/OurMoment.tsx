import Gallary from 'lib/components/Gallary';
import H3 from 'lib/ui/H3';
import H6 from 'lib/ui/H6';
import styled from 'styled-components';

import IMG_1 from 'assets/imgs/OurMoment/1.png';
import IMG_2 from 'assets/imgs/OurMoment/2.png';
import IMG_3 from 'assets/imgs/OurMoment/3.png';
import IMG_4 from 'assets/imgs/OurMoment/4.png';
import IMG_5 from 'assets/imgs/OurMoment/5.png';
import IMG_6 from 'assets/imgs/OurMoment/6.png';
import IMG_7 from 'assets/imgs/OurMoment/7.png';
import IMG_8 from 'assets/imgs/OurMoment/8.png';
import IMG_9 from 'assets/imgs/OurMoment/9.png';
import IMG_10 from 'assets/imgs/OurMoment/10.png';
import IMG_11 from 'assets/imgs/OurMoment/11.png';
import IMG_12 from 'assets/imgs/OurMoment/12.png';


export default function () {
  return (
    <OurMoment className='Section'>
      <H6>Our Moment</H6>
      <H3>Our togetherness in working in the office</H3>
      <div className="container">
        <Gallary images={[
          [IMG_1,""],
          [IMG_2,""],
          [IMG_3,""],
          [IMG_4,""],
          [IMG_5,""],
          [IMG_6,""],
        ]}/>
        <Gallary images={[
          [IMG_7, ""],
          [IMG_8, ""],
          [IMG_9, ""],
          [IMG_10,""],
          [IMG_11,""],
          [IMG_12,""],
        ]}/>
      </div>
    </OurMoment>
  )
};

const OurMoment = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;