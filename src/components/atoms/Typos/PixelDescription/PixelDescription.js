import React from 'react';

import classes from './PixelDescription.css';
import chooseColors from '../../../abstracts/chooseColors';

// color
const pixelDescription = (props) => {
   const className = chooseColors(props.color, classes);

   return <p className={className}>{props.children}</p>;
};

export default pixelDescription;