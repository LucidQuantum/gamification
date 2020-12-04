import React from 'react';

import classes from './BottomMargin.css';

const largeBottomMargin = (props) => {
   let className;

   switch (props.size) {
      case 'small':
         className = classes.small;
         break;
      case 'medium':
         className = classes.medium;
         break;
      case 'large':
         className = classes.large;
         break;
      default:
         break;
   }

   return <div className={className}>{props.children}</div>;
};

export default largeBottomMargin;
