import H3 from 'lib/ui/H3';
import H6 from 'lib/ui/H6';
import styled from 'styled-components';

import IMG_1 from 'assets/imgs/customesrs/amazon.png';
import IMG_2 from 'assets/imgs/customesrs/jeep.png';
import IMG_3 from 'assets/imgs/customesrs/careem.png';
import IMG_4 from 'assets/imgs/customesrs/hubspot.png';
import IMG_5 from 'assets/imgs/customesrs/jquery.png';
import IMG_6 from 'assets/imgs/customesrs/canon.png';
import IMG_7 from 'assets/imgs/customesrs/fedex.png';
import IMG_8 from 'assets/imgs/customesrs/bitcoin.png';
import IMG_9 from 'assets/imgs/customesrs/pirelli.png';
import IMG_10 from 'assets/imgs/customesrs/philips.png';


export default function () {
  return (
    <Customers className='Section'>
         <H6>Some of Our Great Customers</H6>
         <H3>Some of the companies we have worked with</H3>
         <div className="container">
          <img src={IMG_1} alt=""/>
          <img src={IMG_2} alt=""/>
          <img src={IMG_3} alt=""/>
          <img src={IMG_4} alt=""/>
          <img src={IMG_5} alt=""/>
          <img src={IMG_6} alt=""/>
          <img src={IMG_7} alt=""/>
          <img src={IMG_8} alt=""/>
          <img src={IMG_9} alt=""/>
          <img src={IMG_10} alt=""/>
         </div>
    </Customers>
  )
};

const Customers = styled.div`
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 60px;

    img {
      max-width: 150px;
      width: 100%;
      margin: 0 auto;
    }
  }
`;