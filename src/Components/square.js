import { useState } from "react";
import initial from "./Const Data/initial";

export default function Square(props){
    
    let link=props.link
    let newlink=require("../Pieces/Highlight.png")
    let piece=initial(props)[1];
    

    let id=`${props.position[0]}${props.position[1]}`


    function button(e){
            if(link==newlink){
                props.movep(id,props.previd,props.prevlink,props.prevname);
            }
            else if(props.highlightPiece==newlink){
                props.cutp(id,props.previd,props.prevlink,props.prevname);
            }
            else{
                props.button(id,props.name,link)
            }
        
    }

    






    //css
    let imgClass="img";
    if(link==newlink){
        imgClass="highlight-Piece"
    }

    



    return(
        <>
        <li className={props.classname}>
            <button className="img-bttn" id={id}  onClick={(e)=>button(e)}>
                <img src={props.highlightPiece} alt="" className="highlight-Piece"/>
                <img src={link} alt="" className={imgClass}/>
            </button>
        </li>
        </>
    )
}