import styled from "styled-components";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Documentation from "./sections/Documentation";
import Customer from "./sections/Customer";
import WorkingSpace from "../../lib/components/WorkingSpace";
import Customers from 'lib/components/Customers';
import Questions from "./sections/Questions";
import Testimonials from "lib/components/Testimonials";
import StartAnewProject from "lib/components/StartAnewProject";
import Quotes from "./sections/Quotes";

export default function () {
  return (
    <Home>
      <Hero/>
      <Services/>
      <Documentation/>
      <Customer/>
      <WorkingSpace/>
      <Customers/>
      <Quotes/>
      <Questions/>
      <Testimonials/>
      <StartAnewProject/>
    </Home>
  )
}

const Home = styled.div`
`;
