import React from 'react';

export default BaseComponent => ({ slot, children, ...props }) => {
  return <BaseComponent {...props}>{slot} {children}</BaseComponent>;
}