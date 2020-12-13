import React, { useState } from 'react';

import classes from './Main.css';
import Header from '../../components/organisms/Header/Header';
import BottomPanel from '../../components/organisms/BottomPanel/BottomPanel';
import Battle from '../../components/organisms/Battle/Battle';
import BattleConsequence from '../../components/organisms/BattleConsequence/BattleConsequence';
import copyObject from '../../scripts/copyObject';

import {
   numberModifier,
   packageModifier,
   enemyRewardsCalculator,
} from '../../scripts/modifier';
import { damageCalculatorAtoB } from '../../scripts/calculator';

const playerData = {
   base: {
      name: 'Taylen1995',
      attack: 5,
      armor: 10,
      critRate: 0.05,
      critDamageMultiplier: 1.5,
      hitRate: -0.1,
      missRate: 0.1,
      blockRate: 0.05,
      block: 1,
   },
   state: {
      hp: 100,
      maxHp: 100,
      mp: 25,
      maxMp: 25,
      ep: 100,
      maxEp: 100,
      exp: 0,
   },
   skill: [],
   package: [],
   equipment: [],
};

const allEnemies = [
   {
      id: 1,
      name: '史莱姆',
      description: '最基础的怪物，弱点：???',
      base: {
         attack: 4,
         armor: 10,
         critRate: 0.05,
         critDamageMultiplier: 1.5,
         hitRate: 0.3,
         missRate: 0.05,
         blockRate: 0.35,
         block: 1,
      },
      state: {
         hp: 30,
         maxHp: 30,
         mp: 25,
         maxMp: 25,
      },
      exp: 3,
      ep: 4,
      rewards: [
         {
            id: '1',
            number: 10,
            probability: 0.3,
         },
         {
            id: '2',
            number: 10,
            probability: 0.7,
         },
      ],
   },
   {
      id: 2,
      name: '蘑菇仔',
      description: '第二个怪物，弱点：???',
      base: {
         attack: 8,
         armor: 0,
         critRate: 0.15,
         critDamageMultiplier: 1.8,
         hitRate: 0.2,
         missRate: 0.15,
         blockRate: 0,
         block: 1,
      },
      state: {
         hp: 20,
         maxHp: 20,
         mp: 10,
         maxMp: 10,
      },
      exp: 5,
      ep: 10,
      rewards: [
         {
            id: '1',
            number: 10,
            probability: 0.7,
         },
         {
            id: '2',
            number: 10,
            probability: 0.3,
         },
      ],
   },
];

const Main = (props) => {
   // 玩家怪物状态
   const [player, setPlayer] = useState(copyObject(playerData));
   const [currentEnemy, setCurrentEnemy] = useState(copyObject(allEnemies[0]));
   const [battleConsequence, setBattleConsequence] = useState();

   // 开关状态
   const [showEquipments, setShowEquipments] = useState(true);
   const [showBase, setShowBase] = useState(true);
   const [showPackage, setShowPackage] = useState(false);
   const [enemyDeath, setEnemyDeath] = useState(false);

   // 寻找新怪物
   const findNewEnemy = () => {
      // 随机抽取新的Enemy
      const randomNumber = Math.floor(Math.random() * allEnemies.length);

      // 重新设置currentEnemy
      const newEnemy = copyObject(allEnemies[randomNumber]);

      // 更新状态
      setEnemyDeath(false);
      setCurrentEnemy(newEnemy);
   };

   // 单次攻击计算
   const battleHandler = () => {
      // 深Copy
      let playerCopy = copyObject(player);
      let currentEnemyCopy = copyObject(currentEnemy);

      // 计算剩余血量
      playerCopy.state.hp -= damageCalculatorAtoB(currentEnemyCopy, playerCopy);
      currentEnemyCopy.state.hp -= damageCalculatorAtoB(
         playerCopy,
         currentEnemyCopy
      );

      // 判断玩家是否死亡，然后判断敌人是否死亡
      if (playerCopy.state.hp <= 0) {
         playerCopy.state.hp = '死亡';
      } else if (currentEnemyCopy.state.hp <= 0) {
         currentEnemyCopy.state.hp = '死亡';
         setEnemyDeath(true);
         rewardsCalculator(playerCopy, currentEnemyCopy);
      }

      // 更新状态
      setPlayer(playerCopy);
      setCurrentEnemy(currentEnemyCopy);
   };

   // 怪物奖励计算
   const rewardsCalculator = (player, enemy) => {
      // 经验值计算，精力扣除
      player = numberModifier(player, 'exp', enemy.exp);
      player = numberModifier(player, 'ep', -enemy.ep);

      // 掉落物品计算，返回这次打怪获得了什么材料
      const materialsDifferenceArray = enemyRewardsCalculator(player, enemy);

      // 设置battleConsequence
      setBattleConsequence({
         title: '>>战胜<<',
         exp: {
            before: player.state.exp - enemy.exp,
            add: enemy.exp,
            after: player.state.exp,
         },
         materials: materialsDifferenceArray,
         ep: {
            current: player.state.ep,
            max: player.state.maxEp,
         },
      });

      console.log(player);
   };

   // 转换开关
   const switchShowEquipments = () => {
      setShowEquipments(!showEquipments);
   };

   const switchShowBase = () => {
      setShowBase(!showBase);
   };

   const switchShowPackage = () => {
      setShowPackage(!showPackage);
   };

   return (
      <div>
         <BattleConsequence
            in={enemyDeath}
            findNewEnemy={findNewEnemy}
            consequence={battleConsequence}
         />
         <div className={classes.main}>
            {/* 通用头部 */}
            <Header />

            {/* 战斗页面 */}

            <Battle
               player={player}
               currentEnemy={currentEnemy}
               attack={enemyDeath ? null : battleHandler}
               showLeft={showEquipments}
               showRight={showBase}
            />

            {/* 通用底部 */}
            <BottomPanel
               player={player}
               switchShowPackage={switchShowPackage}
               switchShowEquipments={switchShowEquipments}
               switchShowBase={switchShowBase}
               showPackage={showPackage}
               showBase={showBase}
               showEquipments={showEquipments}
            />
         </div>
      </div>
   );
};

export default Main;
