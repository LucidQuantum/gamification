import React from 'react';

import classes from './TaipeiLarge.css';
import chooseColors from '../../../abstracts/chooseColors';

// color
const taipeiLarge = (props) => {
   const className = chooseColors(props.color, classes);

   return <p className={className}>{props.children}</p>;
};

export default taipeiLarge;