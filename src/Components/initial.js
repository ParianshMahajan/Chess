export default function initial(props){
        //Initially
        let color=" "
        if(props.position[1]==1){
            color='W'
        }
        else if(props.position[1]==8){
            color='B'
        }
        let link=""
        
        if (props.position[1]==2){
            link= require("../Pieces/WPawn.png")
        }
        else if(props.position[1]==7){
            link= require("../Pieces/BPawn.png")
        }
        else if((props.position[0]=='A'||props.position[0]=='H')&&(props.position[1]==1||props.position[1]==8)){
            link= require(`../Pieces/${color}Rook.png`)
        }
        else if((props.position[0]=='B'||props.position[0]=='G')&&(props.position[1]==1||props.position[1]==8)){
            link= require(`../Pieces/${color}Knight.png`)
        }
        else if((props.position[0]=='C'||props.position[0]=='F')&&(props.position[1]==1||props.position[1]==8)){
            link= require(`../Pieces/${color}Bishop.png`)
        }
        else if(props.position[0]=='D'&&(props.position[1]==1||props.position[1]==8)){
            link= require(`../Pieces/${color}Queen.png`)
        }
        else if(props.position[0]=='E'&&(props.position[1]==1||props.position[1]==8)){
            link= require(`../Pieces/${color}King.png`)
        }
        return(link)
}










