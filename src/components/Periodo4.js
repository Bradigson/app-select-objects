import app from "../firebase/FireBase";
import { useState, useEffect } from "react";
import {getFirestore,  collection, query, onSnapshot, orderBy} from 'firebase/firestore';
const dataBase = getFirestore(app);


const Periodo4 = ()=>{

    const [periodo4, setPeriodo4] = useState([]);
    useEffect(()=>{
        const getAllsubject = ()=>{
            try{
                const collectionRef = collection(dataBase, 'Período: 4');
                const q = query(collectionRef, orderBy('fecha', 'asc'));
                onSnapshot(q, (querySnap)=>{
                    setPeriodo4(querySnap.docs.map(doc=>({...doc.data(), id:doc.id})))
                })
            }catch(err){
                console.log(err)
            }
        }
        getAllsubject();
    },[periodo4])
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
                    periodo4.map(p4=>{
                        return(
                            <tr key={p4.id}>

                                <td>{  p4.codigo }</td>
                                <td>{  p4.creditos }</td>
                                <td>{  p4.asignatura }</td>
                                <td>{  p4.modalidad }</td>
                                <td>{  p4.docente }</td>
                                <td>{  p4.codigoHora === 'D' ? p4.horario  : ''}</td>
                                <td>{  p4.codigoHora === 'L' ? p4.horario  : ''}</td>
                                <td>{  p4.codigoHora === 'M' ? p4.horario  : ''}</td>
                                <td>{  p4.codigoHora === 'MI' ? p4.horario : ''}</td>
                                <td>{  p4.codigoHora === 'J' ? p4.horario  : ''}</td>
                                <td>{  p4.codigoHora === 'V' ? p4.horario  : ''}</td>
                                <td>{  p4.codigoHora === 'S' ? p4.horario  : ''}</td>
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    )
}


export default Periodo4;