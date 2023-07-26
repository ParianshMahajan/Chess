import { getname } from "../../Components/Updated"




//LETS MAKE CHECKMATE CONDITION

const converter=(position,x,y)=>{
    let alpha=position[0].charCodeAt(0)
    let num=parseInt(position[1])
    let newpos=`${String.fromCharCode(alpha+x)}${num+y}`;
    return newpos;
}






const Pieces={
    Knight:{
            id:{move(position,Cname,Cid){
                 let alpha=position[0].charCodeAt(0)
                 let num=parseInt(position[1])
                 let send=[]
                 let possib=[
                  `${String.fromCharCode(alpha+2)}${num+1}`,
                  `${String.fromCharCode(alpha+2)}${num-1}`,
                  `${String.fromCharCode(alpha-2)}${num+1}`,
                  `${String.fromCharCode(alpha-2)}${num-1}`,
                  `${String.fromCharCode(alpha+1)}${num-2}`,
                  `${String.fromCharCode(alpha-1)}${num-2}`,
                  `${String.fromCharCode(alpha+1)}${num+2}`,
                  `${String.fromCharCode(alpha-1)}${num+2}`
                 ];
                 
                 for(let i in possib){

                  if(possib[i]===Cid){
                     send.push(possib[i])
                  }

                  if(Cname=="WQueen"||Cname=="BQueen"){

                  }
                 }

                    return([send])
            }}
            },
    


    WPawn:{
            id:{move(position,name){
                 let alpha=position[0].charCodeAt(0)
                 let num=parseInt(position[1])
                 let send=[]


                //Enpassant            
                 

                 //Diagonal Cutting
                 if(getname(converter(position,1,1))[0]==='B'){
                    send.push(converter(position,1,1))
                 }
                 if(getname(converter(position,-1,1))[0]==='B'){
                    send.push(converter(position,-1,1))
                 }


                 //Simple Moving
                 if(num==2){
                        if(getname(converter(position,0,1))==''){
                            send.push(converter(position,0,1));
                        }
                        if(getname(converter(position,0,1))==''&&getname(converter(position,0,2))==''){
                            send.push(converter(position,0,2));
                        }
                    }
                 else{
                    if(getname(converter(position,0,1))==''){
                        send.push(converter(position,0,1));
                    }
                 }



                 return([send])

                }}
            },
    



    BPawn:{
            id:{move(position,name){
                 let alpha=position[0].charCodeAt(0)
                 let num=parseInt(position[1])
                 let send=[]
                //Enpassant




                 //Diagonal Cutting
                 if(getname(converter(position,1,-1))[0]==='W'){
                    send.push(converter(position,1,-1))
                 }
                 if(getname(converter(position,-1,-1))[0]==='W'){
                    send.push(converter(position,-1,-1))
                 }



                 //Simple moving
                 if(num==7){
                    if(getname(converter(position,0,-1))==''){
                        send.push(converter(position,0,-1));
                    }
                    if(getname(converter(position,0,-1))==''&&getname(converter(position,0,-2))==''){
                        send.push(converter(position,0,-2));
                    }
                }
                else{
                    if(getname(converter(position,0,-1))==''){
                        send.push(converter(position,0,-1));
                    }
                }





                 
                    return([send])
                 
                }}
            },






            
    Rook:{
            id:{move(position,name){
                 let alpha=position[0].charCodeAt(0)
                 let num=parseInt(position[1])




                 //Vertically up
                 let rowVU=[]
                 for(let i=1;i<=8;i++){
                    
                    //Stopping Condition
                    let x=converter(position,0,i); 
                    if(getname(x)[0]==="B"||getname(x)[0]==="W"){
                       rowVU.push(x);
                       break;
                    }
                    else{
                       rowVU.push(x)
                    }
                    
                }     
                    



                //Vertically Down
                let rowVD=[]
                for(let i=1;i<=8;i++){
                    let x=converter(position,0,-i);
                    if(getname(x)[0]==="B"||getname(x)[0]==="W"){
                       rowVD.push(x);
                       break;
                    }
                    else{
                       rowVD.push(x)
                    }
                }
                


                //Horizontal Right
                let rowHR=[]
                for(let i=1;i<=8;i++){
                    let x=converter(position,i,0);
                    if(getname(x)[0]==="B"||getname(x)[0]==="W"){
                       rowHR.push(x);
                       break;
                    }
                    else{
                       rowHR.push(x)
                    }
                }



                //Horizontally left
                let rowHL=[]
                for(let i=1;i<=8;i++){
                    let x=converter(position,-i,0);
                    if(getname(x)[0]==="B"||getname(x)[0]==="W"){
                       rowHL.push(x);
                       break;
                    }
                    else{
                       rowHL.push(x)
                    }
                }


                let pos=[rowVU,rowVD,rowHR,rowHL]
                 return(pos)
                }}
            },
    







    Bishop:{
            id:{move(position,name){
                 let alpha=position[0].charCodeAt(0)
                 let num=parseInt(position[1])
                 

                 //UPPER RIGHT
                 let rowUR=[]
                 for(let i=1;i<=8;i++){
                    let x=converter(position,i,i);
                    if(getname(x)[0]==="B"||getname(x)[0]==="W"){
                       rowUR.push(x);
                       break;
                    }
                    else{
                       rowUR.push(x)
                    }
                }    
                    
                
                //UPPER LEFT
                let rowUL=[]
                for(let i=1;i<=8;i++){
                    rowUL.push(`${String.fromCharCode(alpha-i)}${num+i}`)
                    let x=converter(position,-i,i);
                    if(getname(x)[0]==="B"||getname(x)[0]==="W"){
                       rowUL.push(x);
                       break;
                    }
                    else{
                       rowUL.push(x)
                    }
                }
                
                
                
                //LOWER RIGHT
                let rowLR=[]
                for(let i=1;i<=8;i++){
                    let x=converter(position,i,-i);
                    if(getname(x)[0]==="B"||getname(x)[0]==="W"){
                       rowLR.push(x);
                       break;
                    }
                    else{
                       rowLR.push(x)
                    }
                }

                
                //LOWER LEFT
                let rowLL=[]
                for(let i=1;i<=8;i++){
                    let x=converter(position,-i,-i);
                    if(getname(x)[0]==="B"||getname(x)[0]==="W"){
                       rowLL.push(x);
                       break;
                    }
                    else{
                       rowLL.push(x)
                    }
                }
                
                
                
                let pos=[rowUR,rowLL,rowLR,rowUL]
                 return(pos)
                }}

            },
    








    Queen:{
            id:{move(position,name){
                 let alpha=position[0].charCodeAt(0)
                 let num=parseInt(position[1])

                
                
                
                 //Vertically up
                 let rowVU=[]
                 for(let i=1;i<=8;i++){
                    
                    //Stopping Condition
                    let x=converter(position,0,i);
                    if(getname(x)[0]==="B"||getname(x)[0]==="W"){
                       rowVU.push(x);
                       break;
                    }
                    else{
                       rowVU.push(x)
                    }
                }     
                    



                //Vertically Down
                let rowVD=[]
                for(let i=1;i<=8;i++){
                    let x=converter(position,0,-i);
                    if(getname(x)[0]==="B"||getname(x)[0]==="W"){
                       rowVD.push(x);
                       break;
                    }
                    else{
                       rowVD.push(x)
                    }
                }
                


                //Horizontal Right
                let rowHR=[]
                for(let i=1;i<=8;i++){
                    let x=converter(position,i,0);
                    if(getname(x)[0]==="B"||getname(x)[0]==="W"){
                       rowHR.push(x);
                       break;
                    }
                    else{
                       rowHR.push(x)
                    }
                }



                //Horizontally left
                let rowHL=[]
                for(let i=1;i<=8;i++){
                    let x=converter(position,-i,0);
                    if(getname(x)[0]==="B"||getname(x)[0]==="W"){
                       rowHL.push(x);
                       break;
                    }
                    else{
                       rowHL.push(x)
                    }
                }



                //UPPER RIGHT
                 let rowUR=[]
                 for(let i=1;i<=8;i++){
                    let x=converter(position,i,i);
                    if(getname(x)[0]==="B"||getname(x)[0]==="W"){
                       rowUR.push(x);
                       break;
                    }
                    else{
                       rowUR.push(x)
                    }
                }    
                    
                
                //UPPER LEFT
                let rowUL=[]
                for(let i=1;i<=8;i++){
                    rowUL.push(`${String.fromCharCode(alpha-i)}${num+i}`)
                    let x=converter(position,-i,i);
                    if(getname(x)[0]==="B"||getname(x)[0]==="W"){
                       rowUL.push(x);
                       break;
                    }
                    else{
                       rowUL.push(x)
                    }
                }
                
                
                
                //LOWER RIGHT
                let rowLR=[]
                for(let i=1;i<=8;i++){
                    let x=converter(position,i,-i);
                    if(getname(x)[0]==="B"||getname(x)[0]==="W"){
                       rowLR.push(x);
                       break;
                    }
                    else{
                       rowLR.push(x)
                    }
                }

                
                //LOWER LEFT
                let rowLL=[]
                for(let i=1;i<=8;i++){
                    let x=converter(position,-i,-i);
                    if(getname(x)[0]==="B"||getname(x)[0]==="W"){
                       rowLL.push(x);
                       break;
                    }
                    else{
                       rowLL.push(x)
                    }
                }

                let pos=[rowVU,rowVD,rowHR,rowHL,rowUR,rowLL,rowLR,rowUL]
                 return(pos)
                }}
            },





    King:{
            id:{
                move(position,name){
                let alpha=position[0].charCodeAt(0)
                let num=parseInt(position[1])
                

                //CHECKMATE CONDITION   
                return(
                    [[
                        converter(position,1,0),
                        converter(position,-1,0),
                        converter(position,0,1),
                        converter(position,0,-1),
                        converter(position,1,1),
                        converter(position,1,-1),
                        converter(position,-1,-1),
                        converter(position,-1,1),
                    ]]     
                )
                }}
            },
    


}


export default Pieces;



