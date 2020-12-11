import React from 'react';

import classes from './TaipeiLarge.css';
import chooseColors from '../../../abstracts/chooseColors';

// color
const taipeiLarge = (props) => {
   const className = chooseColors(props.color, classes);

   return (
      <div>
         <p className={className}>{props.children}</p>
      </div>
   );
};

export default taipeiLarge;