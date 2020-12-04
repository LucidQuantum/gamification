import React, { Component } from 'react';

import classes from './Main.css';
import Header from '../../components/Header/Header';
import BottomPanel from '../../components/BottomPanel/BottomPanel';
import Battle from '../../pages/Battle/Battle';

import { damageCalculatorAtoB } from '../../abstracts/scripts/calculator';

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
      rewards: {
         exp: 3,
         items: [
            {
               id: 1,
               name: '石头',
               probability: 0.7,
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
               probability: 0.9,
            },
            {
               id: 2,
               name: '野草',
               probability: 0.4,
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
   };

   // 单次攻击计算
   battleOnce = () => {
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
         // 计算奖励
         this.rewardsCalculator(currentEnemy);
         console.log('怪物死亡，获得奖励');
      }
      console.log(player);

      this.setState({
         player: { ...player },
         currentEnemy: { ...currentEnemy },
      });
   };

   // 物品修改器，number可以是负数
   packageModifier = (id, number) => {
      const player = { ...this.state.player };
      const index = player.package.findIndex((item) => item.id === id);
      const itemIndex = allItems.findIndex((item) => item.id === id);

      if (index >= 0) {
         if (number > 0) {
            player.package[index].number += number;
         } else if (number < 0 && number < player.package[index].number) {
            player.package[index].number -= number;
         } else if (number < 0 && number > player.package[index].number) {
            console.log('没有这么多物品扣除');
         }
      } else if (index === -1 && itemIndex === -1) {
         console.log('没有此物品');
      } else if (index === -1 && itemIndex >= 0) {
         if (number > 0) {
            player.package.push({ ...allItems[itemIndex], number: number });
         } else if (number < 0) {
            console.log('没有可以扣除的物品');
         }
      }
      this.setState({ player: player });
   };

   // 状态修改器，value可以为负数
   stateModifier = (option, value) => {
      const player = { ...this.state.player };
      switch (option) {
         case 'exp':
            player.state.exp += value;
            if (player.state.exp < 0) {
               player.state.exp = 0;
            }
            break;
         case 'hp':
            player.state.hp += value;
            if (player.state.hp < 0) {
               player.state.hp = 0;
            } else if (player.state.hp > player.state.maxHp) {
               player.state.hp = player.state.maxHp;
            }
            break;
         case 'mp':
            player.state.mp += value;
            if (player.state.mp < 0) {
               player.state.mp = 0;
            } else if (player.state.mp > player.state.maxMp) {
               player.state.mp = player.state.maxMp;
            }
            break;
         case 'ep':
            player.state.ep += value;
            if (player.state.ep < 0) {
               player.state.ep = 0;
            } else if (player.state.ep > player.state.maxEp) {
               player.state.ep = player.state.maxEp;
            }
            break;
         default:
            return;
      }
      this.setState({ player: player });
   };

   // 玩家信息修改器
   baseModifier = (option, value) => {
      const player = { ...this.state.player };
      switch (option) {
         case 'name':
            player.base.name = 'value';
            break;
         case 'attack':
            player.base.attack += value;
            if (player.base.attack < 0) {
               player.base.attack = 0;
            }
            break;
         case 'armor':
            player.base.armor += value;
            if (player.base.armor < 0) {
               player.base.armor = 0;
            }
            break;
         case 'critRate':
            player.base.critRate += value;
            if (player.base.critRate < 0) {
               player.base.critRate = 0;
            } else if (player.base.critRate > 1) {
               player.base.critRate = 1;
            }
            break;
         case 'critDamageMultiplier':
            player.base.critDamageMultiplier += value;
            if (player.base.critDamageMultiplier < 0) {
               player.base.critDamageMultiplier = 0;
            }
            break;
         case 'hitRate':
            player.base.hitRate += value;
            break;
         case 'missRate':
            player.base.missRate += value;
            if (player.base.missRate < 0) {
               player.base.missRate = 0;
            }
            break;
         case 'blockRate':
            player.base.blockRate += value;
            if (player.base.blockRate < 0) {
               player.base.blockRate = 0;
            }
            break;
         case 'block':
            player.base.block += value;
            if (player.base.block < 0) {
               player.base.block = 0;
            }
            break;
         default:
            return;
      }
      this.setState({ player: player });
   };

   // 怪物奖励计算
   rewardsCalculator = (enemy) => {
      this.stateModifier('exp', enemy.rewards.exp);
      enemy.rewards.items.forEach((item) => {
         if (Math.random() < item.probability) {
            this.packageModifier(item.id, 1);
         }
      });
   };

   render() {
      return (
         <div className={classes.main}>
            <Header />
            <Battle
               playerBase={this.state.player.base}
               currentEnemy={this.state.currentEnemy}
               attack={this.state.currentEnemy.isDeath ? null : this.battleOnce}
            />
            <BottomPanel playerState={this.state.player.state} />
         </div>
      );
   }
}

export default Main;
