import SVGArrow from 'assets/svg/SVGArrow';
import SVGCNTEmail from 'assets/svg/SVGCNTEmail';
import SVGCNTHome from 'assets/svg/SVGCNTHome';
import SVGCNTMessage from 'assets/svg/SVGCNTMessage';
import SVGCNTPerson from 'assets/svg/SVGCNTPerson';
import SVGCNTPhone from 'assets/svg/SVGCNTPhone';
import SVGFacebook from 'assets/svg/SVGFacebook';
import SVGInstagram from 'assets/svg/SVGInstagram';
import SVGLinkedln from 'assets/svg/SVGLinkedln';
import SVGTwitter from 'assets/svg/SVGTwitter';

import Button from 'lib/ui/Button';
import H1 from 'lib/ui/H1';
import H7 from 'lib/ui/H7';
import P from 'lib/ui/P';
import styled from 'styled-components';

export default function () {
  return (
    <Contacts className='Section __noTopPadding'>
     <div className="container">
        <Left className="Left">
          <div className="text">
            <H1>Let’s Work Together!</H1>
            <P>
              I would like to meet with you to discuss 
              something and opportunities for collaboration.
            </P>
          </div>
          <ul>
            <li><SVGCNTEmail/> <P>info@yourdomain.com</P></li>
            <li><SVGCNTHome/> <P>Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki Jakarta</P></li>
            <li><SVGCNTPhone/> <P>+62 (0) 000 0000 00</P></li>
          </ul>
        </Left>
        <Right className="Right">
          <form action="">
           <div tabIndex={0} className="Input">
              <input required type="text" placeholder='Name'/>
              <SVGCNTPerson/>
           </div>
           <div tabIndex={0} className="Input">
              <input required type="text" placeholder='Email'/>
              <SVGCNTEmail/>
           </div>
           <div tabIndex={0} className="Input __textarea">
              <textarea className='__scroll' required  placeholder='Email'/>
              <SVGCNTMessage/>
           </div>
            <Button>
              Let’s Talk <SVGArrow/>
            </Button>
          </form>
        </Right>
     </div>
     <Networks>
        <a href="">
          <span><SVGFacebook/></span>
          <H7>Facebook</H7>
        </a>
        <a href="">
          <span><SVGInstagram/></span>
          <H7>Instagram</H7>
        </a>
        <a href="">
          <span><SVGLinkedln/></span>
          <H7>Linkedin</H7>
        </a>
        <a href="">
          <span><SVGTwitter/></span>
          <H7>Twitter</H7>
        </a>
      </Networks>
    </Contacts>
  )
};

const Networks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(212px, 100%) , 1fr));
  gap: 20px;
  justify-content: center;

  a {
    gap: 20px;
    aspect-ratio: 212/104;
    box-shadow: -8px 12px 50px rgb(236, 236, 236, 0.5);
    border-radius: 20px;
    color: rgb(var(--text-gray));
    text-transform: capitalize;

    &:hover {
      color: rgb(var(--text-dark));
      box-shadow: -20px 20px 60px rgb(var(--primary-1), 0.25);
    }
    
    &, span {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover {
      span {
        background-color: rgb(var(--primary-1));
        rect,path {
          fill: rgb(var(--white));
        }
      }
    }
    span {
      width: 40px;
      aspect-ratio: 2/2;
      border-radius: 50%;
      background-color: rgb(var(--white));
      box-shadow: inset 0 0 0 2px rgb(var(--primary-1));
      rect,path {
        fill: rgb(var(--primary-1));
      }
    }
  }
`;

const Left = styled.div`
  .text > .P {
    margin-top: 32px;
    max-width: 399px;
  }

  ul {
      gap: 32px; 
      display:flex;
      flex-direction: column;
      margin-top: 40px;

      li {
        display: flex;
        gap: 24px;
        align-items: center;
        max-width: 321px;
      }
    }
`;

const Right = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 40px;
    .Button {width: fit-content;}
  }

  .Input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 550px;
    border-radius: 12px;
    padding: 20px 28px;
    gap: 10px;
    outline: 2px solid rgb(var( --primary-1));

    input,textarea {
      font-size: clamp(14px, 0.7693rem + 0.3953vw, 18px);
      line-height: clamp(24px,1.2885rem + 0.7905vw, 32px);
      color: rgb(var(--text-dark));
      pointer-events: fill;
        &::placeholder {
        color: rgb(var(--grayscale-5));
      }
    }

    &.__textarea {
      height: min-content;
      height: 200px;
      align-items: flex-start;
      textarea {
        width: 100%;
        height: 100%;
      }
    }

    svg path { fill:  rgb(var(--grayscale-5)); }
    textarea:valid +  svg path ,input:valid +  svg path {
      fill:  rgb(var(--dark));
    } 

    &:focus, &:focus-visible, &:focus-within {
      fill:  rgb(var(--dark-5));
      svg path {
        fill:  rgb(var(--dark));
      }
    }
  }
`;

const Contacts = styled.div`
  padding-top: 80px;
  padding-bottom: calc(120px + 340px/2);
  .container {
    display:flex;
    gap: 40px;
    padding-bottom: 80px;
    .Right {width: min(100%, 550px)}
    .Left {width: min(100%, 525px);}
    @media (max-width: 768px) {
      flex-direction: column;
      /* justify-content: center; */
    }
  }
`;