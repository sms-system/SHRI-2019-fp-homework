import React, { useState } from 'react';
import colorNames from '../colorNames';
import ButtonWithOuterSlot from './ButtonWithOuterSlot';

export default BaseComponent => ({ children, setInnerColor, setOuterColor, ...props }) => {
  const [count, setCount] = useState(5);

  function fillCircles (color) {
    setInnerColor(color);
    setOuterColor(color);
  }

  function handleClick () {
    let nextCount = count - 1;

    if (nextCount === 0) {
      fillCircles(colorNames.ginger);
      nextCount = 5;
    }

    setCount(nextCount);
  }

  const ResultComponent = ButtonWithOuterSlot(BaseComponent);

  return <ResultComponent onClick={ handleClick } slot={ count } { ...props }>{ children }</ResultComponent>;
}