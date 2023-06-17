import { useState } from "react";
import initial from "./initial";

export default function Square(props){
    
    let link=props.link

    let piece=initial(props)[1];
    
    let id=`${props.position[0]}${props.position[1]}`

    function button(){
        props.button(id,props.name)
    }

    return(
        <>
        <li className={props.classname}>
            <button className="img-bttn" id={id}  onClick={()=>button()}>
            <img src={link} alt="" className="img"/>
            </button>
        </li>
        </>
    )
}