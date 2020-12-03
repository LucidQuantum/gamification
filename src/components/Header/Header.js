import React from 'react';

import classes from './Header.css';
import Navigation from './Navigation/Navigation';

const navigationList = [
   { name: '战斗', color: 'Red', href: '/' },
   { name: '技能', color: 'Blue', href: '/' },
   { name: '制造', color: 'Purple', href: '/' },
];

const header = (props) => (
   <div className={classes.Header}>
      <h1>Gamification</h1>
      <Navigation navigationList={navigationList}/>
   </div>
);

export default header;
