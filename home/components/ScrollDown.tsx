import React from 'react';
import styled, {keyframes} from "styled-components";

const animation = keyframes`
  0%,
  100%,
  20%,
  50%,
  80% {
    transform: translateY(0);
  }
    
  40% {
    transform: translateY(-10px);
  }
  
  60% {
    transform: translateY(-5px);
  }
`

const Cmp = styled.a`
  cursor: pointer;
  opacity: 1;
  transition: all .5s ease-in 3s;
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -16px;
  display: block;
  width: 32px;
  height: 32px;
  border: 2px solid rgba(0,0,0,0.85);
  background-size: 14px auto;
  border-radius: 50%;
  z-index: 2;
  transform: scale(1);
  animation: ${animation} 2s linear infinite;

  &:before {
    position: absolute;
    top: calc(50% - 8px);
    left: calc(50% - 6px);
    transform: rotate(-45deg);
    display: block;
    width: 11px;
    height: 11px;
    content: "";
    border: 2px solid rgba(0,0,0,0.85);
    border-width: 0px 0 2px 2px;
  }
`

const ScrollDown = ({ href }: { href: string }) => {
  return (
    <Cmp href={href}/>
  );
}

export default ScrollDown;