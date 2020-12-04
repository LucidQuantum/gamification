import React from 'react';

import classes from './Window.css';
import PixelTitle from '../PixelTitle/PixelTitle';
import ClickableList from '../ClickableList/ClickableList';

// title
const window = (props) => (
   <div className={classes.window}>
      <p className={classes.title}>{props.title}</p>
      {props.children}
   </div>
);

export default window;
