import React from 'react';

import classes from './TaipeiNormal.css';
import chooseColors from '../../../abstracts/chooseColors';

// color
const taipeiNormal = (props) => {
   const className = chooseColors(props.color, classes);

   return (
      <div>
         <p className={className}>{props.children}</p>
      </div>
   );
};

export default taipeiNormal;
