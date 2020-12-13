export const itemsMuseum = [
   {
      id: '1',
      name: '石头',
      description: '制造武器的材料，需要学习「初级武器制造」才能使用这种材料',
      divisionName: '材料',
      groupName: '制造',
   },
   {
      id: '2',
      name: '小草',
      description: '制造草药的材料，需要学习「初级草药制造」才能使用这种材料',
      divisionName: '材料',
      groupName: '制造',
   },
   {
      id: '3',
      name: '青草药膏',
      description: '最初级的草药，敷在伤处，可以恢复20点生命',
      effects: [['hp', 20]],
      divisionName: '消耗品',
      groupName: '生命',
   },
   {
      id: '4',
      name: '精力药水',
      description: '恢复5点精力',
      effects: [['ep', 5]],
      divisionName: '消耗品',
      groupName: '精力',
   },
   {
      id: '5',
      name: '简易石器',
      description: '最初级的武器，攻击力+5，命中率增加1%',
      effects: [
         ['attack', 5],
         ['hitRate', 0.01],
      ],
      divisionName: '装备',
      groupName: '武器',
   },
];