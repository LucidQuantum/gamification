import React from 'react';

import BattleField from './BattleField/BattleField';
import StateColumn from './StateColumn/StateColumn';

import classes from './Battle.css';

import {
   decimalToPercent,
   decimalToMultiplier,
} from '../../../scripts/typeTransformer';

const equipments = [
   {
      position: '头盔',
      id: null,
      name: null,
   },
   { position: '胸甲', id: 1, name: '粗制皮衣(Lv.2)' },
   { position: '腿部', id: null, name: null },
   { position: '鞋子', id: 2, name: '小皮鞋(Lv.1)' },
   { position: '武器', id: 3, name: '石头(Lv.3)' },
   { position: '副手', id: null, name: null },
];

// player, currentEnemy
const battle = (props) => {
   // 转换需要展示的信息
   const equipmentArray = equipments.map((equipment) =>
      equipment.id === null
         ? { title: equipment.position, type: 'grey', content: '无' }
         : { title: equipment.position, content: equipment.name }
   );

   const playerBaseArray = [
      { title: '攻击力', content: props.player.base.attack },
      { title: '护甲', content: props.player.base.armor },
      {
         title: '暴击率',
         content: decimalToPercent(props.player.base.critRate),
      },
      {
         title: '暴击伤害',
         content: decimalToMultiplier(props.player.base.critDamageMultiplier),
      },
      { title: '命中率', content: decimalToPercent(props.player.base.hitRate) },
      {
         title: '闪避率',
         content: decimalToPercent(props.player.base.missRate),
      },
   ];

   // 根据开关状态设置classes
   const showLeft = props.showLeft ? classes.showLeft : null;
   const showRight = props.showRight ? classes.showRight : null;

   return (
      <main className={classes.battle}>
         {/* 左边装备面板 */}
         <div className={[classes.leftColumn, showLeft].join(' ')}>
            <StateColumn array={equipmentArray} />
         </div>

         {/* 中间战斗面板 */}
         <div className={classes.middleColumn}>
            <BattleField
               currentEnemy={props.currentEnemy}
               attack={props.attack}
            />
         </div>

         {/* 右边玩家数值面板 */}
         <div className={[classes.rightColumn, showRight].join(' ')}>
            <StateColumn array={playerBaseArray} />
         </div>
      </main>
   );
};

export default battle;
