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

// 物品修改器：输入对象、id、number、itemsMuseum，输出一个新的对象(number可以是负数)
export const packageModifier = (player, id, number, itemsMuseum) => {
   // 在itemsMuseum中找到这个物品
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
         const museumIndex = itemsMuseum.findIndex((item) => item.id === id);
         const item = itemsMuseum[museumIndex];
         player.package.push({ ...item, number: number });
      } else if (playerIndex >= 0) {
         // - 如果有，那么直接加上number就好
         player.package[playerIndex].number += number;
      }
   }

   return player;
};

// 怪物掉落物品计算，输入
