import { Outlet } from "react-router-dom";
import '../App.css'
import Header from "./Header";

const SelectObject = ()=>{
     
   
    return(
        <div className=" sobject bg-dark">
                <Header/>
            <article className="article">
                <Outlet/>
              
            </article>

           
        </div>
    )
}

export default SelectObject;