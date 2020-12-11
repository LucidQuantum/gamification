import React from 'react';

import classes from './NameDisplay.css';
import PixelName from '../../atoms/Typos/PixelName/PixelName';
import PixelDescription from '../../atoms/Typos/PixelDescription/PixelDescription';

// title, content, type
const nameDisplay = (props) => {
   let titleColor, contentColor;
   if (props.type === 'red') {
      titleColor = 'red';
   }

   return (
      <div className={classes.textAlign}>
         <div className={classes.textMargin}>
            <PixelName color={titleColor}>{props.title}</PixelName>
         </div>
         <PixelDescription color={contentColor}>
            {props.content}
         </PixelDescription>
      </div>
   );
};

export default nameDisplay;
