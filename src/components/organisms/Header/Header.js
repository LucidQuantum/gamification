import React from 'react';

import classes from './Header.css';
import TaipeiLarge from '../../atoms/Typos/TaipeiLarge/TaipeiLarge';
import RedTaipeiButton from '../../atoms/TaipeiButton/RedTaipeiButton/RedTaipeiButton';
import BlueTaipeiButton from '../../atoms/TaipeiButton/BlueTaipeiButton/BlueTaipeiButton';
import PurpleTaipeiButton from '../../atoms/TaipeiButton/PurpleTaipeiButton/PurpleTaipeiButton';

const header = (props) => (
   <div className={classes.header}>
      <TaipeiLarge>Gamification</TaipeiLarge>
      <div className={classes.wrapper}>
         <RedTaipeiButton>战斗</RedTaipeiButton>
         <BlueTaipeiButton>技能</BlueTaipeiButton>
         <PurpleTaipeiButton>制造</PurpleTaipeiButton>
      </div>
   </div>
);

export default header;
