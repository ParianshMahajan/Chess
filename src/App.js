import Board from "./Components/Board";
import './App.css'
import SideBar from "./Components/SideBars";
import { useState } from "react";



export default function App(){

    const [BPieces,setBPieces]=useState([]);
    const [WPieces,setWPieces]=useState([]);

    //promotion
    const [promShow,setPromShow]=useState(false);
    const [promData,setPromData]=useState({});
    
    

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
                <div></div>
            )}
            
            <SideBar class={"SideBarL"} arr={WPieces}/>  
            
            <Board  
                cut={(name,link)=>cut(name,link)}  
                prom={(x)=>setPromShow(x)} 
                promData={promData}
            />
            
            
            <SideBar class={"SideBarR"}  arr={BPieces}/>
        </>
    )
}