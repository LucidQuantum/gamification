import React from 'react';

import classes from './DataDisplay.css';  

const dataDisplay = (props) => (
   <div className={classes.DataDisplay}>
      <p className={classes.title}>{props.title}</p>
      <p className={classes.value}>{props.value}</p>
   </div>
);

export default dataDisplay;
