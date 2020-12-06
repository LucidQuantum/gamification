import React from 'react';

import classes from './BattleConsequence.css';
import Window from '../../atoms/Window/Window';
import PixelName from '../../atoms/Typos/PixelName/PixelName';
import DarkBackground from '../../atoms/DarkBackground/DarkBackground';
import NameDisplay from '../../molecules/NameDisplay/NameDisplay';
import ExpDifference from './ExpDifference/ExpDifference';

const BattleConsequence = (props) => (
   <div className={classes.background}>
      <div className={classes.wrapper}>
         <DarkBackground in={true}>
            <div className={classes.window}>
               <Window>
                  <PixelName color="red">{'>>战胜<<'}</PixelName>
                  <NameDisplay title="210" content="探索点" />
                  <ExpDifference />
               </Window>
            </div>
         </DarkBackground>
      </div>
   </div>
);

export default BattleConsequence;