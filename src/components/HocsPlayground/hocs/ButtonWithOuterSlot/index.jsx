import React from 'react';

import cn from 'classnames';
import styles from './styles.module.css';

const cnButton = cn(styles.button);

export default BaseButton => ({ slot, children, ...props }) => {
  return <div className={ cnButton }>
    <div>{slot}</div>
    <BaseButton {...props}>{children}</BaseButton>
  </div>;
}