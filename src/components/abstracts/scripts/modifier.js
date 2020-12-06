// 玩家信息修改器
export const baseModifier = (player, option, value) => {
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
   return player;
};

// 状态修改器，value可以为负数
export const stateModifier = (player, option, value) => {
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
   return player;
};

// 物品修改器，number可以是负数
export const packageModifier = (player, id, number, allItems) => {
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
   return player;
};
