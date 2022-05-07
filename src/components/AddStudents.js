import { Link } from 'react-router-dom';
import '../assets/style/AddStudents.scss';
import { useState } from 'react';
import app from '../firebase/FireBase';
import {getFirestore, addDoc, collection, deleteDoc, doc, getDocs, setDoc, getDoc, serverTimestamp} from 'firebase/firestore';
const dataBase = getFirestore(app);

const AddStudents = ()=>{
    const [codigo, setCodigo] = useState('');
    const [creditos, setCreditos] = useState('');
    const [asignatura, setAsignatura] = useState('');
    const [modalidad, setModalidad] = useState('');
    const [horario, setHorario] = useState('');
    const [docente, setDocente] = useState('');
    const [periodo, setPeriodo] = useState('');
    const [codigoHora, setCodigoHora] = useState('');


    const handleCodigo = (e)=>{
        setCodigo(e.target.value);
    }

    const handleCreditos = (e)=>{
        setCreditos(e.target.value)
    }

    const handleAsignatura = (e)=>{
        setAsignatura(e.target.value)
    }
    
    const handleModalidad = (e)=>{
        setModalidad(e.target.value);
    }

    const handleHorario = (e)=>{
        setHorario(e.target.value);
    }

    const handleDocente = (e)=>{
        setDocente(e.target.value);
    }

    const handlePeriodo = (e)=>{
        setPeriodo(e.target.value);
    }

    const handleCodigoHora = (e)=>{
        setCodigoHora(e.target.value);
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(codigo === ''){
            alert('campo codigo vacio')
        }else if(creditos === ''){
            alert('campo creditos vacio')
        }else if(asignatura === ''){
            alert('campo asignatura vacio')
        }else if(modalidad === ''){
            alert('campo modalidad vacioi')
        }else if(horario === ''){
            alert('campo horario vacio')
        }else if(docente === ''){
            alert('campo docente vacio')
        }else{
           try{
                await addDoc(collection(dataBase, `${periodo}`), {
                    codigo, creditos, asignatura, modalidad, horario, docente, periodo, fecha : serverTimestamp(), codigoHora
                });
                setCodigo('');
                setCreditos('');
                setAsignatura('');
                setModalidad('');
                setHorario('');
                setDocente('');
                setPeriodo('');
                setCodigoHora('');
                
           }catch(err){
               console.log(err)
           }
        }
    }
    return(
        <div className="container">
            
            <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                <div className=''>
                     <Link to='/select-objects/periodo_1'><i className='bx bx-log-out'></i></Link>
                </div>
                {/* Codigo */}
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">Codigo</label>
                    <input type="text" className="form-control" id="validationCustom01" value={codigo} onChange={handleCodigo} required/>
                </div>

                {/* Creditos */}
                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Creditos</label>
                    <input type="text" className="form-control" id="validationCustom02" value={creditos} onChange={handleCreditos} required/>
                </div>

                {/*Asignatura  */}
                <div className="col-md-3">
                    <label htmlFor="validationCustom04" className="form-label">Asignatura</label>
                    <select className="form-select" id="validationCustom04" required value={asignatura} onChange={handleAsignatura}>
                    <option disabled >Choose...</option>
                    <option disabled ></option>
                    <option disabled >Período: 1</option>
                        <option value='Precálculo'>Precálculo</option>
                        <option value='Fundamentos del Computador'>Fundamentos del Computador</option>
                        <option value='Propedéutico de Matemática'>Propedéutico de Matemática</option>
                        <option value='Inglés Nivel 1-3'>Inglés Nivel 1-3</option>
                        <option value='Historia Universal'>Historia Universal</option>
                        <option value='Redacción Castellana'>Redacción Castellana</option>
                        <option value='Ética 1'>Ética 1</option>
                        <option value='Introducción a la elaboración de Algoritmos'>Introducción a la elaboración de Algoritmos</option>
                        <option value='Orientación Institucional'>Orientación Institucional</option>

                        <option disabled ></option>
                        <option disabled >Período: 2</option>
                        <option value='Fundamentos de programación'>Fundamentos de programación</option>
                        <option value='Cálculo Diferencial'>Cálculo Diferencial</option>
                        <option value='Cálculo Diferencial'>Introducción a las bases de Datos</option>
                        <option value='Historia Dominicana'>Historia Dominicana</option>
                        <option value='Inglés Nivel 4-6'>Inglés Nivel 4-6</option>
                        <option value='Contabilidad Financiera'>Contabilidad Financiera</option>
                        <option value='Ética 2'>Ética 2</option>
                        
                        <option disabled ></option>
                        <option disabled >Período: 3</option>
                        <option value='Probabilidad y Estadística'>Probabilidad y Estadística</option>
                        <option value='Fisica General'>Fisica General</option>
                        <option value='Laboratorio Fisica General'>Laboratorio Fisica General</option>
                        <option value='Inglés Nivel 7-9'>Inglés Nivel 7-9</option>
                        <option value='Programación I'>Programación I</option>
                        <option value='Análisis y Diseño de Sistemas'>Análisis y Diseño de Sistemas</option>
                        <option value='Cálculo Integral'>Cálculo Integral</option>
                        <option value='Ética 3'>Ética 3</option>

                        <option disabled ></option>
                        <option disabled >Período: 4</option>
                        <option value='Diseño Centrado en el usuario'>Diseño Centrado en el usuario</option>
                        <option value='Base de Datos Avanzada'>Base de Datos Avanzada</option>
                        <option value='Programación II'>Programación II</option>
                        <option value='Inteligencia Artificial'>Inteligencia Artificial</option>
                        <option value='Inglés Nivel 10-12'>Inglés Nivel 10-12</option>
                        <option value='Metodología de investigación'>Metodología de investigación</option>
                        
                        <option disabled ></option>
                        <option disabled >Período: 5</option>
                        <option value='Fundamentos de Electrónica'>Fundamentos de Electrónica</option>
                        <option value='Laboratorio Fundamentos de Electrónic'>Laboratorio Fundamentos de Electrónic</option>
                        <option value='Auditoría Informática'>Auditoría Informática</option>
                        <option value='Programación III'>Programación III</option>
                        <option value='Minería de Datos e Inteligencia de Negocios'>Minería de Datos e Inteligencia de Negocios</option>
                        <option value='Programación Web'>Programación Web</option>
                        <option value='Electiva 1'>Electiva 1</option>
                        
                        <option disabled ></option>
                        <option disabled >Período: 6</option>
                        <option value='Electiva 2'>Electiva 2</option>
                        <option value='Inglés Técnico'>Inglés Técnico</option>
                        <option value='Programación Paralela'>Programación Paralela</option>
                        <option value='Introducción a la ingeniería de software'>Introducción a la ingeniería de software</option>
                        <option value='Desarrollo de Emprendedores'>Desarrollo de Emprendedores</option>
                        <option value='Educación Física'>Educación Física</option>
                        <option value='Ética 1'>Ética 1</option>
                        <option value='Introducción a la elaboración de Algoritmos'>Introducción a la elaboración de Algoritmos</option>
                        <option value='Orientación Institucional'>Orientación Institucional</option>

                        <option disabled value=""></option>
                        <option disabled value="">Período: 7</option>
                        <option value='Estructura de Datos'>Estructura de Datos</option>
                        <option value='Administración de Proyectos de Software'>Administración de Proyectos de Software</option>
                        <option value='Introducción al desarrollo de aplicaciones móviles'>Introducción al desarrollo de aplicaciones móviles</option>
                        <option value='Proyecto Final TDS'>Proyecto Final TDS</option>
                        <option value='Plan de Negocios'>Plan de Negocios</option>
                        <option disabled ></option>
                        

                    </select>
                   
                </div>

                {/* Modalidad */}
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Modalidad</label>
                    <input type="text" className="form-control" id="validationCustom03" required value={modalidad} onChange={handleModalidad}/>
                </div>


                {/* Horario */}
                <div className="col-md-3">
                    <label htmlFor="validationCustom04" className="form-label">Horario</label>
                    <select className="form-select" id="validationCustom04" required value={horario} onChange={handleHorario}>
                    <option disabled value="">Choose...</option>

                    
                    {/* Domingo */}
                    <option value='Domingo: 8:00-9:59 Aula: Virtual 1'>Domingo: 8:00-9:59 Aula: Virtual 1</option>
                    <option value='Domingo: 8:00-11:59 Aula: Virtual 2'>Domingo: 8:00-11:59 Aula: Virtual 2</option>
                    <option value='Domingo: 8:00-12:59 Aula: Virtual 3'>Domingo: 8:00-12:59 Aula: Virtual 3</option>
                    <option value='Domingo: 10:00-10:59 Aula: Virtual 4'>Domingo: 10:00-10:59 Aula: Virtual 4</option>
                    <option value='Domingo: 10:00-11:59 Aula: Virtual 5'>Domingo: 10:00-11:59 Aula: Virtual 5</option>
                    <option value='Domingo: 10:00-12:59 Aula: Virtual 6'>Domingo: 10:00-12:59 Aula: Virtual 6</option>
                    <option value='Domingo: 12:00-13:59 Aula: Virtual 7'>Domingo: 12:00-13:59 Aula: Virtual 7</option>
                    <option value='Domingo: 13:00-15:59 Aula: Virtual 8'>Domingo: 13:00-15:59 Aula: Virtual 8</option>
                    <option value='Domingo: 14:00-17:59 Aula: Virtual 9'>Domingo: 14:00-17:59 Aula: Virtual 9</option>
                    <option value='Domingo: 14:00-16:59 Aula: Virtual 10'>Domingo: 14:00-16:59 Aula: Virtual 10</option>
                    <option value='Domingo: 18:00-19:59 Aula: Virtual 11'>Domingo: 18:00-19:59 Aula: Virtual 11</option>
                    <option value='Domingo: 18:00-20:59 Aula: Virtual 12'>Domingo: 18:00-20:59 Aula: Virtual 12</option>
                    <option value='Domingo: 20:00-21:59 Aula: Virtual 13'>Domingo: 20:00-21:59 Aula: Virtual 13</option>

                    {/* Lunes */}
                    <option value='Lunes: 8:00-9:59 Aula: Virtual 14'>Lunes: 8:00-9:59 Aula: Virtual 14</option>
                    <option value='Lunes: 8:00-11:59 Aula: Virtual 15'>Lunes: 8:00-11:59 Aula: Virtual 15</option>
                    <option value='Lunes: 8:00-12:59 Aula: Virtual 16'>Lunes: 8:00-12:59 Aula: Virtual 16</option>
                    <option value='Lunes: 10:00-10:59 Aula: Virtual 17'>Lunes: 10:00-10:59 Aula: Virtual 17</option>
                    <option value='Lunes: 10:00-11:59 Aula: Virtual 18'>Lunes: 10:00-11:59 Aula: Virtual 18</option>
                    <option value='Lunes: 10:00-12:59 Aula: Virtual 19'>Lunes: 10:00-12:59 Aula: Virtual 19</option>
                    <option value='Lunes: 12:00-13:59 Aula: Virtual 20'>Lunes: 12:00-13:59 Aula: Virtual 20</option>
                    <option value='Lunes: 13:00-15:59 Aula: Virtual 21'>Lunes: 13:00-15:59 Aula: Virtual 21</option>
                    <option value='Lunes: 14:00-17:59 Aula: Virtual 22'>Lunes: 14:00-17:59 Aula: Virtual 22</option>
                    <option value='Lunes: 14:00-16:59 Aula: Virtual 23'>Lunes: 14:00-16:59 Aula: Virtual 23</option>
                    <option value='Lunes: 18:00-19:59 Aula: Virtual 24'>Lunes: 18:00-19:59 Aula: Virtual 24</option>
                    <option value='Lunes: 18:00-20:59 Aula: Virtual 25'>Lunes: 18:00-20:59 Aula: Virtual 25</option>
                    <option value='Lunes: 20:00-21:59 Aula: Virtual 26'>Lunes: 20:00-21:59 Aula: Virtual 26</option>
                    

                    {/* Martes */}
                    <option value='Martes: 8:00-9:59 Aula: Virtual 27'>Martes: 8:00-9:59 Aula: Virtual 27</option>
                    <option value='Martes: 8:00-11:59 Aula: Virtual 28'>Martes: 8:00-11:59 Aula: Virtual 28</option>
                    <option value='Martes: 8:00-12:59 Aula: Virtual 29'>Martes: 8:00-12:59 Aula: Virtual 29</option>
                    <option value='Martes: 10:00-10:59 Aula: Virtual 30'>Martes: 10:00-10:59 Aula: Virtual 30</option>
                    <option value='Martes: 10:00-11:59 Aula: Virtual 31'>Martes: 10:00-11:59 Aula: Virtual 31</option>
                    <option value='Martes: 10:00-12:59 Aula: Virtual 32'>Martes: 10:00-12:59 Aula: Virtual 32</option>
                    <option value='Martes: 12:00-13:59 Aula: Virtual 33'>Martes: 12:00-13:59 Aula: Virtual 33</option>
                    <option value='Martes: 13:00-15:59 Aula: Virtual 34'>Martes: 13:00-15:59 Aula: Virtual 34</option>
                    <option value='Martes: 14:00-17:59 Aula: Virtual 35'>Martes: 14:00-17:59 Aula: Virtual 35</option>
                    <option value='Martes: 14:00-16:59 Aula: Virtual 36'>Martes: 14:00-16:59 Aula: Virtual 36</option>
                    <option value='Martes: 18:00-19:59 Aula: Virtual 37'>Martes: 18:00-19:59 Aula: Virtual 37</option>
                    <option value='Martes: 18:00-20:59 Aula: Virtual 38'>Martes: 18:00-20:59 Aula: Virtual 38</option>
                    <option value='Martes: 20:00-21:59 Aula: Virtual 39'>Martes: 20:00-21:59 Aula: Virtual 39</option>
                    

                    {/* Miercoles */}
                    <option value='Miercoles: 8:00-9:59 Aula: Virtual 40'>Miercoles: 8:00-9:59 Aula: Virtual 40</option>
                    <option value='Miercoles: 8:00-11:59 Aula: Virtual 41'>Miercoles: 8:00-11:59 Aula: Virtual 41</option>
                    <option value='Miercoles: 8:00-12:59 Aula: Virtual 42'>Miercoles: 8:00-12:59 Aula: Virtual 42</option>
                    <option value='Miercoles: 10:00-10:59 Aula: Virtual 43'>Miercoles: 10:00-10:59 Aula: Virtual 43</option>
                    <option value='Miercoles: 10:00-11:59 Aula: Virtual 44'>Miercoles: 10:00-11:59 Aula: Virtual 44</option>
                    <option value='Miercoles: 10:00-12:59 Aula: Virtual 45'>Miercoles: 10:00-12:59 Aula: Virtual 45</option>
                    <option value='Miercoles: 12:00-13:59 Aula: Virtual 46'>Miercoles: 12:00-13:59 Aula: Virtual 46</option>
                    <option value='Miercoles: 13:00-15:59 Aula: Virtual 47'>Miercoles: 13:00-15:59 Aula: Virtual 47</option>
                    <option value='Miercoles: 14:00-17:59 Aula: Virtual 48'>Miercoles: 14:00-17:59 Aula: Virtual 48</option>
                    <option value='Miercoles: 14:00-16:59 Aula: Virtual 49'>Miercoles: 14:00-16:59 Aula: Virtual 49</option>
                    <option value='Miercoles: 18:00-19:59 Aula: Virtual 50'>Miercoles: 18:00-19:59 Aula: Virtual 50</option>
                    <option value='Miercoles: 18:00-20:59 Aula: Virtual 51'>Miercoles: 18:00-20:59 Aula: Virtual 51</option>
                    <option value='Miercoles: 20:00-21:59 Aula: Virtual 52'>Miercoles: 20:00-21:59 Aula: Virtual 52</option>


                    {/* Jueves */}
                    <option value='Jueves: 8:00-9:59 Aula: Virtual 53'>Jueves: 8:00-9:59 Aula: Virtual 53</option>
                    <option value='Jueves: 8:00-11:59 Aula: Virtual 54'>Jueves: 8:00-11:59 Aula: Virtual 54</option>
                    <option value='Jueves: 8:00-12:59 Aula: Virtual 55'>Jueves: 8:00-12:59 Aula: Virtual 55</option>
                    <option value='Jueves: 10:00-10:59 Aula: Virtual 56'>Jueves: 10:00-10:59 Aula: Virtual 56</option>
                    <option value='Jueves: 10:00-11:59 Aula: Virtual 57'>Jueves: 10:00-11:59 Aula: Virtual 57</option>
                    <option value='Jueves: 10:00-12:59 Aula: Virtual 58'>Jueves: 10:00-12:59 Aula: Virtual 58</option>
                    <option value='Jueves: 12:00-13:59 Aula: Virtual 59'>Jueves: 12:00-13:59 Aula: Virtual 59</option>
                    <option value='Jueves: 13:00-15:59 Aula: Virtual 60'>Jueves: 13:00-15:59 Aula: Virtual 60</option>
                    <option value='Jueves: 14:00-17:59 Aula: Virtual 61'>Jueves: 14:00-17:59 Aula: Virtual 61</option>
                    <option value='Jueves: 14:00-16:59 Aula: Virtual 62'>Jueves: 14:00-16:59 Aula: Virtual 62</option>
                    <option value='Jueves: 18:00-19:59 Aula: Virtual 63'>Jueves: 18:00-19:59 Aula: Virtual 63</option>
                    <option value='Jueves: 18:00-20:59 Aula: Virtual 64'>Jueves: 18:00-20:59 Aula: Virtual 64</option>
                    <option value='Jueves: 20:00-21:59 Aula: Virtual 65'>Jueves: 20:00-21:59 Aula: Virtual 65</option>

                    {/* Viernes */}
                    <option value='Viernes: 8:00-9:59 Aula: Virtual 66'>Viernes: 8:00-9:59 Aula: Virtual 66</option>
                    <option value='Viernes: 8:00-11:59 Aula: Virtual 67'>Viernes: 8:00-11:59 Aula: Virtual 67</option>
                    <option value='Viernes: 8:00-12:59 Aula: Virtual 68'>Viernes: 8:00-12:59 Aula: Virtual 68</option>
                    <option value='Viernes: 10:00-10:59 Aula: Virtual 69'>Viernes: 10:00-10:59 Aula: Virtual 69</option>
                    <option value='Viernes: 10:00-11:59 Aula: Virtual 70'>Viernes: 10:00-11:59 Aula: Virtual 70</option>
                    <option value='Viernes: 10:00-12:59 Aula: Virtual 71'>Viernes: 10:00-12:59 Aula: Virtual 71</option>
                    <option value='Viernes: 12:00-13:59 Aula: Virtual 72'>Viernes: 12:00-13:59 Aula: Virtual 72</option>
                    <option value='Viernes: 13:00-15:59 Aula: Virtual 73'>Viernes: 13:00-15:59 Aula: Virtual 73</option>
                    <option value='Viernes: 14:00-17:59 Aula: Virtual 74'>Viernes: 14:00-17:59 Aula: Virtual 74</option>
                    <option value='Viernes: 14:00-16:59 Aula: Virtual 75'>Viernes: 14:00-16:59 Aula: Virtual 75</option>
                    <option value='Viernes: 18:00-19:59 Aula: Virtual 76'>Viernes: 18:00-19:59 Aula: Virtual 76</option>
                    <option value='Viernes: 18:00-20:59 Aula: Virtual 77'>Viernes: 18:00-20:59 Aula: Virtual 77</option>
                    <option value='Viernes: 20:00-21:59 Aula: Virtual 78'>Viernes: 20:00-21:59 Aula: Virtual 78</option>

                    {/* Sabado */}
                    <option value='Sabados: 8:00-9:59 Aula: Virtual 79'>Sabados: 8:00-9:59 Aula: Virtual 79</option>
                    <option value='Sabados: 8:00-11:59 Aula: Virtual 80'>Sabados: 8:00-11:59 Aula: Virtual 80</option>
                    <option value='Sabados: 8:00-12:59 Aula: Virtual 81'>Sabados: 8:00-12:59 Aula: Virtual 81</option>
                    <option value='Sabados: 10:00-10:59 Aula: Virtual 82'>Sabados: 10:00-10:59 Aula: Virtual 82</option>
                    <option value='Sabados: 10:00-11:59 Aula: Virtual 83'>Sabados: 10:00-11:59 Aula: Virtual 83</option>
                    <option value='Sabados: 10:00-12:59 Aula: Virtual 84'>Sabados: 10:00-12:59 Aula: Virtual 84</option>
                    <option value='Sabados: 12:00-13:59 Aula: Virtual 85'>Sabados: 12:00-13:59 Aula: Virtual 85</option>
                    <option value='Sabados: 13:00-15:59 Aula: Virtual 86'>Sabados: 13:00-15:59 Aula: Virtual 86</option>
                    <option value='Sabados: 14:00-17:59 Aula: Virtual 87'>Sabados: 14:00-17:59 Aula: Virtual 87</option>
                    <option value='Sabados: 14:00-16:59 Aula: Virtual 89'>Sabados: 14:00-16:59 Aula: Virtual 89</option>
                    <option value='Sabados: 18:00-19:59 Aula: Virtual 90'>Sabados: 18:00-19:59 Aula: Virtual 90</option>
                    <option value='Sabados: 18:00-20:59 Aula: Virtual 91'>Sabados: 18:00-20:59 Aula: Virtual 91</option>
                    <option value='Sabados: 20:00-21:59 Aula: Virtual 92'>Sabados: 20:00-21:59 Aula: Virtual 92</option>
                    <option disabled></option>

                    </select>
                </div>


                {/* Docente */}
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Docente</label>
                    <input type="text" className="form-control" id="validationCustom03" required value={docente} onChange={handleDocente}/>
                </div>


                {/* Periodo */}
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Periodo</label>
                    <select className="form-select" id="validationCustom04" required value={periodo} onChange={handlePeriodo}>
                        <option disabled value="">Choose...</option>
                        
                        <option  value="Período: 1">Período: 1</option>
                        <option  value="Período: 2">Período: 2</option>
                        <option  value="Período: 3">Período: 3</option>
                        <option  value="Período: 4">Período: 4</option>
                        <option  value="Período: 5">Período: 5</option>
                        <option  value="Período: 6">Período: 6</option>
                        <option  value="Período: 7">Período: 7</option>
                    </select>
                </div>

                {/* Codigo Hora */}
                <div className="col-md-3">
                    <label htmlFor="validationCustom04" className="form-label">Codigo Horario</label>
                    <select className="form-select" id="validationCustom04" required value={codigoHora} onChange={handleCodigoHora}>
                        <option disabled value="">Choose...</option>
                        
                        <option  value="D">D</option>
                        <option  value="L">L</option>
                        <option  value="M">M</option>
                        <option  value="M">MI</option>
                        <option  value="J">J</option>
                        <option  value="V">V</option>
                        <option  value="S">S</option>
                    </select>
                </div>

                

                <div className="col-12">
                    <button className="btn btn-primary" >
                        Submit form
                        
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddStudents;