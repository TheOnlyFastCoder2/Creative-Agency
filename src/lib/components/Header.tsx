import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "lib/ui/Button";
import SVGMenu from "assets/svg/SVGMenu";
import SVGClose from "assets/svg/SVGClose";
import SVGLogo from "assets/svg/SVGLogo";
import IMGBackground from "assets/imgs/MenuBackground.png";

export default function () {
  const {pathname} = useLocation();
  const  [isShowed, setStatus] = useState(false);
  
  function toOpen() {
    setStatus(true);
  }
  
  function isCurrPage(page:string) {
    return page === pathname ? 'active' : ''; 
  }

  function toClose() {
    setStatus(false);
  }

  return (
    <Header >
       <div className={`wrapper ${isShowed ? 'active' : ''}`}>
          <SVGLogo/>
          {
            isShowed 
            ? <button onClick={toClose} className="__close"><SVGClose/></button>
            : <button onClick={toOpen} className="__open"><SVGMenu/></button>
          }
          
          <nav>
            <ul>
              <li className={isCurrPage("/")}><Link to='/'>Home</Link></li>
              <li className={isCurrPage("/Works")}><Link to='/Works'>Works</Link></li>
              <li className={isCurrPage("/About")}><Link to='/About'>About</Link></li>
            </ul>
            <Button><Link to='/Contacts'>Contact us</Link></Button>
          </nav>
        </div>
    </Header>
  )
}

const Header = styled.div`
  position:sticky;
  top:0;
  width: 100%;
  height: 120px;
  padding: 0 var(--offset);
  background-color: rgb(var(--white));
  z-index: 99;

  .wrapper {
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    z-index: 99;
  }

  button.__close, button.__open {
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
    width: 40px;
    aspect-ratio: 2/2;
  }

  nav {
    display: flex;
    width: 100%;
    background-color: rgb(var(--white));

    .Button {
      margin-left: auto;
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: auto;
      gap: 81.5px;

      li {
        &.active a , &:hover a {
          color: rgb(var(--primary-1));
        }
      }
      
      li a {
        color: rgb(var(--text-gray));
        font-size: 20px;
        line-height: 28px;
        font-weight: 600;
        transition: color var(--transition);
      }
    }
  }

  @media (max-width: 1024px) {
    height: 96px;
  }

  @media (max-width: 768px) {
    
    button.__close, button.__open {
      display: flex;
    }
    & > .wrapper.active {
      box-shadow: inset  0 -1px  rgb(var(--light-line));
      nav {
        display: flex;
      }
    }

    nav {
      display: none;
      position: absolute;
      top:100% ;left:0;
      height: calc(100vh - 98px);
      width:100%;
      flex-direction: column;
      justify-content: space-between;
      padding: 48px 40px var(--offset);

      background-image: url(${IMGBackground});
      background-size: cover;
    
      .Button {
        width: 100%;
      }

      ul {
          flex-direction: column;
          gap: 32px;
          margin: unset;
          li a {
            font-size: 32px;
            line-height: 48px;
          }
        }
      }
  }
`;