import React from 'react';

import DarkBackground from '../../atoms/DarkBackground/DarkBackground';
import Window from '../../atoms/Window/Window';

// in, children
const IndependentWindow = (props) => (
   <DarkBackground in={props.in}>
      <Window in={props.in}>{props.children}</Window>
   </DarkBackground>
);

export default IndependentWindow;
