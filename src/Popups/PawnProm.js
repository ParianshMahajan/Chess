import React, { useEffect, useState } from 'react'
import styles from './CSS/QnA.module.css'
import classNames from "classnames"


const PawnProm = (props) => {
    
      
    return (
        <div>
         <div className={styles.popup} style={{paddingBottom:"5%"}}>
         <h2 className={styles.popupHeading} style={{margin:"9% 0 7% 0"}}>
            Pawn Promotion
         </h2>
         <button className={styles.btn} onClick={()=>{props.showPop(false);props.setData({link:"",name:"Queen"})}}><h5>Queen</h5></button>
         <button className={styles.btn} onClick={()=>{props.showPop(false);props.setData({link:"",name:"Rook"})}}><h5>Rook</h5></button>
         <button className={styles.btn} onClick={()=>{props.showPop(false);props.setData({link:"",name:"Bishop"})}}><h5>Bishop</h5></button>
         <button className={styles.btn} onClick={()=>{props.showPop(false);props.setData({link:"",name:"Knight"})}}><h5>Knight</h5></button>
        </div>
        </div>
      )
    }
    
    

export default PawnProm
