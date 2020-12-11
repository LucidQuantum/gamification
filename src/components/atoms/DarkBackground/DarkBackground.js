import React from 'react';
import { CSSTransition } from 'react-transition-group';

import classes from './DarkBackground.css';

// in, children
const DarkBackground = (props) => (
   <CSSTransition
      in={props.in}
      timeout={500}
      classNames={{ ...classes }}
      unmountOnExit
   >
      <div className={classes.background}>{props.children}</div>
   </CSSTransition>
);

export default DarkBackground;
