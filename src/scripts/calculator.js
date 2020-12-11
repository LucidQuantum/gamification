// 物理攻击伤害计算公式（A攻击B）
export const damageCalculatorAtoB = (A, B) => {
   // 实际命中概率，如果是负数，那么攻击可能会丢失
   const actualHitRate = A.base.hitRate - B.base.missRate;

   // 判断是否闪避，如果闪避，则return 0;
   if (actualHitRate < 0 && Math.random() < Math.abs(actualHitRate)) {
      return 0;
   }

   // 判定是否暴击、格挡
   let critMultiplier =
      Math.random() < A.base.critRate ? A.base.critDamageMultiplier : 1;
   let blockNumber = Math.random() < B.base.blockRate ? B.base.block : 0;

   // 浮动
   const floatMultiplier = Math.random() * 0.2 + 0.9;

   // 伤害减免公式：0.0052*护甲/(1+0.0045*护甲)
   const damageReduction =
      (0.0052 * B.base.armor) / (1 + 0.0045 * B.base.armor);

   // 计算最终伤害：(攻击力*浮动*暴伤系数-格挡)*(1-伤害减免)
   const finalDamage = Math.round(
      (A.base.attack * floatMultiplier * critMultiplier - blockNumber) *
         (1 - damageReduction)
   );
   return finalDamage;
};
