import { useState } from "react";
import initial from "./Const Data/initial";

export default function Square(props){
    
    let link=props.link
    let newlink=require("../Pieces/Button.png")
    let piece=initial(props)[1];
    
    let id=`${props.position[0]}${props.position[1]}`

    function button(e){
        if(link==newlink){
            props.movep(id,props.previd,props.prevlink);
        }
        else{
            props.button(id,props.name,link)
            // console.log(id,props.name,link);
        }
    }

    return(
        <>
        <li className={props.classname}>
            <button className="img-bttn" id={id}  onClick={(e)=>button(e)}>
            <img src={link} alt="" className="img"/>
            </button>
        </li>
        </>
    )
}