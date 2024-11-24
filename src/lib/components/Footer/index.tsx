import styled from 'styled-components';
import GetNotified from './GetNotified';
import SVGLogo from 'assets/svg/SVGLogo';
import IMGMap from 'assets/imgs/map.png';
import H7 from 'lib/ui/H7';
import H6 from 'lib/ui/H6';
import SVGFacebook from 'assets/svg/SVGFacebook';
import SVGInstagram from 'assets/svg/SVGInstagram';
import SVGLinkedln from 'assets/svg/SVGLinkedln';
import SVGTwitter from 'assets/svg/SVGTwitter';

export default function () {
  return (
    <Footer className='Section __noTopPadding'>
      <GetNotified/>
      <div className="container">
        <div className="wrapper">
          <div className="text">
            <SVGLogo/>
            <H7>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </H7>
          </div>
          <div className="office">
            <H6>Our Office</H6>
            <img src={IMGMap} alt="" loading='lazy'/>
          </div>
          <div className="contact">
            <H6>Contact</H6>
            <div className='contact_text'>
              <H7>Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki Jakarta</H7>
              <H7>info@yourdomain.com</H7>
              <H7>+62 (0) 000 0000 00</H7>
            </div>
          </div>
        </div>

        <div className="lowerPanel">
          <H7>© 2021 Creative Agency</H7>
          <ul>
            <li>Home</li>
            <li>Works</li>
            <li>About</li>
            <li>Pricing</li>
            <li>About</li>
          </ul>
          <div className="lowerPanel_networks">
            <a href=""><SVGFacebook/></a>
            <a href=""><SVGInstagram/></a>
            <a href=""><SVGLinkedln/></a>
            <a href=""><SVGTwitter/></a>
          </div>
        </div>
      </div>
    </Footer>
  )
};

const Footer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: calc(758px - 60px);
  background-color: rgb(var(--dark));

  padding-top: 170px;
  padding-bottom: 60px;
  margin-top: 170px;
  .GetNotified {
    top: -170px;
    position: absolute;
    width: calc(100% - var(--offset)*2);
  }

  & > .container {
 
    width: 100%;
    color:rgb(var(--white), 0.75);
    & > .wrapper {
      display:grid;
      grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
      margin-top: 80px;
      gap: 100px;
      padding-bottom: 44px;
      margin-bottom: 44px;
      border-bottom: 1px solid rgb(var(--white));
      
      .H6 {color: rgb(var(--white))}
      .text,.office,.contact {
        gap: 32px;
        display: flex;
        flex-direction: column;
      }

      .text > .H7{
        max-width: 360px;
      }

      .contact_text {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
    }
  }
  
  .lowerPanel {
    display:flex;
    gap: 44px;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    color:rgb(var(--white), 0.75);
    ul {
      display:flex;
      justify-content: center;
      gap: 10px 36px;
      flex-wrap: wrap;
      text-transform: capitalize;
    }

    .lowerPanel_networks {
      display: flex;
      gap: 10px;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        aspect-ratio: 2/2;
        border-radius: 50%;
        background-color: rgb(var(--primary-1));

        rect,path {
          fill: rgb(var(--white));
        }
      }
    }
  }
`;