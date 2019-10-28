import React, { useState } from 'react';
import colorNames from '../colorNames';
import ButtonWithInnerSlot from './ButtonWithInnerSlot';

const isEven = (x) => !(x % 2);

export default BaseComponent => ({ children, setInnerColor, setOuterColor, ...props }) => {
  const [count, setCount] = useState(0);

  function fillCircles (color) {
    setInnerColor(color);
    setOuterColor(color);
  }

  function handleClick () {
    const nextCount = count + 1;
    fillCircles(isEven(nextCount)? colorNames.gray : colorNames.green);
    setCount(nextCount);
  }

  const ResultComponent = ButtonWithInnerSlot(BaseComponent);

  return <ResultComponent onClick={ handleClick } slot={ count } { ...props }>{ children }</ResultComponent>;
}