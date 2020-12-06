import React from 'react';

import TaipeiNormal from '../../Typos/TaipeiNormal/TaipeiNormal';
import classes from './PurpleTaipeiButton.css';

// clicked, active
const redTaipeiButton = (props) => {
   const active = props.active ? classes.active : null;

   return (
      <button className={[classes.button, active].join(' ')}>
         <TaipeiNormal>{props.children}</TaipeiNormal>
         <div className={classes.underline} />
      </button>
   );
};

export default redTaipeiButton;
