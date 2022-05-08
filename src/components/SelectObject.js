import { Outlet } from "react-router-dom";
import Header from "./Header";

const SelectObject = ()=>{
     
   
    return(
        <div>
                <Header/>
            <article>
                <Outlet/>
            </article>
        </div>
    )
}

export default SelectObject;