import React from 'react';

import {
   decimalToPercent,
   decimalToMultiplier,
} from '../../abstracts/scripts/typeTransformer';

import classes from './Battle.css';
import NameDisplay from '../../components/UI/TypoGroup/NameDisplay/NameDisplay';
import DataDisplay from '../../components/UI/TypoGroup/DataDisplay/DataDisplay';
import StateDisplay from '../../components/UI/StateDisplay/StateDisplay';
import Button from '../../components/UI/Button/Button';
import BottomMargin from '../../aux/BottomMargin/BottomMargin';

const battle = (props) => {
   const leftEaseOut = props.showEquipments
      ? null
      : {
           transform: 'translateX(-5rem)',
           opacity: '0',
        };

   const rightEaseOut = props.showBase
      ? null
      : {
           transform: 'translateX(5rem)',
           opacity: '0',
        };

   return (
      <main className={classes.battle}>
         <div className={classes.leftColumn} style={leftEaseOut}>
            <DataDisplay title="帽子" value="无" />
            <DataDisplay title="衣服" value="无" />
            <DataDisplay title="裤子" value="无" />
            <DataDisplay title="鞋子" value="无" />
            <DataDisplay title="武器" value="无" />
            <DataDisplay title="副手" value="无" />
         </div>
         <div className={classes.middleColumn}>
            <BottomMargin size="large">
               <NameDisplay
                  name={props.currentEnemy.name}
                  description={props.currentEnemy.description}
               />
            </BottomMargin>
            <BottomMargin size="large">
               <StateDisplay
                  name={'生命'}
                  currentValue={props.currentEnemy.state.hp}
                  maxValue={props.currentEnemy.state.maxHp}
                  color={'red'}
               />
               <StateDisplay
                  name={'魔法'}
                  currentValue={props.currentEnemy.state.mp}
                  maxValue={props.currentEnemy.state.maxMp}
                  color={'blue'}
               />
            </BottomMargin>
            {props.currentEnemy.isDeath ? (
               <Button color="red" clicked={props.rewards}>
                  获得战利品
               </Button>
            ) : (
               <Button color="red" clicked={props.attack}>
                  攻击
               </Button>
            )}
            
         </div>
         <div className={classes.rightColumn} style={rightEaseOut}>
            <DataDisplay
               title="攻击力"
               value={props.playerBase.attack}
               textAlign="right"
            />
            <DataDisplay
               title="护甲"
               value={props.playerBase.armor}
               textAlign="right"
            />
            <DataDisplay
               title="暴击率"
               value={decimalToPercent(props.playerBase.critRate)}
               textAlign="right"
            />
            <DataDisplay
               title="暴击伤害"
               value={decimalToMultiplier(
                  props.playerBase.critDamageMultiplier
               )}
               textAlign="right"
            />
            <DataDisplay
               title="命中率"
               value={decimalToPercent(props.playerBase.hitRate)}
               textAlign="right"
            />
            <DataDisplay
               title="闪避率"
               value={decimalToPercent(props.playerBase.missRate)}
               textAlign="right"
            />
         </div>
      </main>
   );
};

export default battle;
