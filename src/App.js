import React, { Component } from 'react';

import './App.css';
import Header from './components/Header/Header';
import BottomPanel from './components/BottomPanel/BottomPanel';
import Battle from './containers/Battle/Battle';

class App extends Component {
   render() {
      return (
         <div
            style={{
               height: '100vh',
               width: '100vw',
               display: 'flex',
               flexDirection: 'column',
               alignContent: 'stretch',
            }}
         >
            <Header />
            <Battle />
            <BottomPanel />
         </div>
      );
   }
}

export default App;
