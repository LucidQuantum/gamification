import React from 'react';
import { CSSTransition } from 'react-transition-group';

import classes from './DarkBackground.css';

// in
const DarkBackground = (props) => (
   <CSSTransition
      in={props.in}
      timeout={500}
      classNames={{ ...classes }}
      unmountOnExit
   >
      <div className={classes.background}>
         <div className={classes.wrapper}>{props.children}</div>
      </div>
   </CSSTransition>
);

export default DarkBackground;
