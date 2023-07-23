import Square from "./square"
import initial from "./Const Data/initial";
import button from "./Const Data/Button";
import { useState } from "react";
import { update,updated,getname } from "./Updated";



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
    

    let newlink=require("../Pieces/Highlight.png")
    const[highlight,sethighlight]=useState([]);
    const[off,setOff]=useState(0);
    const[previd,setPrev]=useState("Null");    //To send data
    const[prevlink,setPrevlink]=useState("Null");    //To send data

    const[move,setMove]=useState("Null");
    const[from,setfrom]=useState("");
    const[target,setTarget]=useState("");
    const[piece,setPiece]=useState("Null");


    //Turn
    const [turn,setTurn]=useState("W")


    //CUT
    const[cut,setCut]=useState(0);

    function showButtons(id,name,link){
        if(link[14]==turn){
            sethighlight(button(id,name))
            setOff(1)
            setMove("Null")
            setfrom("Null")
            setPrev(id)
            setPrevlink(link)
            setPiece(name)
            setCut(0)
        }
    }

    function movep(id,id_prev,link){
            if(link[14]==turn){

                if(link[14]=="W"){
                    setTurn("B")
                }
                else if(link[14]=="B"){
                    setTurn("W")
                }

                setOff(0)
                setfrom(id_prev)
                setMove(id)
                setTarget(link)
                setCut(0)
            }
    }
    
    
    
    
    function cutp(id,id_prev,link){
            if(link[14]==turn){

                if(link[14]=="W"){
                    setTurn("B")
                }
                else if(link[14]=="B"){
                    setTurn("W")
                }

                setOff(0)
                setfrom(id_prev)
                setMove(id)
                setTarget(link)
                setCut(1)
            }
    }






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
                                else if(turn=='W'&&link[14]=='B'){
                                    highlightPiece=newlink
                                    break;
                                }
                                else if(turn=="B"&&link[14]=='W'){
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
                        props.cut(link);
                        setCut(0);
                    }
                    link=target
                    name=piece
                    update(pos,link,name)
                }
                if(pos==from){
                    // prev:: to move from
                    link=""
                    name=""
                    update(pos,link,name)
                }


                    return(
                    <>
                    < Square
                        classname={i.className}
                        position={i.id}
                        previd={previd}
                        link={link}
                        name={name}
                        button={(id,name,link)=>showButtons(id,name,link)}
                        movep={(id,id_prev,link)=>movep(id,id_prev,link)}
                        cutp={(id,id_prev,link)=>cutp(id,id_prev,link)}
                        prevlink={prevlink}
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