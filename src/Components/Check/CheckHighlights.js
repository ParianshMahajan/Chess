import { Position, getname } from "../../Components/Updated"
import { testUpdate, stillCheck,Revert, getDet } from "./TempUpdate";




//LETS MAKE CHECKMATE CONDITION

const converter=(position,x,y)=>{
    let alpha=position[0].charCodeAt(0)
    let num=parseInt(position[1])
    let newpos=`${String.fromCharCode(alpha+x)}${num+y}`;
    return newpos;
}






const Pieces={
    Knight:{
            id:{move(position,turn){
                 let alpha=position[0].charCodeAt(0)
                 let num=parseInt(position[1])
                 let send=[]
                 let temp=[
                  `${String.fromCharCode(alpha+2)}${num+1}`,
                  `${String.fromCharCode(alpha+2)}${num-1}`,
                  `${String.fromCharCode(alpha-2)}${num+1}`,
                  `${String.fromCharCode(alpha-2)}${num-1}`,
                  `${String.fromCharCode(alpha+1)}${num-2}`,
                  `${String.fromCharCode(alpha-1)}${num-2}`,
                  `${String.fromCharCode(alpha+1)}${num+2}`,
                  `${String.fromCharCode(alpha-1)}${num+2}`
                 ];
                 
                 //Removing same colour options
                 let color=""
                 if(turn=="B"){
                     color="W"
                 }
                 else if(turn=="W"){
                     color="B"
                 }

                 let possib=[]
                 for(let i in temp){
                  if((getname(temp[i])[0]===color)||(getname(temp[i])==="")){
                     possib.push(temp[i])
                  }
                 }

                 //Making possib unique
                 possib=[...new Set(possib)]




                 for(let i in possib){
                  if(getDet(possib[i])[0]!="UD"){
                     //Storing data of possib[i] in x
                  let x=testUpdate(position,possib[i])
                     if(stillCheck(turn)!==true){
                       
                           send.push(possib[i]);
                        

                        //Revert Back
                        Revert(position,possib[i],x)
                     }
                     else{
                        Revert(position,possib[i],x)
                     }
                 }}
                    return([send])
            }}
            },
    


    WPawn:{
            id:{move(position,turn){
                 let alpha=position[0].charCodeAt(0)
                 let num=parseInt(position[1])
                 let temp=[]
                 let send=[]


                //Enpassant            
                 

                 //Diagonal Cutting
                 if(getname(converter(position,1,1))[0]==='B'){
                    temp.push(converter(position,1,1))
                 }
                 if(getname(converter(position,-1,1))[0]==='B'){
                    temp.push(converter(position,-1,1))
                 }


                 //Simple Moving
                 if(num==2){
                        if(getname(converter(position,0,1))==''){
                            temp.push(converter(position,0,1));
                        }
                        if(getname(converter(position,0,1))==''&&getname(converter(position,0,2))==''){
                            temp.push(converter(position,0,2));
                        }
                    }
                 else{
                    if(getname(converter(position,0,1))==''){
                        temp.push(converter(position,0,1));
                    }
                 }


                 //Removing same colour options
                 let color=""
                 if(turn=="B"){
                     color="W"
                 }
                 else if(turn=="W"){
                     color="B"
                 }

                 let possib=[]
                 for(let i in temp){
                  if((getname(temp[i])[0]===color)||(getname(temp[i])==="")){
                     possib.push(temp[i])
                  }
                 }

                 //Making possib unique
                 possib=[...new Set(possib)]
                 


                 for(let i in possib){
                  if(getDet(possib[i])[0]!="UD"){
                     //Storing data of possib[i] in x
                  let x=testUpdate(position,possib[i])
                     if(stillCheck(turn)!==true){
                        send.push(possib[i]);
                        //Revert Back
                        Revert(position,possib[i],x)
                     }
                     else{
                        Revert(position,possib[i],x)
                     }
                 }}



                 return([send])

                }}
            },
    



    BPawn:{
            id:{move(position,turn){
                 let alpha=position[0].charCodeAt(0)
                 let num=parseInt(position[1])
                 let temp=[]
                 let send=[]
                //Enpassant




                 //Diagonal Cutting
                 if(getname(converter(position,1,-1))[0]==='W'){
                    temp.push(converter(position,1,-1))
                 }
                 if(getname(converter(position,-1,-1))[0]==='W'){
                    temp.push(converter(position,-1,-1))
                 }



                 //Simple moving
                 if(num==7){
                    if(getname(converter(position,0,-1))==''){
                        temp.push(converter(position,0,-1));
                    }
                    if(getname(converter(position,0,-1))==''&&getname(converter(position,0,-2))==''){
                        temp.push(converter(position,0,-2));
                    }
                }
                else{
                    if(getname(converter(position,0,-1))==''){
                        temp.push(converter(position,0,-1));
                    }
                }




                 //Removing same colour options
                 let color=""
                 if(turn=="B"){
                     color="W"
                 }
                 else if(turn=="W"){
                     color="B"
                 }

                 let possib=[]
                 for(let i in temp){
                  if((getname(temp[i])[0]===color)||(getname(temp[i])==="")){
                     possib.push(temp[i])
                  }
                 }

                 //Making possib unique
                 possib=[...new Set(possib)]




                for(let i in possib){
                  if(getDet(possib[i])[0]!="UD"){
                     //Storing data of possib[i] in x
                  let x=testUpdate(position,possib[i])
                     if(stillCheck(turn)!==true){
                        send.push(possib[i]);
                        //Revert Back
                        Revert(position,possib[i],x)
                     }
                     else{
                        Revert(position,possib[i],x)
                     }
                 }}


                 
                    return([send])
                 
                }}
            },






            
    Rook:{
            id:{move(position,turn){
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


                let temp=[...rowVU,...rowVD,...rowHR,...rowHL]


                 //Removing same colour options
                 let color=""
                 if(turn=="B"){
                     color="W"
                 }
                 else if(turn=="W"){
                     color="B"
                 }

                 let possib=[]
                 for(let i in temp){
                  if((getname(temp[i])[0]===color)||(getname(temp[i])==="")){
                     possib.push(temp[i])
                  }
                 }

                 //Making possib unique
                 possib=[...new Set(possib)]
                


                let send=[]
                for(let i in possib){
                  if(getDet(possib[i])[0]!="UD"){
                     //Storing data of possib[i] in x
                  let x=testUpdate(position,possib[i])
                     if(stillCheck(turn)!==true){
                        send.push(possib[i]);
                        //Revert Back
                        Revert(position,possib[i],x)
                     }
                     else{
                        Revert(position,possib[i],x)
                     }
                 }}


                 return([send])
                }}
            },
    







    Bishop:{
            id:{move(position,turn){
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
                
                
                
                let temp=[...rowUR,...rowLL,...rowLR,...rowUL]
               
                 //Removing same colour options
                 let color=""
                 if(turn=="B"){
                     color="W"
                 }
                 else if(turn=="W"){
                     color="B"
                 }

                 let possib=[]
                 for(let i in temp){
                  if((getname(temp[i])[0]===color)||(getname(temp[i])==="")){
                     possib.push(temp[i])
                  }
                 }

                 //Making possib unique
                 possib=[...new Set(possib)]
               
               
               
               
                let send=[]
                for(let i in possib){
                  //Storing data of possib[i] in x
                  if(getDet(possib[i])[0]!="UD"){

                     let x=testUpdate(position,possib[i])
                     // console.log(possib[i],stillCheck(turn),x);
                     if(stillCheck(turn)!==true){
                        send.push(possib[i]);
                        //Revert Back
                        Revert(position,possib[i],x)
                     }
                     else{
                        Revert(position,possib[i],x)
                     }
                  }
                 }


                 return([send])
                }}

            },
    








    Queen:{
            id:{move(position,turn){
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

                let temp=[...rowVU,...rowVD,...rowHR,...rowHL,...rowUR,...rowLL,...rowLR,...rowUL]


                 //Removing same colour options
                 let color=""
                 if(turn=="B"){
                     color="W"
                 }
                 else if(turn=="W"){
                     color="B"
                 }

                 let possib=[]
                 for(let i in temp){
                  if((getname(temp[i])[0]===color)||(getname(temp[i])==="")){
                     possib.push(temp[i])
                  }
                 }

                 //Making possib unique
                 possib=[...new Set(possib)]


                let send=[]
                for(let i in possib){
                  //Storing data of possib[i] in x
                  if(getDet(possib[i])[0]!="UD"){

                     let x=testUpdate(position,possib[i])
                     
                     if(stillCheck(turn)!==true){
                        send.push(possib[i]);
                        //Revert Back
                        Revert(position,possib[i],x)
                     }
                     else{
                        Revert(position,possib[i],x)
                     }
                 }}


                 return([send])
                }}
            },





    King:{
            id:{
                move(position,turn){
                

                //CHECKMATE CONDITION   
                
                let temp= [
                        converter(position,1,0),
                        converter(position,-1,0),
                        converter(position,0,1),
                        converter(position,0,-1),
                        converter(position,1,1),
                        converter(position,1,-1),
                        converter(position,-1,-1),
                        converter(position,-1,1),
                    ]  
                    
                    
                 //Removing same colour options
                 let color=""
                 if(turn=="B"){
                     color="W"
                 }
                 else if(turn=="W"){
                     color="B"
                 }

                 let possib=[]
                 for(let i in temp){
                  if((getname(temp[i])[0]===color)||(getname(temp[i])==="")){
                     possib.push(temp[i])
                  }
                 }

                 //Making possib unique
                 possib=[...new Set(possib)]



                  let send=[]
                    for(let i in possib){
                      //Storing data of possib[i] in x
                      if(getDet(possib[i])[0]!="UD"){
                        let x=testUpdate(position,possib[i])
                         if(stillCheck(turn)!==true){
                            send.push(possib[i]);
                            //Revert Back
                            Revert(position,possib[i],x)
                         }
                         else{
                            Revert(position,possib[i],x)
                         }
                     }}
    
    
                     return([send])
                }}
            },
    


}


export default Pieces;



