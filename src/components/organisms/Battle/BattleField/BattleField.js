import React from 'react';

import classes from './BattleField.css';
import NameDisplay from '../../../molecules/NameDisplay/NameDisplay';
import StateDisplay from '../../../molecules/StateDisplay/StateDisplay';
import RedButton from '../../../atoms/Button/RedButton/RedButton';

// currentEnemy, attack
const battleField = (props) => {
   return (
      <div className={classes.wrapper}>
         <div>
            <NameDisplay
               title={props.currentEnemy.name}
               content={props.currentEnemy.description}
            />
         </div>

         <div className={classes.stateWrapper}>
            <StateDisplay
               name={'生命'}
               current={props.currentEnemy.state.hp}
               max={props.currentEnemy.state.maxHp}
               color={'red'}
            />
            <StateDisplay
               name={'魔法'}
               current={props.currentEnemy.state.mp}
               max={props.currentEnemy.state.maxMp}
               color={'blue'}
            />
         </div>

         <div>
            <RedButton clicked={props.attack}>攻击</RedButton>
         </div>
      </div>
   );
};

export default battleField;
