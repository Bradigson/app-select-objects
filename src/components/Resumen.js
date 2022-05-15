import { useState, useEffect } from "react";
import Alert from 'sweetalert2';
import '../assets/style/Resumen.scss';
import app from "../firebase/FireBase";
import {getFirestore, collection, addDoc, query, onSnapshot, doc, deleteDoc} from 'firebase/firestore';
import { Link } from "react-router-dom";
const dataBase = getFirestore(app);

const Resumen = ({m})=>{

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
        <div className={`${m === 'light' ? " text-light resumen container-fluid " : " text-light resumen container-fluid bg-dark"}`}>
            <div className={`${m === 'light' ? " user-container border-bottom  bg-primary " : " user-container border-bottom   "}`}>
                <div className="me-5">
                        <button className={`${m === 'light' ? "btn btn-outline-primary text-light bb" : 'btn btn-outline-secondary bb'}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Total a pagar</button>

                        <div className={`${m === 'light' ? "offcanvas offcanvas-start" : "offcanvas offcanvas-start bg-dark"}`} data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">

                                
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasScrollingLabel"></h5>
                                <button type="button" className={`${m === 'light' ? "btn-close" : 'btn btn-outline-danger text-light tt'}`} data-bs-dismiss="offcanvas" aria-label="Close">{m === 'dark' ? 'X' : ''}</button>
                            </div>
                        
                            <div className="offcanvas-body text-dark mt-5 ">
                                <div>
                                    <ul className={`${m === 'light' ? "list-group shadow " : "list-group shadow border border-light"}`}>
                                        <li className={`${m === 'light' ? "list-group-item d-flex justify-content-between align-items-center text-primary   " : "list-group-item d-flex justify-content-between align-items-center text-light  bg-dark  "}`}>
                                            Precio credito
                                            <span className={`${m === 'light' ? "badge bg-primary rounded-pill shadow" : "badge bg-danger rounded-pill shadow"}`}>RD$ 520.00</span>
                                        </li>
                                        <li className={`${m === 'light' ? "list-group-item d-flex justify-content-between align-items-center text-primary " : "list-group-item d-flex justify-content-between align-items-center text-primary bg-dark text-light "}`}>
                                            Total materias
                                            <span className={m === 'light' ? "badge bg-primary rounded-pill shadow" : "badge bg-danger rounded-pill shadow"}>{allMaterias}</span>
                                        </li>
                                        <li className={`${m === 'light' ? "list-group-item d-flex justify-content-between align-items-center text-primary" : "list-group-item d-flex justify-content-between align-items-center text-light bg-dark "}`}>
                                            Total creditos
                                            <span className={`${m === 'light' ? "badge bg-primary rounded-pill shadow" : "badge bg-danger rounded-pill shadow"}`}>{sum}</span>
                                        </li>
                                        <li className={`${m === 'light' ? "list-group-item d-flex justify-content-between align-items-center text-primary" : "list-group-item d-flex justify-content-between align-items-center text-light bg-dark "}`}>
                                            Total a pagar
                                            <span className={`${m === 'light' ? "badge bg-primary rounded-pill shadow" : "badge bg-danger rounded-pill shadow "}`}>RD$ {total}.00</span>
                                        </li>
                                    </ul>
                                    
                                </div>
                                
                                
                            </div>
                        </div>
                </div>
                <div className=" me-4 return">
                    <Link to='/select-objects/periodo_1' className="nav-link shadow text-light"><i className='bx bx-refresh'></i></Link>
                </div>
                <div className="user shadow" style={{backgroundColor : color}} 
                     title={`${user}`}>
                    <span>{firstLertter}</span>
                </div>
            </div>
            <div className="mt-5  table-table ">
                <table className={`${m === 'light' ? "table  table-striped table-hover " : "table  table-dark table-striped table-hover "}`}>
                    
                    <tbody>
                        {
                            resumen.map(r=>{
                                return(
                                    <tr key={r.id}>
                                        <td className={`${m === 'light' ? "text-primary" : "text-secondary"}`}>{r.codigo}</td>
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