import app from "../firebase/FireBase";
import { useState, useEffect } from "react";
import {getFirestore,  collection, query, onSnapshot, orderBy} from 'firebase/firestore';
const dataBase = getFirestore(app);

const Periodo7 = ()=>{


    const [periodo7, setPeriodo7] = useState([]);
    useEffect(()=>{
        const getAllsubject = ()=>{
            try{
                const collectionRef = collection(dataBase, 'Período: 7');
                const q = query(collectionRef, orderBy('fecha', 'asc'));
                onSnapshot(q, (querySnap)=>{
                    setPeriodo7(querySnap.docs.map(doc=>({...doc.data(), id:doc.id})))
                })
            }catch(err){
                console.log(err)
            }
        }
        getAllsubject();
    },[periodo7])
    return(
        <table class="table table-hover table-info table-striped table-borderless">
            <thead class="bg-primary">
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
                    periodo7.map(p7=>{
                        return(
                            <tr key={p7.id}>
                                <td className="ps-3"><input class="form-check-input " type="checkbox" value="" /></td>
                                <td>{  p7.codigo }</td>
                                <td>{  p7.creditos }</td>
                                <td>{  p7.asignatura }</td>
                                <td>{  p7.modalidad }</td>
                                <td>{  p7.docente }</td>
                                <td>{  p7.codigoHora === 'D' ? p7.horario  : ''}</td>
                                <td>{  p7.codigoHora === 'L' ? p7.horario  : ''}</td>
                                <td>{  p7.codigoHora === 'M' ? p7.horario  : ''}</td>
                                <td>{  p7.codigoHora === 'MI' ? p7.horario : ''}</td>
                                <td>{  p7.codigoHora === 'J' ? p7.horario  : ''}</td>
                                <td>{  p7.codigoHora === 'V' ? p7.horario  : ''}</td>
                                <td>{  p7.codigoHora === 'S' ? p7.horario  : ''}</td>
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    )
}


export default Periodo7;