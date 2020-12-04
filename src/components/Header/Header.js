import React from 'react';

import classes from './Header.css';
import Navigation from './Navigation/Navigation';

const navigationList = [
   { name: '战斗', color: 'red', href: '/' },
   { name: '技能', color: 'blue', href: '/' },
   { name: '制造', color: 'purple', href: '/' },
];

const header = (props) => (
   <div className={classes.header}>
      <p className={classes.title}>Gamification</p>
      <Navigation navigationList={navigationList} />
   </div>
);

export default header;
