import React from 'react';

import classes from './Button.css';
import chooseColors from '../../../abstracts/chooseColors';

// clicked, text, color, state
const button = (props) => {
   const className = chooseColors(props.color, classes);
   let actived;

   if (props.state) {
      switch (props.color) {
         case 'red':
            actived = classes.redActive;
            break;
         case 'blue':
            actived = classes.blueActive;
            break;
         case 'purple':
            actived = classes.purpleActive;
            break;
         default:
            break;
      }
   }

   return (
      <button
         className={[className, actived].join(' ')}
         onClick={props.clicked}
         active={props.state}
      >
         <p className={classes.text}>{props.children}</p>
      </button>
   );
};

export default button;
