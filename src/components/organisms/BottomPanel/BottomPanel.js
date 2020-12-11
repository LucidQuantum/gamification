import React from 'react';

import RedButton from '../../atoms/Button/RedButton/RedButton';
import StateDisplay from '../../molecules/StateDisplay/StateDisplay';
import NameDisplay from '../../molecules/NameDisplay/NameDisplay';
import PackageWindow from '../PackageWindow/PackageWindow';

import classes from './BottomPanel.css';

// import Window from '../UI/Window/Window';
// import ClickableList from '../UI/ClickableList/ClickableList';

const bottomPanel = (props) => (
   <div className={classes.wrapper}>
      <div className={classes.oneOfFour}>
         <RedButton
            clicked={props.switchShowEquipments}
            active={props.showEquipments}
         >
            装备
         </RedButton>
      </div>
      <div className={classes.oneOfFour}>
         <div className={classes.stateWrapper}>
            <StateDisplay
               name={'生命'}
               current={props.playerState.hp}
               max={props.playerState.maxHp}
               color={'red'}
            />
            <StateDisplay
               name={'魔法'}
               current={props.playerState.mp}
               max={props.playerState.maxMp}
               color={'blue'}
            />
            <StateDisplay
               name={'精力'}
               current={props.playerState.ep}
               max={props.playerState.maxEp}
               color={'purple'}
            />
         </div>
      </div>
      <div className={classes.oneOfFour}>
         <NameDisplay title={props.playerState.exp} content="探索点" />
      </div>
      <div className={classes.oneOfFour}>
         <div className={classes.window}>
            <PackageWindow
               package={props.playerPackage}
               in={props.showPackage}
            />
         </div>

         <div className={classes.grid}>
            <RedButton
               clicked={props.switchShowPackage}
               active={props.showPackage}
            >
               背包
            </RedButton>
            <RedButton clicked={props.switchShowBase} active={props.showBase}>
               玩家状态
            </RedButton>
         </div>
      </div>
   </div>
);

export default bottomPanel;
