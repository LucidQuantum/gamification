import React from 'react';

import classes from './Item.css';
import PixelTitle from '../../../../atoms/Typos/PixelTitle/PixelTitle';

// text, number
const item = (props) => (
   <div className={classes.oneItem}>
      <PixelTitle color="grey">
         ·{props.text}({props.number})
      </PixelTitle>
   </div>
);

export default item;
