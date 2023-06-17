import { useState } from "react";
import initial from "./initial";

export default function Square(props){
    
    let link=props.link

    let piece=initial(props)[1];
    
    let id=`${props.position[0]}${props.position[1]}`

    function button(id){
        props.button(id)
    }

    return(
        <>
        <li className={props.classname}>
            <button className="img-bttn" id={id}  onClick={(id)=>button(id)}>
            <img src={link} alt="" className="img"/>
            </button>
        </li>
        </>
    )
}