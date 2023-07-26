import initial from "./Const Data/initial"

let Position=[]

let val_id=9
let al_id=65
for(let i=0;i<64;i++){
    if(i%8==0){
        val_id-=1
        al_id=65
    }
    Position.push({
        link:initial([String.fromCharCode(al_id),val_id])[0],
        position:`${([String.fromCharCode(al_id),val_id])[0]}${([String.fromCharCode(al_id),val_id])[1]}`,
        name:initial([String.fromCharCode(al_id),val_id])[1],
    })
    al_id+=1
}




function update(position,link,name){
    Position.forEach((e)=>{
        if(e.position==position){
            e.link=link;
            e.name=name;
        }
        })

}

function updated(pos){
    let link=""
    Position.forEach((e)=>{
        if(e.position==pos){
            link=e.link
        }})
    return(link) 
}

function getname(pos){
    let name=""
    Position.forEach((e)=>{
        if(e.position==pos){
            name=e.name
        }})
    return(name) 
}

function getWKing(){
    let king=""
    Position.forEach((e)=>{
        if(e.name=="WKing"){
            king=e.position
        }
    })
    return(king) 
}

function getBKing(){
    let king=""
    Position.forEach((e)=>{
        if(e.name=="BKing"){
            king=e.position
        }
    })
    return(king) 
}




export {update,updated,getname,getBKing,getWKing,Position}






