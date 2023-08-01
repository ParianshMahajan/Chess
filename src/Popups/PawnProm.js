import React, { useEffect, useState } from 'react'
import styles from './CSS/QnA.module.css'
import classNames from "classnames"


const PawnProm = (props) => {
    console.log(props.setShow);
    const [press,setPress]=useState(true)

      let turn=props.turn;
      let color="";
      if(turn=="B"){
        color="W"
    }
    else if(turn=="W"){
        color="B"
    }
    
    return (
        <div>
        {press &&(

                <div className={styles.popup} style={{paddingBottom:"5%"}}>
                <h2 className={styles.popupHeading} style={{margin:"9% 0 7% 0"}}>
                Pawn Promotion
                </h2>
                <button className={styles.btn} onClick={()=>{props.setData({link: require(`../Pieces/${color}Queen.png`),  name: `${color}Queen`});setPress(false);}}><h5>Queen</h5></button>
                
                <button className={styles.btn} onClick={()=>{props.setData({link: require(`../Pieces/${color}Rook.png`),  name: `${color}Rook`});setPress(false);}}><h5>Rook</h5></button>
                
                <button className={styles.btn} onClick={()=>{props.setData({link: require(`../Pieces/${color}Bishop.png`),  name: `${color}Bixshop`});setPress(false)}}><h5>Bishop</h5></button>
                
                <button className={styles.btn} onClick={()=>{props.setData({link: require(`../Pieces/${color}Knight.png`),  name: `${color}Knight`});setPress(false)}}><h5>Knight</h5></button>
                </div>
                )
            }
            </div>
            
            )}
            
            export default PawnProm
