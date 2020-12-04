import React from 'react';

import classes from './DataDisplay.css';

// title, value, textAlign
const dataDisplay = (props) => {
   const className = props.textAlign === 'right' ? classes.right : classes.left;

   return (
      <div className={className}>
         <p className={classes.title}>{props.title}</p>
         <p className={classes.value}>{props.value}</p>
      </div>
   );
};

export default dataDisplay;
