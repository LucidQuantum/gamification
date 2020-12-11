import React, { useState } from 'react';

import classes from './Main.css';
import Header from '../../components/organisms/Header/Header';
import BottomPanel from '../../components/organisms/BottomPanel/BottomPanel';
import Battle from '../../components/organisms/Battle/Battle';
import BattleConsequence from '../../components/organisms/BattleConsequence/BattleConsequence';
import copyObject from '../../scripts/copyObject';

import { stateModifier, packageModifier } from '../../scripts/modifier';
import { damageCalculatorAtoB } from '../../scripts/calculator';

const playerData = {
   base: {
      name: 'Taylen1995',
      attack: 5,
      armor: 10,
      critRate: 0.05,
      critDamageMultiplier: 1.5,
      hitRate: -0.3,
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
   package: [
      {
         name: '材料',
         items: [
            { id: '1', name: '石头', number: 1 },
            { id: '2', name: '野草', number: 1 },
         ],
      },
      {
         name: '消耗品',
         items: [
            { id: '3', name: '药水', number: 1 },
            { id: '4', name: '树枝', number: 1 },
         ],
      },
      {
         name: '装备',
         items: [{ id: '5', name: '石头', number: 1 }],
      },
   ],
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
      rewards: {
         exp: 3,
         items: [
            {
               id: 1,
               name: '石头',
               probability: 0.3,
            },
            {
               id: 2,
               name: '野草',
               probability: 0.7,
            },
         ],
      },
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
      rewards: {
         exp: 5,
         items: [
            {
               id: 1,
               name: '石头',
               probability: 0.3,
            },
            {
               id: 2,
               name: '野草',
               probability: 0.7,
            },
         ],
      },
   },
];

const allItems = [
   {
      id: 1,
      name: '石头',
   },
   {
      id: 2,
      name: '野草',
   },
];

const Main = (props) => {
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
         playerCopy = rewardsCalculator(currentEnemyCopy);
      }

      // 更新状态
      setPlayer(playerCopy);
      setCurrentEnemy(currentEnemyCopy);
   };

   // 怪物奖励计算
   const rewardsCalculator = (enemy) => {
      // 深Copy
      let playerCopy = copyObject(player);

      // 经验值计算，精力扣除
      stateModifier(playerCopy, 'exp', enemy.rewards.exp);
      stateModifier(playerCopy, 'ep', -5);

      // 怪物掉落物品计算
      let materialsArray = [];

      enemy.rewards.items.forEach((item) => {
         if (Math.random() < item.probability) {
            // packageModifier(playerCopy, item.id, 1, allItems);
            const itemIndex = allItems.findIndex(
               (allItems) => allItems.id === item.id
            );

            // 增加了多少物品？
            materialsArray.push({
               name: allItems[itemIndex].name,
               number: 1,
            });
         }
      });

      // console.log(battleConsequence);
      // console.log(playerCopy);

      // 设置battleConsequence
      setBattleConsequence({
         title: '>>战胜<<',
         exp: {
            before: playerCopy.state.exp - enemy.rewards.exp,
            add: enemy.rewards.exp,
            after: playerCopy.state.exp,
         },
         materials: materialsArray,
         ep: {
            current: playerCopy.state.ep,
            max: playerCopy.state.maxEp,
         },
      });

      return playerCopy;
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
