import React from 'react';

import classes from './BattleConsequence.css';
import PixelName from '../../atoms/Typos/PixelName/PixelName';
import IndependentWindow from '../../molecules/IndependentWindow/IndependentWindow';
import RedButton from '../../atoms/Button/RedButton/RedButton';
import ExpDifference from './ExpDifference/ExpDifference';
import DividingLine from '../../atoms/DividingLine/DividingLine';
import StateDisplay from '../../molecules/StateDisplay/StateDisplay';
import GetMaterial from './GetMaterial/GetMaterial';

// in, consequence, findNewEnemy
const BattleConsequence = (props) => (
   <IndependentWindow in={props.in}>
      {props.consequence === undefined ? null : (
         <div className={classes.marginBottom}>
            <PixelName color="red">{props.consequence.title}</PixelName>
            <ExpDifference exp={props.consequence.exp} />
            <GetMaterial itemsArray={props.consequence.materials} />
            <RedButton clicked={props.findNewEnemy}>收取战利品</RedButton>
            <DividingLine />
            <StateDisplay
               name="精力值剩余"
               current={props.consequence.ep.current}
               max={props.consequence.ep.max}
               color="purple"
            />
         </div>
      )}
   </IndependentWindow>
);

export default BattleConsequence;
