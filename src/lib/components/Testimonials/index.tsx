import H3 from 'lib/ui/H3';
import H6 from 'lib/ui/H6';
import styled from 'styled-components';
import Card from './Card';

import IMG_1 from 'assets/imgs/Testimonals/1.png';
import IMG_2 from 'assets/imgs/Testimonals/2.png';
import IMG_3 from 'assets/imgs/Testimonals/3.png';
import IMG_4 from 'assets/imgs/Testimonals/4.png';
import IMG_5 from 'assets/imgs/Testimonals/5.png';
import IMG_6 from 'assets/imgs/Testimonals/6.png';

export default function () {
  return (
    <Testimonals className='Section'>
        <H6>Testimonials</H6>
        <H3>Some testimonials from our customers</H3>
        <div className="container">
            <Card url={IMG_1} qntyStars={5} name='Ronald Richards' inc='Google'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </Card>
            <Card url={IMG_2} qntyStars={3} name='Guy Hawkins' inc='Paypal'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </Card>
            <Card url={IMG_3} qntyStars={3} name='Kristin Watson' inc='Microsoft'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </Card>
            <Card url={IMG_4} qntyStars={5} name='Robert Fox' inc='Facebook'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </Card>
            <Card url={IMG_5} qntyStars={5} name='Savannah Nguyen' inc='Twitter'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </Card>
            <Card url={IMG_6} qntyStars={5} name='Courtney Henry' inc='Apple'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </Card>
        </div>
    </Testimonals>
  )
};

const Testimonals = styled.div`
  & > .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(325px, 100%), 1fr));
    gap:calc(32px + 60px) 32px;
    margin-top: 120px;

    .Card {
      min-width: 100%;
      margin: 0 auto;
    }
  }
`;