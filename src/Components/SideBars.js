import { useEffect, useState } from "react";





export default function SideBar(props){
    const[render,setRender]=useState([]);
    if(props.arr!=render){
        setRender((props.arr))
    }


    return(
        <div className={props.class}>
            <div className="middle">
                <ul className="listPieces">
                    <li>
                        {(props.arr).map((e)=>{
                            return(
                                <img src={e} alt="" className="cutPieces" />
                                )})}
                    </li>
                </ul>
            </div>
        </div>
    )
}