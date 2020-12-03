import React from 'react';

import classes from './Navigation.css';

const navigation = (props) => (
   <div>
      {props.navigationList.map((item) => {
         return (
            <div className={[classes.Button, classes[item.color]].join(' ')}>
               <button>{item.name}</button>
               <div></div>
            </div>
         );
      })}
   </div>
);

export default navigation;
