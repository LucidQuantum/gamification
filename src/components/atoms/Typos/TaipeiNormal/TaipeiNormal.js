import React from 'react';

import classes from './TaipeiNormal.css';
import chooseColors from '../../../abstracts/chooseColors';

// color
const taipeiNormal = (props) => {
   const className = chooseColors(props.color, classes);

   return <p className={className}>{props.children}</p>;
};

export default taipeiNormal;