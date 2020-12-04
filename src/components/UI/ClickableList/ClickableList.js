import React from 'react';

import classes from './ClickableList.css';

// clicked, text
const clickableList = (props) => (
   <li className={classes.item} onClick={props.clicked}>
      {`·${props.text}`}
      <span className={classes.use}>使用</span>
   </li>
);

export default clickableList;
