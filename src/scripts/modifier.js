import { itemsMuseum } from './data';

// 数值修改器：输入对象、选项、数值，返回一个新的object(value可以为负数)
export const numberModifier = (creatureObject, option, value) => {
   switch (option) {
      case 'name':
         creatureObject.base.name = 'value';
         break;
      case 'attack':
         creatureObject.base.attack += value;
         if (creatureObject.base.attack < 0) {
            creatureObject.base.attack = 0;
         }
         break;
      case 'armor':
         creatureObject.base.armor += value;
         if (creatureObject.base.armor < 0) {
            creatureObject.base.armor = 0;
         }
         break;
      case 'critRate':
         creatureObject.base.critRate += value;
         if (creatureObject.base.critRate < 0) {
            creatureObject.base.critRate = 0;
         } else if (creatureObject.base.critRate > 1) {
            creatureObject.base.critRate = 1;
         }
         break;
      case 'critDamageMultiplier':
         creatureObject.base.critDamageMultiplier += value;
         if (creatureObject.base.critDamageMultiplier < 0) {
            creatureObject.base.critDamageMultiplier = 0;
         }
         break;
      case 'hitRate':
         creatureObject.base.hitRate += value;
         break;
      case 'missRate':
         creatureObject.base.missRate += value;
         if (creatureObject.base.missRate < 0) {
            creatureObject.base.missRate = 0;
         }
         break;
      case 'blockRate':
         creatureObject.base.blockRate += value;
         if (creatureObject.base.blockRate < 0) {
            creatureObject.base.blockRate = 0;
         }
         break;
      case 'block':
         creatureObject.base.block += value;
         if (creatureObject.base.block < 0) {
            creatureObject.base.block = 0;
         }
         break;
      case 'exp':
         creatureObject.state.exp += value;
         if (creatureObject.state.exp < 0) {
            creatureObject.state.exp = 0;
         }
         break;
      case 'hp':
         creatureObject.state.hp += value;
         if (creatureObject.state.hp < 0) {
            creatureObject.state.hp = 0;
         } else if (creatureObject.state.hp > creatureObject.state.maxHp) {
            creatureObject.state.hp = creatureObject.state.maxHp;
         }
         break;
      case 'mp':
         creatureObject.state.mp += value;
         if (creatureObject.state.mp < 0) {
            creatureObject.state.mp = 0;
         } else if (creatureObject.state.mp > creatureObject.state.maxMp) {
            creatureObject.state.mp = creatureObject.state.maxMp;
         }
         break;
      case 'ep':
         creatureObject.state.ep += value;
         if (creatureObject.state.ep < 0) {
            creatureObject.state.ep = 0;
         } else if (creatureObject.state.ep > creatureObject.state.maxEp) {
            creatureObject.state.ep = creatureObject.state.maxEp;
         }
         break;
      default:
         return;
   }
   return creatureObject;
};

// 物品修改器：输入玩家、id、number，直接修改对象(number可以是负数)
export const packageModifier = (player, id, number) => {
   // 在玩家包裹中找到这个物品
   const playerIndex = player.package.findIndex((item) => item.id === id);

   if (number < 0) {
      // 在玩家背包中寻找有没有这个物品
      if (playerIndex === -1) {
         // - 如果没有，直接报错
         alert('没有东西可以扣除');
      } else if (playerIndex >= 0) {
         // - 如果有，那么相加后是否小于等于0？
         const finalNumber = player.package[playerIndex].number + number;
         if (finalNumber < 0) {
            // - 如果小于0，不修改物品，并报错
            alert('玩家物品数量不足');
         } else if (finalNumber === 0) {
            // - 如果等于0，那么将这一项抹去
            player.package.splice(playerIndex, 1);
         } else {
            player.package[playerIndex].number = finalNumber;
         }
      }
   } else if (number > 0) {
      // 玩家背包中有没有这个物品？
      if (playerIndex === -1) {
         // - 如果没有，那么在itemsMuseum中寻找这个物品，并且在玩家的背包中加入
         player.package.push({ id: id, number: number });
      } else if (playerIndex >= 0) {
         // - 如果有，那么直接加上number就好
         player.package[playerIndex].number += number;
      }
   }
};

// 通过id在itemsMuseum中寻找item
const findItemById = (id) => {
   const index = itemsMuseum.findIndex((item) => item.id === id);
   return itemsMuseum[index];
};

// 打败怪物后，计算材料掉落，并将变化作为array返回
export const enemyRewardsCalculator = (player, currentEnemy) => {
   let materialsDifferenceArray = [];

   currentEnemy.rewards.forEach((item) => {
      let number = 0;

      // 计算一个材料掉落的数量
      for (let i = 0; i < item.number; i++) {
         if (Math.random() < item.probability) {
            number++;
         }
      }
      console.log(number);

      // 如果获得材料的话
      if (number > 0) {
         // 修改背包数量
         packageModifier(player, item.id, number);
         // 将变化写入array
         materialsDifferenceArray.push({
            name: findItemById(item.id).name,
            number: number,
         });
      }
   });

   return materialsDifferenceArray;
};
