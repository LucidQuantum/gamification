import React from 'react';
import { CSSTransition } from 'react-transition-group';
import classes from './WindowAnimation.css';

// in
const WindowAnimation = (props) => (
   <CSSTransition
      in={props.in}
      timeout={500}
      classNames={{ ...classes }}
      unmountOnExit
   >
      {props.children}
   </CSSTransition>
);

export default WindowAnimation;
