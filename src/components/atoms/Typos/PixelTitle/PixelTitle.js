import React from 'react';

import classes from './PixelTitle.css';
import chooseColors from '../../../abstracts/chooseColors';

// color
const pixelTitle = (props) => {
   const className = chooseColors(props.color, classes);

   return <p className={className}>{props.children}</p>;
};

export default pixelTitle;