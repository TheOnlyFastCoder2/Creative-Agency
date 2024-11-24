import SVGArrow from 'assets/svg/SVGArrow';
import Button from 'lib/ui/Button';
import DecorotiveContainer from 'lib/ui/DecorotiveContainer';
import H3 from 'lib/ui/H3';
import H7 from 'lib/ui/H7';
import styled from 'styled-components';

export default function () {
  return (
    <StartANewProject className='Section'>
      <DecorotiveContainer 
        color="--secondary-3"
        H3='Start a New Project' 
        H7='Are You Ready For'>
        <Button>
        Get Started <SVGArrow/>
        </Button>
      </DecorotiveContainer>
    </StartANewProject>
  )
};

const StartANewProject = styled.div`
    min-height: 750px;
    background-color: rgb(var(--white));
    .Button {
      display:flex;
      align-items: center;
      gap: 16px;
    }
`;