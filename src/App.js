import Board from "./Components/Board";
import './App.css'
import SideBar from "./Components/SideBars";
import { useState } from "react";



export default function App(){

    const [BPieces,setBPieces]=useState([]);
    const [WPieces,setWPieces]=useState([]);
    
    

    function cut(link){
        if(link[14]=="W"){
            let newarr=[...WPieces,link]
            setWPieces(newarr);
        }
        else if(link[14]=="B"){
            let newarr=[...BPieces,link]
            setBPieces(newarr);
        }
    }


    return(
        <>
            <SideBar class={"SideBarL"} arr={WPieces}/>  
            <Board cut={(link)=>cut(link)}/>
            <SideBar class={"SideBarR"}  arr={BPieces}/>
        </>
    )
}