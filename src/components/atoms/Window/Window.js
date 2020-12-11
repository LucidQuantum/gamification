import React from 'react';
import { CSSTransition } from 'react-transition-group';

import classes from './Window.css';

// in, children
const window = (props) => (
   <CSSTransition
      in={props.in}
      timeout={500}
      classNames={{ ...classes }}
      unmountOnExit
   >
      <div className={classes.window}>{props.children}</div>
   </CSSTransition>
);

export default window;
