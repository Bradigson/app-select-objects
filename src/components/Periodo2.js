import app from "../firebase/FireBase";
import { useState, useEffect } from "react";
import {getFirestore,  collection, query, onSnapshot, orderBy} from 'firebase/firestore';
const dataBase = getFirestore(app);


const Periodo2 = ()=>{

    const [periodo2, setPeriodo2] = useState([]);
    useEffect(()=>{
        const getAllsubject = ()=>{
            try{
                const collectionRef = collection(dataBase, 'Período: 2');
                const q = query(collectionRef, orderBy('fecha', 'asc'));
                onSnapshot(q, (querySnap)=>{
                    setPeriodo2(querySnap.docs.map(doc=>({...doc.data(), id:doc.id})))
                })
            }catch(err){
                console.log(err)
            }
        }
        getAllsubject();
    },[periodo2])
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
                    periodo2.map(p2=>{
                        return(
                            <tr key={p2.id}>
                                <td className="ps-3"><input class="form-check-input " type="checkbox" value="" /></td>
                                <td>{  p2.codigo }</td>
                                <td>{  p2.creditos }</td>
                                <td>{  p2.asignatura }</td>
                                <td>{  p2.modalidad }</td>
                                <td>{  p2.docente }</td>
                                <td>{  p2.codigoHora === 'D' ? p2.horario  : ''}</td>
                                <td>{  p2.codigoHora === 'L' ? p2.horario  : ''}</td>
                                <td>{  p2.codigoHora === 'M' ? p2.horario  : ''}</td>
                                <td>{  p2.codigoHora === 'MI' ? p2.horario : ''}</td>
                                <td>{  p2.codigoHora === 'J' ? p2.horario  : ''}</td>
                                <td>{  p2.codigoHora === 'V' ? p2.horario  : ''}</td>
                                <td>{  p2.codigoHora === 'S' ? p2.horario  : ''}</td>
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    )
}


export default Periodo2;