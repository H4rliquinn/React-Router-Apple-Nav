import React from 'react';
import {NavLink, Route} from 'react-router-dom';



function SubNav(props){

    const subs=[
        {id:"mac",mac:["MacBook Air","MacBook Pro"]},
        {id:"ipad",ipad:["iPad Pro","iPad Air"]},
        {id:"iphone",iphone:["iPhone XS","iPhone Xr"]},
        {id:"watch",watch:["Apple Watch Series 4","Apple Watch Nike+"]},
        {id:"tv",tv:["Apple TV app", "Apple TV+"]},
        {id:"music",music:["Apple Music", "iTunes"]},
        {id:"support",support:["Stuff"]}
    ];

    // console.log(props.match.params.tech);
    const items=subs.find((item)=>{
        return props.match.params.tech===String(item.id)
    });
    // console.log(items);
    return (
        <div className="subNav">
            {items[props.match.params.tech].map((item)=>{
                return <NavLink className="subNavLink" to="/" key={item}><h2>{item}</h2></NavLink>
            })}
        </div>
    )
}

export default SubNav;