import React from 'react';

import classes from './Window.css';

// title
const window = (props) => (
   <div className={classes.window}>{props.children}</div>
);

export default window;
