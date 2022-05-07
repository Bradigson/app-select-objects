import app from "../firebase/FireBase";
import { useState, useEffect } from "react";
import {getFirestore,  collection, query, onSnapshot, orderBy} from 'firebase/firestore';
const dataBase = getFirestore(app);

const Periodo6 = ()=>{

    const [periodo6, setPeriodo6] = useState([]);
    useEffect(()=>{
        const getAllsubject = ()=>{
            try{
                const collectionRef = collection(dataBase, 'Período: 6');
                const q = query(collectionRef, orderBy('fecha', 'asc'));
                onSnapshot(q, (querySnap)=>{
                    setPeriodo6(querySnap.docs.map(doc=>({...doc.data(), id:doc.id})))
                })
            }catch(err){
                console.log(err)
            }
        }
        getAllsubject();
    },[periodo6])
    return(
        <table class="table table-hover table-info table-striped table-borderless">
            <thead class="bg-primary">
                <tr>
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
                    periodo6.map(p6=>{
                        return(
                            <tr key={p6.id}>

                                <td>{  p6.codigo }</td>
                                <td>{  p6.creditos }</td>
                                <td>{  p6.asignatura }</td>
                                <td>{  p6.modalidad }</td>
                                <td>{  p6.docente }</td>
                                <td>{  p6.codigoHora === 'D' ? p6.horario  : ''}</td>
                                <td>{  p6.codigoHora === 'L' ? p6.horario  : ''}</td>
                                <td>{  p6.codigoHora === 'M' ? p6.horario  : ''}</td>
                                <td>{  p6.codigoHora === 'MI' ? p6.horario : ''}</td>
                                <td>{  p6.codigoHora === 'J' ? p6.horario  : ''}</td>
                                <td>{  p6.codigoHora === 'V' ? p6.horario  : ''}</td>
                                <td>{  p6.codigoHora === 'S' ? p6.horario  : ''}</td>
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    )
}


export default Periodo6;