import app from "../firebase/FireBase";
import { useState, useEffect } from "react";
import { handleChecked, handleunChecked } from "../alerts/Alert";
import {getFirestore, collection, query, onSnapshot, orderBy} from 'firebase/firestore';
const dataBase = getFirestore(app);

const Periodo1 = ()=>{

    const [checked, setChecked] = useState(false);
    const [materia, settMateria] = useState({})
    const [periodo1, setPeriodo1] = useState([]);
    useEffect(()=>{
        const getAllsubject = ()=>{
            try{
                const collectionRef = collection(dataBase, 'Período: 1');
                const q = query(collectionRef, orderBy('fecha', 'asc'));
                onSnapshot(q, (querySnap)=>{
                    setPeriodo1(querySnap.docs.map(doc=>({...doc.data(), id:doc.id})))
                })
            }catch(err){
                console.log(err)
            }
        }
        getAllsubject();
    },[])


 
    const handleCheck = e=>{
       

        
    }


    
    
    
    
    return(
        <table className="table table-hover table-info table-striped table-borderless">
            <thead className="bg-primary">
                <tr>
                    <th></th>
                    <th>Codigo</th>
                    <th>Creditos</th>
                    <th>Asignatura</th>
                    <th>Modalidad</th>
                    <th>Docente</th>
                    <th>Do</th>
                    <th>Lu</th>
                    <th>Ma</th>
                    <th>Mi</th>
                    <th>Ju</th>
                    <th>Vi</th>
                    <th>Sa</th>
                </tr>
            </thead>
            <tbody>
              
                {
                    periodo1.map(p1=>{
                        return(
                            <tr key={p1.id}>
                                <td className="ps-3 ">
                                    {/* <button onClick={handleClick} className='btn'>
                                        <input className="form-check-input " 
                                        type="checkbox"  checked={checked}  name={p1.id} />
                                    </button> */}
                                        {/* <input 
                                        className="form-check-input " 
                                        type="checkbox"  checked={checked}   onChange={handleCheck}/> */}

                                        <input type='checkbox' name={p1.asignatura} value={p1.id} onChange={handleCheck} />
                                </td>
                                <td>{  p1.codigo }</td>
                                <td className="text-center">{  p1.creditos }</td>
                                <td>{  p1.asignatura }</td>
                                <td>{  p1.modalidad }</td>
                                <td>{  p1.docente }</td>
                                <td>{  p1.codigoHora === 'D' ? p1.horario  : ''}</td>
                                <td>{  p1.codigoHora === 'L' ? p1.horario  : ''}</td>
                                <td>{  p1.codigoHora === 'M' ? p1.horario  : ''}</td>
                                <td>{  p1.codigoHora === 'MI' ? p1.horario : ''}</td>
                                <td>{  p1.codigoHora === 'J' ? p1.horario  : ''}</td>
                                <td>{  p1.codigoHora === 'V' ? p1.horario  : ''}</td>
                                <td>{  p1.codigoHora === 'S' ? p1.horario  : ''}</td>
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    )
}


export default Periodo1;