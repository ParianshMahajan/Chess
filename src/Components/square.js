import { useState } from "react";
import initial from "./initial";

export default function Square(props){
    
    const link=initial(props);


    return(
        <>
        <li className={props.classname}>
            <button className="img-bttn">
            <img src={link} alt="" className="img"/>
            </button>
        </li>
        </>
    )
}