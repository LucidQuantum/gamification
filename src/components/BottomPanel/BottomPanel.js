import React from 'react';

import StateDisplay from '../UI/StateDisplay/StateDisplay';
import Button from '../UI/Button/Button';
import classes from './BottomPanel.css';
import NameDisplay from '../UI/TypoGroup/NameDisplay/NameDisplay';
import Window from '../UI/Window/Window';
import PixelTitle from '../UI/PixelTitle/PixelTitle';
import ClickableList from '../UI/ClickableList/ClickableList';
import { CSSTransition } from 'react-transition-group';

const bottomPanel = (props) => (
   <div className={classes.Container}>
      <div className={classes.Quarter}>
         <Button
            color="red"
            clicked={props.switchShowEquipments}
            state={props.showEquipments}
         >
            装备
         </Button>
      </div>
      <div className={classes.Quarter}>
         <StateDisplay
            name={'生命'}
            currentValue={props.playerState.hp}
            maxValue={props.playerState.maxHp}
            color={'red'}
         />
         <StateDisplay
            name={'魔法'}
            currentValue={props.playerState.mp}
            maxValue={props.playerState.maxMp}
            color={'blue'}
         />
         <StateDisplay
            name={'精力'}
            currentValue={props.playerState.ep}
            maxValue={props.playerState.maxEp}
            color={'purple'}
         />
      </div>
      <div className={classes.Quarter}>
         <NameDisplay name={props.playerState.exp} description="探索点" />
      </div>
      <div className={classes.Quarter}>
         <div>
            <div className={classes.package}>
               <Window title="背包">
                  {props.playerPackage.map((el) => {
                     console.log(el);
                     return (
                        <PixelTitle text={el.category} color="red">
                           {console.log(el.items)}
                           {el.items.map((item) => (
                              <ClickableList
                                 text={`${item.name}(${item.number})`}
                              />
                           ))}
                        </PixelTitle>
                     );
                  })}
               </Window>
            </div>
            <Button color="red">背包</Button>
            <Button
               color="red"
               clicked={props.switchShowBase}
               state={props.showBase}
            >
               玩家状态
            </Button>
         </div>
      </div>
   </div>
);

export default bottomPanel;
