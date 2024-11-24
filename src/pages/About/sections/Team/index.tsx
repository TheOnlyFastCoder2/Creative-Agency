import H3 from 'lib/ui/H3';
import H6 from 'lib/ui/H6';
import styled from 'styled-components';
import Card from './Card';

import IMG_1 from 'assets/imgs/Team/1.png';
import IMG_2 from 'assets/imgs/Team/2.png';
import IMG_3 from 'assets/imgs/Team/3.png';
import IMG_4 from 'assets/imgs/Team/4.png';
import IMG_5 from 'assets/imgs/Team/5.png';
import IMG_6 from 'assets/imgs/Team/6.png';
import IMG_7 from 'assets/imgs/Team/7.png';
import IMG_8 from 'assets/imgs/Team/8.png';
import IMG_9 from 'assets/imgs/Team/9.png';
import IMG_10 from 'assets/imgs/Team/10.png';
import IMG_11 from 'assets/imgs/Team/11.png';
import IMG_12 from 'assets/imgs/Team/12.png';



export default function () {
  return (
    <Team className="Section">
        <H6>Our Great Team</H6>
        <H3>Meet our professional team who will help you</H3>
        <div className="container">
          <Card 
            src={IMG_1}
            name="Darlene Robertson" 
            profession='Product Designer' 
            color="--tertiary-3"/>
          <Card 
            src={IMG_2}
            name="Kristin Watson" 
            profession='Graphic Designer' 
            color="--primary-1"/>
          <Card 
            src={IMG_3}
            name="Ronald Richards" 
            profession='Networking Engineer' 
            color="--secondary-3"/>
          <Card 
            src={IMG_4}
            name="Guy Hawkins" 
            profession='Marketing Manager' 
            color="--secondary-4"/>
          <Card 
            src={IMG_5}
            name="Annette Black" 
            profession='Software Engineer' 
            color="--secondary-1"/>
          <Card 
            src={IMG_6}
            name="Marvin McKinney" 
            profession='President of Sales' 
            color="--secondary-2"/>
          <Card 
            src={IMG_7}
            name="Wade Warren" 
            profession='UI/UX Designer' 
            color="--tertiary-3"/>
          <Card 
            src={IMG_8}
            name="Theresa Webb" 
            profession='Visual Designer' 
            color="--secondary-2"/>
          <Card 
            src={IMG_9}
            name="Floyd Miles" 
            profession='Project Manager' 
            color="--primary-1"/>
          <Card 
            src={IMG_10}
            name="Kathryn Murphy" 
            profession='Front End Developer' 
            color="--secondary-3"/>
          <Card 
            src={IMG_11}
            name="Eleanor Pena" 
            profession='Techical Support Specialist' 
            color="--secondary-5"/>
          <Card 
            src={IMG_12}
            name="Arlene McCoy" 
            profession='Product Designer' 
            color="--tertiary-3"/>
        </div>
    </Team>
  )
};

const Team = styled.div`
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 352px), 1fr));
    gap: 20px;
  }
`;