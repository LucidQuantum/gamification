import React from 'react';

import LittleSquare from './LittleSquare/LittleSquare';
import classes from './StateDisplay.css';
import chooseColors from '../../../abstracts/chooseColors';

// name, currentValue, maxValue, color
const stateDisplay = (props) => {
   // 根据输入的数值，自动生成littleSquare
   const squares = [];
   for (let i = 0; i < 25; i++) {
      const renderNumber = Math.floor(
         (props.currentValue * 25) / props.maxValue
      );
      if (i < renderNumber) {
         squares.push(<LittleSquare color={props.color} />);
      } else {
         squares.push(<LittleSquare />);
      }
   }

   const className = chooseColors(props.color, classes);

   return (
      <div className={classes.container}>
         <p className={className}>
            {props.name} - {props.currentValue} / {props.maxValue}
         </p>
         {squares}
      </div>
   );
};

export default stateDisplay;
