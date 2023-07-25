import Pieces from "./CheckHighlights"

export default function button(id,name,Cname,Cid){
    
    //check by knight
    if(Cname=="WKnight"||Cname=="BKnight"){
       
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
    
    }
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