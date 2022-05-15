import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import '../App.css'
import Header from "./Header";

const SelectObject = ({TheMode})=>{
 
    
    
    const [m, setM] = useState('light')
    const getMode = (mode)=>{
        TheMode(mode)
       
    }
   
   
    return(
        <div className=" sobject">
                <Header getMode={getMode}/>
            <article className="article">
                <Outlet/>

            </article>

           
        </div>
    )
}

export default SelectObject;