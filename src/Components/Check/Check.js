import Pieces from "./CheckHighlights"

export default function saveCheck(id,name,turn){
    
    //check by knight
       
        if(name=="WKnight"||name=="BKnight"){
            return(Pieces.Knight.id.move(id,turn))
        }
        else if(name=="WPawn"){
            return(Pieces.WPawn.id.move(id,turn))
        }
        else if(name=="BPawn"){
            return(Pieces.BPawn.id.move(id,turn))
        }
        else if(name=="WRook"||name=="BRook"){
            return(Pieces.Rook.id.move(id,turn))
        }
        else if(name=="BBishop"||name=="WBishop"){
            return(Pieces.Bishop.id.move(id,turn))
        }
        else if(name=="BQueen"||name=="WQueen"){
            return(Pieces.Queen.id.move(id,turn))
        }
        else if(name=="BKing"||name=="WKing"){
            return(Pieces.King.id.move(id,turn))
        }    
    
    else{
        return([])
    }
}