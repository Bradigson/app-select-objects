import app from "../firebase/FireBase";
import { useState, useEffect } from "react";
import {getFirestore,  collection, query, onSnapshot, orderBy} from 'firebase/firestore';
const dataBase = getFirestore(app);


const Periodo5 = ()=>{

    const [periodo5, setPeriodo5] = useState([]);
    useEffect(()=>{
        const getAllsubject = ()=>{
            try{
                const collectionRef = collection(dataBase, 'Período: 5');
                const q = query(collectionRef, orderBy('fecha', 'asc'));
                onSnapshot(q, (querySnap)=>{
                    setPeriodo5(querySnap.docs.map(doc=>({...doc.data(), id:doc.id})))
                })
            }catch(err){
                console.log(err)
            }
        }
        getAllsubject();
    },[periodo5])
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
                    periodo5.map(p5=>{
                        return(
                            <tr key={p5.id}>

                                <td>{  p5.codigo }</td>
                                <td>{  p5.creditos }</td>
                                <td>{  p5.asignatura }</td>
                                <td>{  p5.modalidad }</td>
                                <td>{  p5.docente }</td>
                                <td>{  p5.codigoHora === 'D' ? p5.horario  : ''}</td>
                                <td>{  p5.codigoHora === 'L' ? p5.horario  : ''}</td>
                                <td>{  p5.codigoHora === 'M' ? p5.horario  : ''}</td>
                                <td>{  p5.codigoHora === 'MI' ? p5.horario : ''}</td>
                                <td>{  p5.codigoHora === 'J' ? p5.horario  : ''}</td>
                                <td>{  p5.codigoHora === 'V' ? p5.horario  : ''}</td>
                                <td>{  p5.codigoHora === 'S' ? p5.horario  : ''}</td>
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    )
}


export default Periodo5;