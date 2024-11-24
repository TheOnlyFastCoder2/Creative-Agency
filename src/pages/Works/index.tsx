import Customers from 'lib/components/Customers';
import StartAnewProject from 'lib/components/StartAnewProject';
import Testimonials from "lib/components/Testimonials";
import styled from 'styled-components';
import Hero from './sctions/Hero';
import LatestProjects from './sctions/LatestProjects';



export default function () {
  return (
    <Works>
      <Hero/>
      <Customers/>
      <LatestProjects/>
      <Testimonials/>
      <StartAnewProject/>
      
    </Works>
  )
};

const Works = styled.div`
  
`;