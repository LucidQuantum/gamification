import React from 'react';

import classes from './Category.css';
import PixelTitle from '../../../atoms/Typos/PixelTitle/PixelTitle';
import Item from './Item/Item';

// itemsArray
const category = (props) => (
   <div className={classes.wrapper}>
      <div className={classes.categoryMargin}>
         <PixelTitle color="red">{props.children}</PixelTitle>
      </div>
      {props.itemsArray.map((item) => (
         <div className={classes.itemsMargin}>
            <Item text={item.name} number={item.number} />
         </div>
      ))}
   </div>
);

export default category;
