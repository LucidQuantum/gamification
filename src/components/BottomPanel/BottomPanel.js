import React from 'react';

import StateDisplay from '../UI/StateDisplay/StateDisplay';
import Button from '../UI/Button/Button';
import classes from './BottomPanel.css';
import NameDisplay from '../UI/TypoGroup/NameDisplay/NameDisplay';

const bottomPanel = (props) => (
   <div className={classes.Container}>
      <div className={classes.Quarter}>
         <Button color="red">装备</Button>
      </div>
      <div className={classes.Quarter}>
         <StateDisplay
            name={'生命'}
            currentValue={64}
            maxValue={100}
            color={'red'}
         />
         <StateDisplay
            name={'魔法'}
            currentValue={22}
            maxValue={25}
            color={'blue'}
         />
         <StateDisplay
            name={'精力'}
            currentValue={32}
            maxValue={100}
            color={'purple'}
         />
      </div>
      <div className={classes.Quarter}>
         <NameDisplay name="Taylen1995" description="总探索点数:1520" />
      </div>
      <div className={classes.Quarter}>
         <div>
            <Button color="red">背包</Button>
            <Button color="red">玩家状态</Button>
         </div>
      </div>
   </div>
);

export default bottomPanel;
