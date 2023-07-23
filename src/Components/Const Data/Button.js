import Pieces from "./Pieces"

export default function button(id,name){
    if(name=="WKnight"||name=="BKnight"){
        return(Pieces.Knight.id.move(id))
    }
    else if(name=="WPawn"){
        return(Pieces.WPawn.id.move(id))
    }
    else if(name=="BPawn"){
        return(Pieces.BPawn.id.move(id))
    }
    else if(name=="WRook"||name=="BRook"){
        return(Pieces.Rook.id.move(id))
    }
    else if(name=="BBishop"||name=="WBishop"){
        return(Pieces.Bishop.id.move(id))
    }
    else if(name=="BQueen"||name=="WQueen"){
        return(Pieces.Queen.id.move(id))
    }
    else if(name=="BKing"||name=="WKing"){
        return(Pieces.King.id.move(id))
    }
    else{
        return([])
    }
}