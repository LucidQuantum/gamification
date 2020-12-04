import React from 'react';

import classes from './Navigation.css';
import chooseColors from '../../../abstracts/chooseColors';

const navigation = (props) => (
   <div>
      {props.navigationList.map((item) => {
         const className = chooseColors(item.color, classes);
         return (
            <div className={className} key={item.name}>
               <button className={classes.button}>{item.name}</button>
               <div className={classes.underline} />
            </div>
         );
      })}
   </div>
);

export default navigation;
