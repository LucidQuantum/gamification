import React from 'react';

import classes from './PackageWindow.css';
import PixelName from '../../atoms/Typos/PixelName/PixelName';
import Category from './Category/Category';
import Window from '../../atoms/Window/Window';

// package, in
const packageWindow = (props) => (
   <Window in={props.in}>
      <div className={classes.wrapper}>
         <div className={classes.packageTitleMargin}>
            <PixelName>背包</PixelName>
         </div>
         {props.package.map((category) => (
            <Category itemsArray={category.items}>{category.name}</Category>
         ))}
      </div>
   </Window>
);

export default packageWindow;
