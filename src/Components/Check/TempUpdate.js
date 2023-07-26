import initial from "../Const Data/initial"

let pieces=[]

let val_id=9
let al_id=65
for(let i=0;i<64;i++){
    if(i%8==0){
        val_id-=1
        al_id=65
    }
    pieces.push({
        link:initial([String.fromCharCode(al_id),val_id])[0],
        position:`${([String.fromCharCode(al_id),val_id])[0]}${([String.fromCharCode(al_id),val_id])[1]}`,
        name:initial([String.fromCharCode(al_id),val_id])[1],
    })
    al_id+=1
}




function update2(position,link,name){
    pieces.forEach((e)=>{
        if(e.position==position){
            e.link=link;
            e.name=name;
        }
        })

}



function testUpdate(position,p2){
    let link=getDet(position)[0]
    let name=getDet(position)[1]
    let sendingData=[]
    pieces.forEach((e)=>{ 
        //From
        if(e.position==p2){
            sendingData=[e.link,e.name]
            e.name=name;
            e.link=link;
        }
        if(e.position==position){
            e.name="";
            e.link="";
        }
    })
    return(sendingData);
}

function Revert(position,p2,x){
    let p2link=x[0]
    let p2name=x[1]
    let data=getDet(p2)
    pieces.forEach((e)=>{
        //From
        if(e.position==position){
            e.link=data[0];
            e.name=data[1];
        }
        if(e.position==p2){
            e.name=p2name;
            e.link=p2link;
        }
    })
}

function getDet(pos){
    let link="UD"
    let name="UD"
    pieces.forEach((e)=>{
        if(e.position==pos){
            link=e.link
            name=e.name
        }})
    return([link,name]) 
}





function getname(pos){
    let name=""
    pieces.forEach((e)=>{
        if(e.position==pos){
            name=e.name
        }})
    return(name) 
}

function getWKing(){
    let king=""
    pieces.forEach((e)=>{
        if(e.name=="WKing"){
            king=e.position
        }
    })
    return(king) 
}

function getBKing(){
    let king=""
    pieces.forEach((e)=>{
        if(e.name=="BKing"){
            king=e.position
        }
    })
    return(king) 
}



const converter=(position,x,y)=>{
    let alpha=position[0].charCodeAt(0)
    let num=parseInt(position[1])
    let newpos=`${String.fromCharCode(alpha+x)}${num+y}`;
    return newpos;
}





 function stillCheck(turn){
    //CHECK CONDITION
    let position=""   
    let color=""
    if(turn=="B"){
        if(getBKing()!=""){
            position=getBKing()
        }
        else{
            position="Z9"
        }
        color="W"
    }
    else if(turn=="W"){
        if(getWKing()!=""){
            position=getWKing()
        }
        else{
            position="Z9"
        }
        color="B"
    }


    
    //Pawns
    if(1){

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
        
    }



    //Knights
    if(1){
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
        
    }
        
        

    //Vertically up
    if(1){

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
        
    }
        
        //Vertically Down
    if(1){

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
    }

   //Horizontal Right
    if(1){
        
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
}



   //Horizontally left
   if(1){

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
        
    }


   //UPPER RIGHT
   if(1){

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
    }
       
   
   //UPPER LEFT
   if(1){

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
    }
   
   
   
   //LOWER RIGHT
   if(1){

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
    }

   
   //LOWER LEFT
   if(1){

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

}








export {testUpdate,stillCheck,Revert,update2,getDet}






