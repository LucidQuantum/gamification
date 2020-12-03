import React from 'react';

import classes from './Battle.css';
import NameDisplay from '../../components/UI/TypoGroup/NameDisplay/NameDisplay';
import DataDisplay from '../../components/UI/TypoGroup/DataDisplay/DataDisplay';

const battle = (props) => (
   <main className={classes.Battle}>
      <div className={classes.OneThird}>
         <DataDisplay title="暴击率" value="1.5倍" />
      </div>
      <div className={classes.OneThird}>
         <NameDisplay name="绿水灵" description="弱点：???" />
      </div>
      <div className={classes.OneThird}></div>
   </main>
);

export default battle;
