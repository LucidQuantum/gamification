import React from 'react';

import classes from './PixelName.css';
import chooseColors from '../../../abstracts/chooseColors';

// color
const pixelName = (props) => {
   const className = chooseColors(props.color, classes);

   return (
      <div>
         <p className={className}>{props.children}</p>
      </div>
   );
};

export default pixelName;
