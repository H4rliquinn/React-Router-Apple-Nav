import React, {useEffect} from 'react';
import './App.scss';
import {Route} from 'react-router-dom';
import NavItem from './components/NavItem.js';
import Pict from './components/Pict.js';
import Home from './components/Home.js';
function App() {

useEffect(()=>{

  console.log("EFFECT");



},[]);



  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Pict type="logo"/>
          <NavItem section="Mac" path="/mac" />
          <NavItem section="iPad" path="/ipad"/>
          <NavItem section="iPhone" path="/iphone"/>
          <NavItem section="Watch" path="/watch"/>
          <NavItem section="TV" path="/tv"/>
          <NavItem section="Music" path="/music"/>
          <NavItem section="Support" path="/support"/>
          <Pict type="find"/>
          <Pict type="cart"/>
        </nav>
      </header>
      <Route exact path="/" component={Home}/>
      <Route path="/mac" component={Home}/>
      <Route path="/ipad" component={Home}/>
      <Route path="/iphone" component={Home}/>
      <Route path="/watch" component={Home}/>
      <Route path="/tv" component={Home}/>
      <Route path="/music" component={Home}/>
      <Route path="/support" component={Home}/>
    </div>
  );
}

export default App;
