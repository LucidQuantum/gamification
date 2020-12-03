import React from 'react';

import classes from './Button.css';
import chooseColors from '../../../abstracts/chooseColors';

// clicked, text, color

const button = (props) => {
   let className = chooseColors(props.color, classes);

   return (
      <button className={className}>
         <p className={classes.text}>{props.children}</p>
      </button>
   );
};

export default button;
