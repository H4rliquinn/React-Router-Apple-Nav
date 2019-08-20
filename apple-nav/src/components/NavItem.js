import React from 'react';
import {NavLink} from 'react-router-dom';

function NavItem(props){

    return (
        <div className="navItem">
           <NavLink to={props.path}>{props.section}</NavLink> 
        </div>
    )
}

export default NavItem;


