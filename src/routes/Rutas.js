import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import LogIn from "../components/Login";
import SelectObject from "../components/SelectObject";
import Periodo1 from "../components/Período1";
import Periodo2 from "../components/Periodo2";
import Periodo3 from "../components/Periodo3";
import Periodo4 from "../components/Periodo4";
import Periodo5 from "../components/Periodo5";
import Periodo6 from "../components/Periodo6";
import Periodo7 from "../components/Periodo7";
import AddStudents from "../components/AddStudents";
import Resumen from "../components/Resumen";

const Rutas = ()=>{
    
    const [m, setM] = useState('light')
    
    const theMode = (mode)=>{
        setM(mode);
  
    }
 
    return(
        <Routes>
            <Route path='/' element={<LogIn/>}/>
            <Route path='select-objects' element={<SelectObject TheMode={theMode} />}>
                <Route path="periodo_1" element={<Periodo1 m={m}/>}/>
                <Route path="periodo_2" element={<Periodo2/>}/>
                <Route path="periodo_3" element={<Periodo3/>}/>
                <Route path="periodo_4" element={<Periodo4/>}/>
                <Route path="periodo_5" element={<Periodo5/>}/>
                <Route path="periodo_6" element={<Periodo6/>}/>
                <Route path="periodo_7" element={<Periodo7/>}/>
                
            </Route>
            <Route path='add_students' element={<AddStudents/>}/>
            <Route path="resumen" element={<Resumen m={m}/>}/>
            <Route path='*' element={<h1>error</h1>}/>
        </Routes>
    )
}


export default Rutas;