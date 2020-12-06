import React from 'react';

import LittleSquare from '../../atoms/StateBar/LittleSquare/LittleSquare';

// current, max, color
const stateBar = (props) => {
   // 根据输入的数值，自动生成littleSquare
   const squares = [];
   for (let i = 0; i < 25; i++) {
      const renderNumber = Math.floor(
         (props.current * 25) / props.max
      );
      if (i < renderNumber) {
         squares.push(<LittleSquare color={props.color} />);
      } else {
         squares.push(<LittleSquare />);
      }
   }

   return (
      <div>
         {squares}
      </div>
   );
};

export default stateBar;
