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
    Rook:{
            id:{move(position){
                 let alpha=position[0].charCodeAt(0)
                 let num=parseInt(position[1])
                 let rows=[]
                 for(let i=0;i<8;i++){
                    rows.push(`${String.fromCharCode(alpha)}${i+1}`)
                    rows.push(`${String.fromCharCode(65+i)}${num}`)
                 }     
                 
                 rows.filter((value,index,arr)=>{
                    if(value==`${String.fromCharCode(alpha)}${num}`){
                        arr.splice(index,1)
                        return true;
                    }
                    return false;
                })

                 return(rows)
                }}
            },
    
    Bishop:{
            id:{move(position){
                 let alpha=position[0].charCodeAt(0)
                 let num=parseInt(position[1])
                 let pos=[]
                 for(let i=0;i<8;i++){
                    pos.push(`${String.fromCharCode(alpha+i)}${num+i}`)
                    pos.push(`${String.fromCharCode(alpha-i)}${num-i}`)
                    pos.push(`${String.fromCharCode(alpha+i)}${num-i}`)
                    pos.push(`${String.fromCharCode(alpha-i)}${num+i}`)
                 }     
                 
                 pos.filter((value,index,arr)=>{
                    if(value==`${String.fromCharCode(alpha)}${num}`){
                        arr.splice(index,1)
                        return true;
                    }
                    return false;
                })

                 return(pos)
                }}
            },
    
    Queen:{
            id:{move(position){
                 let alpha=position[0].charCodeAt(0)
                 let num=parseInt(position[1])
                 let pos=[]
                 for(let i=0;i<8;i++){
                    pos.push(`${String.fromCharCode(alpha+i)}${num+i}`)
                    pos.push(`${String.fromCharCode(alpha-i)}${num-i}`)
                    pos.push(`${String.fromCharCode(alpha+i)}${num-i}`)
                    pos.push(`${String.fromCharCode(alpha-i)}${num+i}`)
                    pos.push(`${String.fromCharCode(alpha)}${i+1}`)
                    pos.push(`${String.fromCharCode(65+i)}${num}`)
                 }     
                 
                 pos.filter((value,index,arr)=>{
                    if(value==`${String.fromCharCode(alpha)}${num}`){
                        arr.splice(index,1)
                        return true;
                    }
                    return false;
                })

                 return(pos)
                }}
            },

    King:{
            id:{move(position){
                 let alpha=position[0].charCodeAt(0)
                 let num=parseInt(position[1])
                 return(
                    [
                        `${String.fromCharCode(alpha+1)}${num+1}`,
                        `${String.fromCharCode(alpha+1)}${num-1}`,
                        `${String.fromCharCode(alpha-1)}${num+1}`,
                        `${String.fromCharCode(alpha-1)}${num-1}`,
                        `${String.fromCharCode(alpha+1)}${num}`,
                        `${String.fromCharCode(alpha-1)}${num}`,
                        `${String.fromCharCode(alpha)}${num+1}`,
                        `${String.fromCharCode(alpha)}${num-1}`,
                    ]     
                 )
                }}
            },
    


}


export default Pieces;



