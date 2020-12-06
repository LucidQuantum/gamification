import React, { Component } from 'react';

import classes from './Main.css';
import Header from '../../components/organisms/Header/Header';
import BottomPanel from '../../components/organisms/BottomPanel/BottomPanel';
import Battle from '../../components/organisms/Battle/Battle';
import BattleConsequence from '../../components/organisms/BattleConsequence/BattleConsequence';

import {
   stateModifier,
   packageModifier,
} from '../../components/abstracts/scripts/modifier';
import { damageCalculatorAtoB } from '../../components/abstracts/scripts/calculator';

const player = {
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
            { id: '1', name: '石头', number: 12 },
            { id: '2', name: '野草', number: 7 },
         ],
      },
      {
         name: '消耗品',
         items: [
            { id: '3', name: '药水', number: 3 },
            { id: '4', name: '树枝', number: 21 },
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

class Main extends Component {
   state = {
      player: { ...player },
      allEnemies: { ...allEnemies },
      currentEnemy: { ...allEnemies[0], isDeath: false },
      showEquipments: true,
      showBase: true,
      showPackage: false,
   };

   // 单次攻击计算
   battleHandler = () => {
      // 复制player和enemy，保持原来的数据不受影响
      let player = { ...this.state.player };
      let currentEnemy = { ...this.state.currentEnemy };

      // 计算剩余血量
      player.state.hp -= damageCalculatorAtoB(currentEnemy, player);
      currentEnemy.state.hp -= damageCalculatorAtoB(player, currentEnemy);

      // 判断玩家是否死亡，然后判断敌人是否死亡
      if (player.state.hp <= 0) {
         player.state.hp = '死亡';
         console.log('玩家死亡，死亡惩罚');
      } else if (currentEnemy.state.hp <= 0) {
         currentEnemy.state.hp = '死亡';
         currentEnemy.isDeath = true;
      }

      this.setState({
         player: { ...player },
         currentEnemy: { ...currentEnemy },
      });
   };

   // 怪物奖励计算
   rewardsCalculator = (enemy) => {
      const player = { ...this.state.player };
      stateModifier(player, 'exp', enemy.rewards.exp);
      enemy.rewards.items.forEach((item) => {
         if (Math.random() < item.probability) {
            packageModifier(player, item.id, 1, allItems);
         }
      });
      this.setState({ player: player });
   };

   // 转换开关
   switchShowEquipments = () => {
      let show = this.state.showEquipments;
      show ? (show = false) : (show = true);
      this.setState({ showEquipments: show });
   };

   switchShowBase = () => {
      let show = this.state.showBase;
      show ? (show = false) : (show = true);
      this.setState({ showBase: show });
   };

   switchShowPackage = () => {
      let show = this.state.showPackage;
      show ? (show = false) : (show = true);
      this.setState({ showPackage: show });
   };

   render() {
      console.log(this.state.showEquipments);
      return (
         <div className={classes.main}>
            <BattleConsequence />
            <Header />
            <Battle
               playerBase={this.state.player.base}
               currentEnemy={this.state.currentEnemy}
               attack={
                  this.state.currentEnemy.isDeath ? null : this.battleHandler
               }
               rewards={() => this.rewardsCalculator(this.state.currentEnemy)}
               showLeft={this.state.showEquipments}
               showRight={this.state.showBase}
            />
            <BottomPanel
               playerState={this.state.player.state}
               playerPackage={this.state.player.package}
               switchShowPackage={this.switchShowPackage}
               switchShowEquipments={this.switchShowEquipments}
               switchShowBase={this.switchShowBase}
               showPackage={this.state.showPackage}
               showBase={this.state.showBase}
               showEquipments={this.state.showEquipments}
            />
         </div>
      );
   }
}

export default Main;
