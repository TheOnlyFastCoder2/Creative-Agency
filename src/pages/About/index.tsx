import styled from 'styled-components';
import Team from './sections/Team';
import WorkingSpace from 'lib/components/WorkingSpace';
import OurMoment from './sections/OurMoment';
import StartAnewProject from "lib/components/StartAnewProject";
import Hero from './sections/Hero';

export default function () {
  return (
    <About>
      <Hero/>
      <Team/>
      <OurMoment/>
      <WorkingSpace/>
      <StartAnewProject/>
    </About>
  )
};

const About = styled.div`
  /* background-color: rgb(248, 248, 249); */
`;