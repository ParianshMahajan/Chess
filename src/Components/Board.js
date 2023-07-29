import Square from "./square"
import initial from "./Const Data/initial";
import {button,verifycheck} from "./Const Data/Button";
import { useEffect, useState } from "react";
import { update,updated,getname, getWKing, getBKing, Position } from "./Updated";
import saveCheck from "./Check/Check";
import { update2 } from "./Check/TempUpdate";
import { pawnP } from "./MiscFuncs";


let square=[]
let x=1
let val_id=9
let al_id=65
for(var i=0;i<64;i++){
    if(i%8==0){
        x+=1
        val_id-=1
        al_id=65
    }
    if(x%2==0){
        x=1;
        square.push({
            className:"WhiteSquare",
            id:[String.fromCharCode(al_id),val_id]
        })
        al_id+=1
    }
    else{
        square.push({
            className:"BlackSquare",
            id:[String.fromCharCode(al_id),val_id]
        })
        x=0;
        al_id+=1
    }
}



let row=[]
for(var i=1;i<=8;i++){
    row.push(i);
}



export default function Board(props){    
    
    useEffect(()=>{
    })

    let newlink=require("../Pieces/Highlight.png")
    
    const[highlight,sethighlight]=useState([]);
    const[off,setOff]=useState(0);
    const[previd,setPrev]=useState("Null");    //To send data
    const[prevlink,setPrevlink]=useState("Null");    //To send data
    const[prevname,setPrevname]=useState("Null");    //To send data

    const[move,setMove]=useState("Null");
    const[from,setfrom]=useState("");
    const[target,setTarget]=useState("");
    const[piece,setPiece]=useState("Null");


    //Turn
    const [turn,setTurn]=useState("W")


    //CUT
    const[cut,setCut]=useState(0);

    
    //CHECKMATE
    const[once,setOnce]=useState(true);
    const[check,setCheck]=useState(false);
    
    //Pawn Prom.....
    const[prom,setProm]=useState(false);
    

    function showButtons(id,name,link){
        if(name[0]==turn){
            if(check){
                sethighlight(saveCheck(id,name,turn))
                    // console.log(saveCheck(id,name,turn));
            }
            else{
                    // console.log(saveCheck(id,name,turn));
                    sethighlight(saveCheck(id,name,turn))
            }
            setOff(1)
            setMove("Null")
            setfrom("Null")
            setPrev(id)
            setPrevlink(link)
            setPrevname(name)
            setPiece(name)
            setCut(0)
        }
    }



    //On Click B4 Updating
    function movep(id,id_prev,link,name){
            if(name[0]==turn){

                if(name[0]=="W"){
                    setTurn("B")
                    setProm(pawnP(name,id))
                }
                else if(name[0]=="B"){
                    setTurn("W")
                    setProm(pawnP(name,id))
                }
                setOff(0)
                setfrom(id_prev)
                setMove(id)
                setTarget(link)
                setCut(0)
                
            }
    }
    
    
    
    
    function cutp(id,id_prev,link,name){
            if(name[0]==turn){

                if(name[0]=="W"){
                    setTurn("B")
                }
                else if(name[0]=="B"){
                    setTurn("W")
                }
                setOff(0)
                setfrom(id_prev)
                setMove(id)
                setTarget(link)
                setCut(1)
            }
    }



    // console.log(check);


    return(
        <div className="Board">

            {/* Numeric Labels */}
            <ul className='nums'>
                {row.map((i)=>{return(
                    <li className='Labels'>{i}</li>
                )})}
            </ul>





            {/* Board */}
            <ul className='list'>
                {square.map((i)=>{

                let pos=`${(i.id)[0]}${(i.id)[1]}`
                let link=updated(pos)
                let name=getname(pos)
                let highlightPiece=""

                    
                if(off==1&&highlight!=[]){
                    highlight.map((x)=>{
                        for(var i in x){
                            let e=x[i]
                            if(e==pos){
                                if(link==""){
                                    link=newlink
                                }
                                else if(turn=='W'&&name[0]=='B'){
                                    highlightPiece=newlink
                                    break;
                                }
                                else if(turn=="B"&&name[0]=='W'){
                                    highlightPiece=newlink
                                    break;
                                }
                            }
                        }
                        
                    })
                }


                
                if(pos==move){
                    // Current :: to move
                    if(cut==1&&link!=target){
                        props.cut(name,link);
                        setCut(0);
                    }
                    if(!prom){
                        link=target
                        name=piece
                    }
                    else if(prom){
                        props.prom(prom)
                        let data=props.promData
                        link=data.link
                        name=turn+data.piece
                    }
                    update(pos,link,name)
                    update2(pos,link,name)
                    
                    
                    //Verifycheck
                    if(verifycheck(turn)===true){
                        if(once){
                            setCheck(true);
                            setOnce(false);
                        }
                    }

                }
                if(pos==from){
                    // prev:: to move from
                    link=""
                    name=""
                    update(pos,link,name)
                    update2(pos,link,name)
                }


                    return(
                    <>
                    <Square
                        classname={i.className}
                        position={i.id}
                        previd={previd}
                        link={link}
                        name={name}
                        button={(id,name,link)=>showButtons(id,name,link)}
                        movep={(id,id_prev,link,name)=>movep(id,id_prev,link,name)}
                        cutp={(id,id_prev,link,name)=>cutp(id,id_prev,link,name)}
                        prevlink={prevlink}
                        prevname={prevname}     
                        highlightPiece={highlightPiece}
                    />
                    </>
                )})}
            </ul>






            <ul className='Alpha'>
                {row.map((i)=>{return(
                    <li className='Labels'>{String.fromCharCode(i+64)}</li>
                )})}
            </ul>

        </div>
    )
}