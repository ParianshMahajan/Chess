import Pieces from "./CheckHighlights"

export default function button(id,name,Cname,Cid){
    
    //check by knight
       
        if(name=="WKnight"||name=="BKnight"){
            return(Pieces.Knight.id.move(id,Cname,Cid))
        }
        else if(name=="WPawn"){
            return(Pieces.WPawn.id.move(id,Cname,Cid))
        }
        else if(name=="BPawn"){
            return(Pieces.BPawn.id.move(id,Cname,Cid))
        }
        else if(name=="WRook"||name=="BRook"){
            return(Pieces.Rook.id.move(id,Cname,Cid))
        }
        else if(name=="BBishop"||name=="WBishop"){
            return(Pieces.Bishop.id.move(id,Cname,Cid))
        }
        else if(name=="BQueen"||name=="WQueen"){
            return(Pieces.Queen.id.move(id,Cname,Cid))
        }
        else if(name=="BKing"||name=="WKing"){
            return(Pieces.King.id.move(id,Cname,Cid))
        }    
    
    else{
        return([])
    }
}