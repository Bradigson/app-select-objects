import app from "../firebase/FireBase";
import { useState, useEffect } from "react";
import {getFirestore,  collection, query, onSnapshot, orderBy} from 'firebase/firestore';
const dataBase = getFirestore(app);

const Periodo3 = ()=>{


    const [periodo3, setPeriodo3] = useState([]);
    useEffect(()=>{
        const getAllsubject = ()=>{
            try{
                const collectionRef = collection(dataBase, 'Período: 3');
                const q = query(collectionRef, orderBy('fecha', 'asc'));
                onSnapshot(q, (querySnap)=>{
                    setPeriodo3(querySnap.docs.map(doc=>({...doc.data(), id:doc.id})))
                })
            }catch(err){
                console.log(err)
            }
        }
        getAllsubject();
    },[periodo3])
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
                    periodo3.map(p3=>{
                        return(
                            <tr key={p3.id}>

                                <td>{  p3.codigo }</td>
                                <td>{  p3.creditos }</td>
                                <td>{  p3.asignatura }</td>
                                <td>{  p3.modalidad }</td>
                                <td>{  p3.docente }</td>
                                <td>{  p3.codigoHora === 'D' ? p3.horario  : ''}</td>
                                <td>{  p3.codigoHora === 'L' ? p3.horario  : ''}</td>
                                <td>{  p3.codigoHora === 'M' ? p3.horario  : ''}</td>
                                <td>{  p3.codigoHora === 'MI' ? p3.horario : ''}</td>
                                <td>{  p3.codigoHora === 'J' ? p3.horario  : ''}</td>
                                <td>{  p3.codigoHora === 'V' ? p3.horario  : ''}</td>
                                <td>{  p3.codigoHora === 'S' ? p3.horario  : ''}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}


export default Periodo3;