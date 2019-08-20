import React from 'react';
import {NavLink, Route} from 'react-router-dom';

const subs={
    mac:["Stuff"],
    ipad:["Stuff"],
    iphone:["Stuff"],
    watch:["Stuff"],
    tv:["Stuff"],
    music:["Stuff"],
    support:["Stuff"]
};

function SubNav(props){
    // console.log(props.match.params.tech);
    return (
        <div className="subNav">
            <NavLink to="/">Stuff and shit</NavLink>
        </div>
    )
}

export default SubNav;