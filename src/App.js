import Board from "./Components/Board";
import './App.css'
import SideBar from "./Components/SideBars";
import { useState } from "react";
import PawnProm from "./Popups/PawnProm";



export default function App(){

    const [BPieces,setBPieces]=useState([]);
    const [WPieces,setWPieces]=useState([]);

    //promotion
    const [promShow,setPromShow]=useState(false);
    const [turn,setTurn]=useState("");
    const [promData,setPromData]=useState({link:"",name:""});
    
    

    function cut(name,link){
        if(name[0]=="W"){
            let newarr=[...WPieces,link]
            setWPieces(newarr);
        }
        else if(name[0]=="B"){
            let newarr=[...BPieces,link]
            setBPieces(newarr);
        }
    }


    return(
        <>
            {promShow &&(
                <PawnProm 
                    showPop={()=>setPromShow(false)}
                    setData={(x)=>setPromData(x)}
                    turn={turn}
                />
            )}
            
            <SideBar class={"SideBarL"} arr={WPieces}/>  
            
            <Board  
                cut={(name,link)=>cut(name,link)}  
                prom={(x,turn)=>{setPromShow(x);setTurn(turn)}} 
                promData={promData}
            />
            
            
            <SideBar class={"SideBarR"}  arr={BPieces}/>
        </>
    )
}