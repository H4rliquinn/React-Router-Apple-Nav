import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/free-brands-svg-icons';
import {faSuitcase,faSearch } from "@fortawesome/free-solid-svg-icons";

function Pict(props){
    let logo=faApple;
    if (props.type==="logo"){
        logo=faApple;
    } else if (props.type==="find"){
        logo=faSearch;
    }  else if (props.type==="cart"){
        logo=faSuitcase;
    } 

    return (
        <div className="pict">
            <FontAwesomeIcon icon={logo}/>
        </div>
    )
}

export default Pict;