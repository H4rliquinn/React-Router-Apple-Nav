import React from 'react';
// import {NavLink} from 'react-router-dom';

function Home(props){

    return (
        <div>
          <h1>Home - {props.location.pathname}</h1>
        </div>
    )
}

export default Home;