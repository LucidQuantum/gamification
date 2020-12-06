import React from 'react';

import classes from './ExpDifference.css';
import NameDisplay from '../../../molecules/NameDisplay/NameDisplay';
import PixelTitle from '../../../atoms/Typos/PixelTitle/PixelTitle';
import Arrow from '../../../../assets/arrow.svg';

const ExpDifference = (props) => (
   <div>
      <NameDisplay />
      <div className={classes.arraowWrapper}>
         <PixelTitle>+ 25</PixelTitle>
         <mask id="arrow">
            <svg>
               <Arrow />
            </svg>
         </mask>
         <div className={classes.arrow}></div>
      </div>
   </div>
);

export default ExpDifference;
