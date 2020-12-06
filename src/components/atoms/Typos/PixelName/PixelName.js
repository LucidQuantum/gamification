import React from 'react';

import classes from './PixelName.css';
import chooseColors from '../../../abstracts/chooseColors';

// color
const pixelName = (props) => {
   const className = chooseColors(props.color, classes);

   return <p className={className}>{props.children}</p>;
};

export default pixelName;
