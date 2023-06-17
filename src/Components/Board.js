import Square from "./square"
import initial from "./initial";
import button from "./Button";
import { useState } from "react";




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



export default function Board(){

    let newlink=require("../Pieces/Button.png")

    const[highlight,sethighlight]=useState([]);
    function settinglink(id,name){
        console.log(name);
        sethighlight(button(id,name))

    }       
    return(
        <div className="Board">
        

            <ul className='nums'>
                {row.map((i)=>{return(
                    <li className='Labels'>{i}</li>
                )})}     
            </ul>



            <ul className='list'>
                {square.map((i)=>{

                let link=initial(i.id)[0]    
                let pos=`${(i.id)[0]}${(i.id)[1]}`

                
                if(highlight!=[]){
                    highlight.map((e)=>{
                        if(e==pos&&link==""){
                            link=newlink
                        }
                    })
                }
                    return(
                    <>
                    < Square classname={i.className} position={i.id} link={link} name={initial(i.id)[1]} button={(id,name)=>settinglink(id,name)} />
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