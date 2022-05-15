import { useState, useEffect } from "react";
import Alert from 'sweetalert2';
import '../assets/style/Resumen.scss';
import app from "../firebase/FireBase";
import {getFirestore, collection, addDoc, query, onSnapshot, doc, deleteDoc} from 'firebase/firestore';
import { Link } from "react-router-dom";
const dataBase = getFirestore(app);
const Resumen = ()=>{

    const [user,setUser] = useState(
        localStorage.getItem('user')
    )

    const [color,setColor] = useState(
        localStorage.getItem('color')
    )

    const firstLertter = user.split('',1);


    // peticion
    const [resumen, setResumen] = useState([]);
    useEffect(() => {
        const getResunmen = ()=>{
            const collectionRef = collection(dataBase, `${user}`);
            const q = query(collectionRef);
            onSnapshot(q, (querySnap)=>{
                setResumen(querySnap.docs.map(doc=>({...doc.data(), id:doc.id})));
            })

        }
        getResunmen()
    }, [])
  
    
    // delete selection
    const handleDelete = async(id)=>{

        Alert.fire({
            title: 'Seguro que quiere eliminar está  materia?',
            text: "Se perdera la selección",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Alert.fire(
                'Deleted!',
                'Materia eliminada.',
                'success'
              )

              try{
                     deleteDoc(doc(dataBase, `${user}`, id));
                }catch(err){
                    console.log(err)
                }
            }
          })
        
    }
    
    
    
    const array = resumen.map(doc=> parseInt(doc.creditos));
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    
    let total = sum * 520;
































    const totalMaterias = resumen.map((doc, index)=> index);
    let allMaterias = totalMaterias.length
 
    
   
    

    return(
        <div className=" text-light resumen container-fluid">
            <div className=" user-container border-bottom">
                <div className="me-5">
                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Total a pagar</button>

                        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">

                            
                        <div className="offcanvas-header text-dark">
                            <h5 className="offcanvas-title" id="offcanvasScrollingLabel"></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                       
                        <div className="offcanvas-body text-dark mt-5">
                            <div>
                                <ul className="list-group shadow">
                                    <li className="list-group-item d-flex justify-content-between align-items-center text-primary   ">
                                        Precio credito
                                        <span className="badge bg-primary rounded-pill shadow">RD$ 520.00</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center text-primary   ">
                                        Total materias
                                        <span className="badge bg-primary rounded-pill shadow">{allMaterias}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center text-primary">
                                        Total creditos
                                        <span className="badge bg-primary rounded-pill shadow">{sum}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center text-primary">
                                        Total a pagar
                                        <span className="badge bg-primary rounded-pill shadow">RD$ {total}.00</span>
                                    </li>
                                </ul>
                            </div>
                            
                            
                        </div>
                        </div>
                </div>
                <div className=" me-4 return">
                    <Link to='/select-objects/periodo_1' className="nav-link shadow"><i className='bx bx-refresh'></i></Link>
                </div>
                <div className="user shadow" style={{backgroundColor : color}} 
                     title={`${user}`}>
                    <span>{firstLertter}</span>
                </div>
            </div>
            <div className="mt-5   ">
                <table className="table  table-striped table-hover">
                    
                    <tbody>
                        {
                            resumen.map(r=>{
                                return(
                                    <tr key={r.id}>
                                        <td className="text-primary">{r.codigo}</td>
                                        <td>{r.creditos}</td>
                                        <td>{r.modalidad}</td>
                                        <td>{r.asignatura}</td>
                                        <td>{r.docente}</td>
                                        <td>{r.horario}</td>
                                        <td><button className="btn btn-danger shadow-lg " onClick={()=> handleDelete(r.id)}><i className='bx bx-trash'></i></button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
            
        </div>
    )
}

export default Resumen;