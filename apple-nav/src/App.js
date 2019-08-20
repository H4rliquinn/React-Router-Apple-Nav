import React from 'react';
import './App.scss';
import NavItem from './NavItem.js';
import Pict from './Pict.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Pict type="logo"/>
          <NavItem/>
          <NavItem/>
          <NavItem/>
          <NavItem/>
          <NavItem/>
          <NavItem/>
          <NavItem/>
          <Pict type="find"/>
          <Pict type="cart"/>
        </nav>
      </header>
    </div>
  );
}

export default App;
