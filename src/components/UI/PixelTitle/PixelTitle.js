import React from 'react';
import chooseColors from '../../../abstracts/chooseColors';
import classes from './PixelTitle.css';

// text, color
const pixelTitle = (props) => {
   const className = chooseColors(props.color, classes);
   console.log(className);

   return (
      <div className={classes.container}>
         <p className={className}>{props.text}</p>
         {props.children}
      </div>
   );
};

export default pixelTitle;
