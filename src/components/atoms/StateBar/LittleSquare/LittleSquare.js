import React from 'react';

import classes from './LittleSquare.css';
import chooseColors from '../../../abstracts/chooseColors';

const littleSquare = (props) => {
   const className = chooseColors(props.color, classes);

   return <div className={className}></div>;
};

export default littleSquare;
