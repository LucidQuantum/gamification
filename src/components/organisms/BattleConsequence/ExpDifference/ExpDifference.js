import React from 'react';

import classes from './ExpDifference.css';
import NameDisplay from '../../../molecules/NameDisplay/NameDisplay';
import PixelTitle from '../../../atoms/Typos/PixelTitle/PixelTitle';

const ExpDifference = (props) => (
   <div>
      <div className={classes.wrapper}>
         <NameDisplay title="210" content="探索点" />
         <div className={classes.difference}>
            <PixelTitle>+ 25</PixelTitle>
            <div className={classes.arrow}></div>
         </div>

         <NameDisplay title="210" content="探索点" />
      </div>
   </div>
);

export default ExpDifference;
