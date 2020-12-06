import React from 'react';

import classes from './RedButton.css';
import PixelTitle from '../../Typos/PixelTitle/PixelTitle';

// clicked, active
const button = (props) => {
   const active = props.active ? classes.active : null;

   return (
      <button
         className={[classes.button, active].join(' ')}
         onClick={props.clicked}
      >
         <PixelTitle color="grey">{props.children}</PixelTitle>
      </button>
   );
};

export default button;
