import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface IProps {
  children: JSX.Element[]|JSX.Element,
  range:number,
  refParent: React.RefObject<HTMLDivElement>
}

export default function ({refParent, range, children}:IProps) {
  const refContainer = useRef<HTMLDivElement>(null)
  const [ pos, setPos] = useState<[number,number]>([0,0]);

  function listenerMouse(ev:MouseEvent) {
   
    if(refContainer.current && refParent.current) {
      if(refParent.current.offsetTop <= scrollY+180 && scrollY+refParent.current.scrollHeight >= scrollY) {
        setPos([(ev.clientX / range), -(ev.clientY / range)]);
      } else {
        if(!(pos[0] && pos[1])) {
          setPos([0, 0]);
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener('mousemove',listenerMouse);
    return () => {
      window.removeEventListener('mousemove', listenerMouse)
    }
  }, []);

  return (
    <PictureParallax ref={refContainer} className="PictureParallax">
    {
      !('length' in children)
      ? React.createElement(children.type, {
        ...children.props,
        className: `${children.props.className} ${!(pos[0] && pos[1]) ? '' : 'active'}`,
        style: {
          left: pos[0]+'px',
          top: pos[1]+'px'
        }
      })
      : (children as JSX.Element[]).map((item,  i) => {
          if(typeof item.type === 'string') {
            return React.createElement(item.type, {
              ...item.props,
              key: i,
              className: `${item.props.className} ${!(pos[0] && pos[1]) ? '' : 'active'}`,
              style: {
                left:pos[0]+'px',
                top: pos[1]+'px'
              }
            })
          }
          return item
        })
    }
    </PictureParallax>
  )
}

const PictureParallax = styled.div`
  display:flex;
  justify-content:center;
  position: relative;
  & > * {
    top:0;
    position: absolute;
    width: 100%;
  }
`