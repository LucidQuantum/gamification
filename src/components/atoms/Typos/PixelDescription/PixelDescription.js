import React from 'react';

import classes from './PixelDescription.css';
import chooseColors from '../../../abstracts/chooseColors';

// color
const pixelDescription = (props) => {
   const className = chooseColors(props.color, classes);

   return (
      <div>
         <p className={className}>{props.children}</p>
      </div>
   );
};

export default pixelDescription;
