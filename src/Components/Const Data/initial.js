export default function initial(position){
        //Initially
        let color=" "
        if(position[1]==1){
            color='W'
        }
        else if(position[1]==8){
            color='B'
        }
        let link=""
        let piece=""
        
        if (position[1]==2){
            piece="WPawn"
            link= require("../../Pieces/WPawn.png")
        }
        else if(position[1]==7){
            piece="BPawn"
            link= require("../../Pieces/BPawn.png")
        }
        else if((position[0]=='A'||position[0]=='H')&&(position[1]==1||position[1]==8)){
            link= require(`../../Pieces/${color}Rook.png`)
            piece="Rook"
        }
        else if((position[0]=='B'||position[0]=='G')&&(position[1]==1||position[1]==8)){
            link= require(`../../Pieces/${color}Knight.png`)
            piece="Knight"
        }
        else if((position[0]=='C'||position[0]=='F')&&(position[1]==1||position[1]==8)){
            link= require(`../../Pieces/${color}Bishop.png`)
            piece="Bishop"
        }
        else if(position[0]=='D'&&(position[1]==1||position[1]==8)){
            link= require(`../../Pieces/${color}Queen.png`)
            piece="Queen"
        }
        else if(position[0]=='E'&&(position[1]==1||position[1]==8)){
            link= require(`../../Pieces/${color}King.png`)
            piece="King"
        }
        return([link,piece])
}










