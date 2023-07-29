//Pawn Promotion

const pawnP=(name,id)=>{
    let num=parseInt(id[1])
    if(name==="WPawn"){
        console.log("yayy",num);
        if(num===8){
            return true;
        }
        else{
            return false;
        }
    }
    else if(name==="BPawn"){
        if(num===1){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}


export {pawnP}