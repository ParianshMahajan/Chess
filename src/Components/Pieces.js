const Pieces={
    Knight:{
            id:{move(position){
                 let alpha=position[0].charCodeAt(0)
                 let num=parseInt(position[1])
                return(
                    [
                        `${String.fromCharCode(alpha+2)}${num+1}`,
                        `${String.fromCharCode(alpha+2)}${num-1}`,
                        `${String.fromCharCode(alpha-2)}${num+1}`,
                        `${String.fromCharCode(alpha-2)}${num-1}`,
                        `${String.fromCharCode(alpha+1)}${num-2}`,
                        `${String.fromCharCode(alpha-1)}${num-2}`,
                        `${String.fromCharCode(alpha+1)}${num+2}`,
                        `${String.fromCharCode(alpha-1)}${num+2}`,
                    ]     
                )
            }}
            },
    
    WPawn:{
            id:{move(position){
                 let alpha=position[0].charCodeAt(0)
                 let num=parseInt(position[1])
                 if(num==2){
                     
                     return(
                         [
                             `${String.fromCharCode(alpha)}${num+1}`,
                             `${String.fromCharCode(alpha)}${num+2}`,
                            ]     
                            )
                    }
                 else{
                    return(
                        [
                            `${String.fromCharCode(alpha)}${num+1}`,
                           ]     
                    )
                 }
                }}
            },
    
    BPawn:{
            id:{move(position){
                 let alpha=position[0].charCodeAt(0)
                 let num=parseInt(position[1])
                 if(num==7){
                     
                     return(
                         [
                             `${String.fromCharCode(alpha)}${num-1}`,
                             `${String.fromCharCode(alpha)}${num-2}`,
                            ]     
                            )
                    }
                 else{
                    return(
                        [
                            `${String.fromCharCode(alpha)}${num-1}`,
                           ]     
                    )
                 }
                }}
            },


}


export default Pieces;



