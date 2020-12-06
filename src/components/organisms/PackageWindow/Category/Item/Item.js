import React from 'react';

import classes from './Item.css';
import PixelDescription from '../../../../atoms/Typos/PixelDescription/PixelDescription';

// clicked, text, number
const item = (props) => (
   <div className={classes.oneItem} onClick={props.clicked}>
      <PixelDescription>
         ·{props.text}({props.number})
      </PixelDescription>
      <div className={classes.use}>
         <PixelDescription color="white">使用</PixelDescription>
      </div>
   </div>
);

export default item;
