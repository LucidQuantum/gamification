import React from 'react';

import classes from './GetMaterial.css';
import PixelName from '../../../atoms/Typos/PixelName/PixelName';
import Item from './Item/Item';

// itemsArray
const GetMaterial = (props) => (
   <div className={classes.wrapper}>
      <div className={classes.titleMargin}>
         <PixelName color="red">获得材料</PixelName>
      </div>
      {props.itemsArray.map((item) => (
         <div className={classes.itemMargin}>
            <Item text={item.name} number={item.number} />
         </div>
      ))}

      {/* <div className={classes.categoryMargin}>
         <PixelName color="red">{props.children}</PixelName>
      </div> */}
      {/* {props.itemsArray.map((item) => (
         <div className={classes.itemsMargin}>
            <Item text={item.name} number={item.number} />
         </div>
      ))} */}
   </div>
);

export default GetMaterial;
