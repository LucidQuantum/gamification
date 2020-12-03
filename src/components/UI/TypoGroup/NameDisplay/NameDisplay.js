import React from 'react';

import classes from './NameDisplay.css';

const nameDisplay = (props) => (
   <div className={classes.NameDisplay}>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.description}>{props.description}</p>
   </div>
);

export default nameDisplay;
