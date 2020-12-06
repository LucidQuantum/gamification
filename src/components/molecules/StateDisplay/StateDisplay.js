import React from 'react';

import classes from './StateDisplay.css';
import StateBar from '../../atoms/StateBar/StateBar';
import PixelTitle from '../../atoms/Typos/PixelTitle/PixelTitle';

// name, current, max, color
const stateDisplay = (props) => (
   <div>
      <div className={classes.textMargin}>
         <PixelTitle color={props.color}>
            {props.name} - {props.current} / {props.max}
         </PixelTitle>
      </div>
      <StateBar color={props.color} current={props.current} max={props.max} />
   </div>
);

export default stateDisplay;
