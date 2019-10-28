import React from 'react';

import cn from 'classnames';
import styles from './styles.module.css';

const cnButton = cn(styles.button);

export default BaseButton => ({ slot, degree, children, ...props }) => {
  return <div className={ cnButton } style={{ transform: `rotate(${degree}deg)` }}>
    <BaseButton {...props}>{children}</BaseButton>
  </div>;
}