import React, {useEffect} from 'react';
import './App.scss';
import {Route} from 'react-router-dom';
import NavItem from './components/NavItem.js';
import Pict from './components/Pict.js';
import Home from './components/Home.js';
import SubNav from './components/SubNav.js';

function App() {

useEffect(()=>{

},[]);



  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Pict type="logo"/>
          <NavItem section="Mac" path="/mac" level="top"/>
          <NavItem section="iPad" path="/ipad" level="top"/>
          <NavItem section="iPhone" path="/iphone" level="top"/>
          <NavItem section="Watch" path="/watch" level="top"/>
          <NavItem section="TV" path="/tv" level="top"/>
          <NavItem section="Music" path="/music" level="top"/>
          <NavItem section="Support" path="/support" level="top"/>
          <Pict type="find"/>
          <Pict type="cart"/>
        </nav>
        <Route path="/:tech" component={SubNav}/>
        <section className="main">
          <Route exact path="/" component={Home}/>
          <Route path="/mac" component={Home}/>
          <Route path="/ipad" component={Home}/>
          <Route path="/iphone" component={Home}/>
          <Route path="/watch" component={Home}/>
          <Route path="/tv" component={Home}/>
          <Route path="/music" component={Home}/>
          <Route path="/support" component={Home}/>
        </section>
      </header>
    </div>
  );
}

export default App;
