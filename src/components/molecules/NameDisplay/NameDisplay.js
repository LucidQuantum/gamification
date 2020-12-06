import React from 'react';

import classes from './NameDisplay.css';
import PixelName from '../../atoms/Typos/PixelName/PixelName';
import PixelDescription from '../../atoms/Typos/PixelDescription/PixelDescription';

// title, content, disabled
const nameDisplay = (props) => {
   return (
      <div className={classes.textAlign}>
         <div className={classes.textMargin}>
            <PixelName>{props.title}</PixelName>
         </div>
         <PixelDescription>{props.content}</PixelDescription>
      </div>
   );
};

export default nameDisplay;
