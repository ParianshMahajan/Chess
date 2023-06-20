const Pieces={
    Knight:{
            id:{move(position){
                 let alpha=position[0].charCodeAt(0)
                 let num=parseInt(position[1])
                return(
                    [
                        [`${String.fromCharCode(alpha+2)}${num+1}`,
                        `${String.fromCharCode(alpha+2)}${num-1}`,
                        `${String.fromCharCode(alpha-2)}${num+1}`,
                        `${String.fromCharCode(alpha-2)}${num-1}`,
                        `${String.fromCharCode(alpha+1)}${num-2}`,
                        `${String.fromCharCode(alpha-1)}${num-2}`,
                        `${String.fromCharCode(alpha+1)}${num+2}`,
                        `${String.fromCharCode(alpha-1)}${num+2}`,]
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
                         [[
                             `${String.fromCharCode(alpha)}${num+1}`,
                             `${String.fromCharCode(alpha)}${num+2}`,
                         ]]     
                            )
                    }
                 else{
                    return(
                        [[
                            `${String.fromCharCode(alpha)}${num+1}`,
                        ]]     
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
                         [[
                             `${String.fromCharCode(alpha)}${num-1}`,
                             `${String.fromCharCode(alpha)}${num-2}`,
                         ]]     
                            )
                    }
                 else{
                    return(
                        [[
                            `${String.fromCharCode(alpha)}${num-1}`,
                        ]]     
                    )
                 }
                }}
            },
    Rook:{
            id:{move(position){
                 let alpha=position[0].charCodeAt(0)
                 let num=parseInt(position[1])

                 let row1=[]
                 for(let i=1;i<=8;i++){
                     row1.push(`${String.fromCharCode(alpha)}${i+num}`)
                    }     
                    
                let row2=[]
                for(let i=1;i<=8;i++){
                    row2.push(`${String.fromCharCode(alpha)}${num-i}`)
                   }
                
                let row3=[]
                for(let i=1;i<=8;i++){
                    row3.push(`${String.fromCharCode(alpha+i)}${num}`)
                   }

                let row4=[]
                for(let i=1;i<=8;i++){
                    row4.push(`${String.fromCharCode(alpha-i)}${num}`)
                   }

                let pos=[row1,row2,row3,row4]
                 return(pos)
                }}
            },
    
    Bishop:{
            id:{move(position){
                 let alpha=position[0].charCodeAt(0)
                 let num=parseInt(position[1])
                 
                 let row1=[]
                 for(let i=1;i<=8;i++){
                    row1.push(`${String.fromCharCode(alpha+i)}${num+i}`)
                    }     
                    
                let row2=[]
                for(let i=1;i<=8;i++){
                    row2.push(`${String.fromCharCode(alpha-i)}${num-i}`)
                   }
                
                let row3=[]
                for(let i=1;i<=8;i++){
                    row3.push(`${String.fromCharCode(alpha+i)}${num-i}`)
                   }

                let row4=[]
                for(let i=1;i<=8;i++){
                    row4.push(`${String.fromCharCode(alpha-i)}${num+i}`)
                   }

                let pos=[row1,row2,row3,row4]
                 return(pos)
                }}

            },
    
    Queen:{
            id:{move(position){
                 let alpha=position[0].charCodeAt(0)
                 let num=parseInt(position[1])

                 let row1=[]
                 for(let i=1;i<=8;i++){
                     row1.push(`${String.fromCharCode(alpha)}${i+num}`)
                    }     
                    
                let row2=[]
                for(let i=1;i<=8;i++){
                    row2.push(`${String.fromCharCode(alpha)}${num-i}`)
                   }
                
                let row3=[]
                for(let i=1;i<=8;i++){
                    row3.push(`${String.fromCharCode(alpha+i)}${num}`)
                   }

                let row4=[]
                for(let i=1;i<=8;i++){
                    row4.push(`${String.fromCharCode(alpha-i)}${num}`)
                   }
                
                 let row5=[]
                 for(let i=1;i<=8;i++){
                    row5.push(`${String.fromCharCode(alpha+i)}${num+i}`)
                    }     
                    
                let row6=[]
                for(let i=1;i<=8;i++){
                    row6.push(`${String.fromCharCode(alpha-i)}${num-i}`)
                   }
                
                let row7=[]
                for(let i=1;i<=8;i++){
                    row7.push(`${String.fromCharCode(alpha+i)}${num-i}`)
                   }

                let row8=[]
                for(let i=1;i<=8;i++){
                    row8.push(`${String.fromCharCode(alpha-i)}${num+i}`)
                   }

                let pos=[row1,row2,row3,row4,row5,row6,row7,row8]
                 return(pos)
                }}
            },

    King:{
            id:{move(position){
                 let alpha=position[0].charCodeAt(0)
                 let num=parseInt(position[1])
                 return(
                    [[
                        `${String.fromCharCode(alpha+1)}${num+1}`,
                        `${String.fromCharCode(alpha+1)}${num-1}`,
                        `${String.fromCharCode(alpha-1)}${num+1}`,
                        `${String.fromCharCode(alpha-1)}${num-1}`,
                        `${String.fromCharCode(alpha+1)}${num}`,
                        `${String.fromCharCode(alpha-1)}${num}`,
                        `${String.fromCharCode(alpha)}${num+1}`,
                        `${String.fromCharCode(alpha)}${num-1}`,
                    ]]     
                 )
                }}
            },
    


}


export default Pieces;



