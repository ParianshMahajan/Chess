import Pieces from "./Pieces"

export default function button(id,name){
    if(name=="Knight"){
        return(Pieces.Knight.id.move(id))
    }
    else if(name=="WPawn"){
        return(Pieces.WPawn.id.move(id))
    }
    else if(name=="BPawn"){
        return(Pieces.BPawn.id.move(id))
    }
    else if(name=="Rook"){
        return(Pieces.Rook.id.move(id))
    }
    else if(name=="Bishop"){
        return(Pieces.Bishop.id.move(id))
    }
    else if(name=="Queen"){
        return(Pieces.Queen.id.move(id))
    }
    else if(name=="King"){
        return(Pieces.King.id.move(id))
    }
    else{
        return([])
    }
}