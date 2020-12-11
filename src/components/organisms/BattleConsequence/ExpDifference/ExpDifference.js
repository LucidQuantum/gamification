import React from 'react';

import classes from './ExpDifference.css';
import NameDisplay from '../../../molecules/NameDisplay/NameDisplay';
import PixelTitle from '../../../atoms/Typos/PixelTitle/PixelTitle';

// exp
const ExpDifference = (props) => (
   <div>
      <div className={classes.wrapper}>
         <NameDisplay title={props.exp.before} content="原探索点" />
         <div className={classes.difference}>
            <PixelTitle>+ {props.exp.add}</PixelTitle>
            <div className={classes.arrow}></div>
         </div>
         <NameDisplay title={props.exp.after} content="新探索点" type="red" />
      </div>
   </div>
);

export default ExpDifference;
