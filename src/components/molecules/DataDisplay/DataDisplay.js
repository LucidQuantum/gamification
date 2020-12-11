import React from 'react';

import classes from './DataDisplay.css';
import PixelTitle from '../../atoms/Typos/PixelTitle/PixelTitle';
import PixelName from '../../atoms/Typos/PixelName/PixelName';

// title, content, type
const dataDisplay = (props) => {
   let titleColor, contentColor;
   if (props.type === 'grey') {
      titleColor = 'grey';
      contentColor = 'lightGrey';
   } else {
      titleColor = 'red';
   }

   return (
      <div>
         <div className={classes.textMargin}>
            <PixelTitle color={titleColor}>{props.title}</PixelTitle>
         </div>
         <PixelName color={contentColor}>{props.content}</PixelName>
      </div>
   );
};

export default dataDisplay;
