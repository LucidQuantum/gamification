import React from 'react';

import DataDisplay from '../../../molecules/DataDisplay/DataDisplay';
import classes from './StateColumn.css';

// array[{content, title, disabled(option)}]
const stateColumn = (props) => {
   const array = props.array.map((item) => (
      <DataDisplay content={item.content} title={item.title} type={item.type} />
   ));

   return <div className={classes.marginBottom}>{array}</div>;
};

export default stateColumn;
