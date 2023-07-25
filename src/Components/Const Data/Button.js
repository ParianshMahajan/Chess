import { getBKing, getWKing, getname } from "../Updated"
import Pieces from "./Pieces"



 function button(id,name){
    if(name=="WKnight"||name=="BKnight"){
        return(Pieces.Knight.id.move(id,name))
    }
    else if(name=="WPawn"){
        return(Pieces.WPawn.id.move(id,name))
    }
    else if(name=="BPawn"){
        return(Pieces.BPawn.id.move(id,name))
    }
    else if(name=="WRook"||name=="BRook"){
        return(Pieces.Rook.id.move(id,name))
    }
    else if(name=="BBishop"||name=="WBishop"){
        return(Pieces.Bishop.id.move(id,name))
    }
    else if(name=="BQueen"||name=="WQueen"){
        return(Pieces.Queen.id.move(id,name))
    }
    else if(name=="BKing"||name=="WKing"){
        return(Pieces.King.id.move(id,name))
    }
    else{
        return([])
    }
}





const converter=(position,x,y)=>{
    let alpha=position[0].charCodeAt(0)
    let num=parseInt(position[1])
    let newpos=`${String.fromCharCode(alpha+x)}${num+y}`;
    return newpos;
}


 function verifycheck(turn){
    //CHECK CONDITION
    let position=""   
    let color=""
    if(turn=="B"){
        position=getBKing()
        color="W"
    }
    else if(turn=="W"){
        position=getWKing()
        color="B"
    }


    
    //Pawns
    if(turn=="B"){
        if(getname(converter(position,-1,-1))==`WPawn`||getname(converter(position,1,-1))==`WPawn`){
            return(true)   
        }
    }
    else if(turn=="W"){
       if(getname(converter(position,-1,1))==`BPawn`||getname(converter(position,1,1))==`BPawn`){
            return(true)   
       }
    }




    //Knights
    let send=[
        converter(position,2,1),
        converter(position,2,-1),
        converter(position,-2,1),
        converter(position,-2,-1),
        converter(position,1,2),
        converter(position,1,-2),
        converter(position,-1,2),
        converter(position,-1,-2),
    ];
    for(let i in send){
        let x=send[i];
        if(getname(x)==`${color}Knight`||getname(x)==`${color}Knight`){
            return(true)
        }
    }   




    //Vertically up
    for(let i=1;i<=8;i++){
        let x=converter(position,0,i);
        if(getname(x)!=""){
            if(getname(x)==`${color}Queen`||getname(x)==`${color}Rook`){
                return(true)
            }
            else{
                break;
            }
        }
    }     
       

    //Vertically Down
    for(let i=1;i<=8;i++){
        let x=converter(position,0,-i);
        if(getname(x)!=""){
            if(getname(x)==`${color}Queen`||getname(x)==`${color}Rook`){
                return(true)
            }
            else{
                break;
            }
        }
     }
   
   //Horizontal Right
   for(let i=1;i<=8;i++){
       let x=converter(position,i,0);
       if(getname(x)!=""){
        if(getname(x)==`${color}Queen`||getname(x)==`${color}Rook`){
            return(true)
        }
        else{
            break;
        }
    }
   }



   //Horizontally left
   for(let i=1;i<=8;i++){
       let x=converter(position,-i,0);
       if(getname(x)!=""){
        if(getname(x)==`${color}Queen`||getname(x)==`${color}Rook`){
            return(true)
        }
        else{
            break;
        }
    }
   }



   //UPPER RIGHT
    for(let i=1;i<=8;i++){
       let x=converter(position,i,i);
       if(getname(x)!=""){
        if(getname(x)==`${color}Queen`||getname(x)==`${color}Bishop`){
            return(true)
        }
        else{
            break;
        }
    }
   }    
       
   
   //UPPER LEFT
   for(let i=1;i<=8;i++){
       let x=converter(position,-i,i);
       if(getname(x)!=""){
        if(getname(x)==`${color}Queen`||getname(x)==`${color}Bishop`){
            return(true)
        }
        else{
            break;
        }
    }
   }
   
   
   
   //LOWER RIGHT
   for(let i=1;i<=8;i++){
        let x=converter(position,i,-i);
        if(getname(x)!=""){
        if(getname(x)==`${color}Queen`||getname(x)==`${color}Bishop`){
            return(true)
        }
        else{
            break;
        }
    }
   }

   
   //LOWER LEFT
   for(let i=1;i<=8;i++){
       let x=converter(position,-i,-i);
       if(getname(x)!=""){
        if(getname(x)==`${color}Queen`||getname(x)==`${color}Bishop`){
            return(true)
        }
        else{
            break;
        }
    }
   }





 


}


export {button,verifycheck}