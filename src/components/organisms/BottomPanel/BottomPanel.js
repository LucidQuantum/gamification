import React from 'react';

import RedButton from '../../atoms/Button/RedButton/RedButton';
import StateDisplay from '../../molecules/StateDisplay/StateDisplay';
import NameDisplay from '../../molecules/NameDisplay/NameDisplay';
import PackageWindow from '../PackageWindow/PackageWindow';

import classes from './BottomPanel.css';

const bottomPanel = (props) => (
   <div className={classes.wrapper}>
      {/* 左边按钮 */}
      <div className={classes.oneOfFour}>
         <RedButton
            clicked={props.switchShowEquipments}
            active={props.showEquipments}
         >
            装备
         </RedButton>
      </div>

      {/* 玩家状态栏 */}
      <div className={classes.oneOfFour}>
         <div className={classes.stateWrapper}>
            <StateDisplay
               name={'生命'}
               current={props.player.state.hp}
               max={props.player.state.maxHp}
               color={'red'}
            />
            <StateDisplay
               name={'魔法'}
               current={props.player.state.mp}
               max={props.player.state.maxMp}
               color={'blue'}
            />
            <StateDisplay
               name={'精力'}
               current={props.player.state.ep}
               max={props.player.state.maxEp}
               color={'purple'}
            />
         </div>
      </div>

      {/* 探索点 */}
      <div className={classes.oneOfFour}>
         <NameDisplay title={props.player.state.exp} content="探索点" />
      </div>

      {/* 右边按钮 */}
      <div className={classes.oneOfFour}>
         <div className={classes.window}>
            <PackageWindow
               package={props.player.package}
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
