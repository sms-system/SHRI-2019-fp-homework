import React, { useState } from 'react';
import colorNames from '../colorNames';
import RotatingButton from './RotatingButton';

const randomItem = (arr) => arr[ Math.floor(Math.random() * arr.length) ];

export default BaseComponent => ({ children, setInnerColor, setOuterColor, ...props }) => {
  const [degree, setDegree] = useState(0);

  function fillCircles (color) {
    setInnerColor(color);
    setOuterColor(color);
  }

  function handleClick () {
    let nextDegree = degree + 30;

    if (nextDegree >= 360) {
      fillCircles(colorNames[ randomItem(Object.keys(colorNames)) ])
      nextDegree = nextDegree % 360;
    }

    setDegree(nextDegree);
  }

  const ResultComponent = RotatingButton(BaseComponent);

  return <ResultComponent onClick={ handleClick } degree={ -degree } { ...props }>{ children }</ResultComponent>;
}