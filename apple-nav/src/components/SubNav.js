import React from 'react';
import {NavLink, Route} from 'react-router-dom';



function SubNav(props){

    const subs=[
        {id:"mac",mac:["Stuff","Other Stuff"]},
        {id:"ipad",ipad:["Stuff","Other Stuff"]},
        {id:"iphone",iphone:["Stuff","Other Stuff"]},
        {id:"watch",watch:["Stuff"]},
        {id:"tv",tv:["Stuff"]},
        {id:"music",music:["Stuff"]},
        {id:"support",support:["Stuff"]}
    ];

    // console.log(props.match.params.tech);
    const items=subs.find((item)=>{
        return props.match.params.tech===String(item.id)
    });
    // console.log(items);
    return (
        <div className="subNav">
            <NavLink className="subNavLink" to="/"><h2>Start</h2></NavLink>
            {items[props.match.params.tech].forEach((item)=>{
                console.log(item);
                return <NavLink className="subNavLink" to="/"><h2>{item}</h2></NavLink>
            })}
            <NavLink className="subNavLink" to="/"><h2>End</h2></NavLink>

        </div>
    )
}

export default SubNav;