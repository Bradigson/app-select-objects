import { Link } from 'react-router-dom';
import '../assets/style/AddStudents.scss';

const AddStudents = ()=>{
    return(
        <div className="container">
            
            <form class="row g-3 needs-validation" novalidate>
                <div className=''>
                     <Link to='/select-objects/periodo_1'><i class='bx bx-log-out'></i></Link>
                </div>
                {/* Codigo */}
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">Codigo</label>
                    <input type="text" class="form-control" id="validationCustom01" value="" required/>
                </div>

                {/* Creditos */}
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Creditos</label>
                    <input type="text" class="form-control" id="validationCustom02" value="" required/>
                </div>

                {/*Asignatura  */}
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Asignatura</label>
                    <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Choose...</option>
                    <option selected disabled value=""></option>
                    <option selected disabled value="">Período: 1</option>
                        <option value=''>Precálculo</option>
                        <option value=''>Fundamentos del Computador</option>
                        <option value=''>Propedéutico de Matemática</option>
                        <option value=''>Inglés Nivel 1-3</option>
                        <option value=''>Historia Universal</option>
                        <option value=''>Redacción Castellana</option>
                        <option value=''>Ética 1</option>
                        <option value=''>Introducción a la elaboración de Algoritmos</option>
                        <option value=''>Orientación Institucional</option>

                        <option selected disabled value=""></option>
                        <option selected disabled value="">Período: 2</option>
                        <option value=''>Fundamentos de programación</option>
                        <option value=''>Cálculo Diferencial</option>
                        <option value=''>Introducción a las bases de Datos</option>
                        <option value=''>Historia Dominicana</option>
                        <option value=''>Inglés Nivel 4-6</option>
                        <option value=''>Contabilidad Financiera</option>
                        <option value=''>Ética 2</option>
                        
                        <option selected disabled value=""></option>
                        <option selected disabled value="">Período: 3</option>
                        <option value=''>Probabilidad y Estadística</option>
                        <option value=''>Fisica General</option>
                        <option value=''>Laboratorio Fisica General</option>
                        <option value=''>Inglés Nivel 7-9</option>
                        <option value=''>Programación I</option>
                        <option value=''>Análisis y Diseño de Sistemas</option>
                        <option value=''>Cálculo Integral</option>
                        <option value=''>Ética 3</option>

                        <option selected disabled value=""></option>
                        <option selected disabled value="">Período: 4</option>
                        <option value=''>Diseño Centrado en el usuario</option>
                        <option value=''>Base de Datos Avanzada</option>
                        <option value=''>Programación II</option>
                        <option value=''>Inteligencia Artificial</option>
                        <option value=''>Inglés Nivel 10-12</option>
                        <option value=''>Metodología de investigación</option>
                        
                        <option selected disabled value=""></option>
                        <option selected disabled value="">Período: 5</option>
                        <option value=''>Fundamentos de Electrónica</option>
                        <option value=''>Laboratorio Fundamentos de Electrónic</option>
                        <option value=''>Auditoría Informática</option>
                        <option value=''>Programación III</option>
                        <option value=''>Minería de Datos e Inteligencia de Negocios</option>
                        <option value=''>Programación Web</option>
                        <option value=''>Electiva 1</option>
                        
                        <option selected disabled value=""></option>
                        <option selected disabled value="">Período: 6</option>
                        <option value=''>Electiva 2</option>
                        <option value=''>Inglés Técnico</option>
                        <option value=''>Programación Paralela</option>
                        <option value=''>Introducción a la ingeniería de software</option>
                        <option value=''>Desarrollo de Emprendedores</option>
                        <option value=''>Educación Física</option>
                        <option value=''>Ética 1</option>
                        <option value=''>Introducción a la elaboración de Algoritmos</option>
                        <option value=''>Orientación Institucional</option>

                        <option selected disabled value=""></option>
                        <option selected disabled value="">Período: 7</option>
                        <option value=''>Estructura de Datos</option>
                        <option value=''>Administración de Proyectos de Software</option>
                        <option value=''>Introducción al desarrollo de aplicaciones móviles</option>
                        <option value=''>Proyecto Final TDS</option>
                        <option value=''>Plan de Negocios</option>
                        <option selected disabled value=""></option>
                        

                    </select>
                   
                </div>

                {/* Modalidad */}
                <div class="col-md-6">
                    <label for="validationCustom03" class="form-label">Modalidad</label>
                    <input type="text" class="form-control" id="validationCustom03" required value=''/>
                </div>


                {/* Horario */}
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">Horario</label>
                    <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Choose...</option>

                    
                    {/* Domingo */}
                    <option>Domingo: 8:00-9:59 Aula: Virtual 1</option>
                    <option>Domingo: 8:00-11:59 Aula: Virtual 2</option>
                    <option>Domingo: 8:00-12:59 Aula: Virtual 3</option>
                    <option>Domingo: 10:00-10:59 Aula: Virtual 4</option>
                    <option>Domingo: 10:00-11:59 Aula: Virtual 5</option>
                    <option>Domingo: 10:00-12:59 Aula: Virtual 6</option>
                    <option>Domingo: 12:00-13:59 Aula: Virtual 7</option>
                    <option>Domingo: 13:00-15:59 Aula: Virtual 8</option>
                    <option>Domingo: 14:00-17:59 Aula: Virtual 9</option>
                    <option>Domingo: 14:00-16:59 Aula: Virtual 10</option>
                    <option>Domingo: 18:00-19:59 Aula: Virtual 11</option>
                    <option>Domingo: 18:00-20:59 Aula: Virtual 12</option>
                    <option>Domingo: 20:00-21:59 Aula: Virtual 13</option>

                    {/* Lunes */}
                    <option>Lunes: 8:00-9:59 Aula: Virtual 14</option>
                    <option>Lunes: 8:00-11:59 Aula: Virtual 15</option>
                    <option>Lunes: 8:00-12:59 Aula: Virtual 16</option>
                    <option>Lunes: 10:00-10:59 Aula: Virtual 17</option>
                    <option>Lunes: 10:00-11:59 Aula: Virtual 18</option>
                    <option>Lunes: 10:00-12:59 Aula: Virtual 19</option>
                    <option>Lunes: 12:00-13:59 Aula: Virtual 20</option>
                    <option>Lunes: 13:00-15:59 Aula: Virtual 21</option>
                    <option>Lunes: 14:00-17:59 Aula: Virtual 22</option>
                    <option>Lunes: 14:00-16:59 Aula: Virtual 23</option>
                    <option>Lunes: 18:00-19:59 Aula: Virtual 24</option>
                    <option>Lunes: 18:00-20:59 Aula: Virtual 25</option>
                    <option>Lunes: 20:00-21:59 Aula: Virtual 26</option>
                    

                    {/* Martes */}
                    <option>Martes: 8:00-9:59 Aula: Virtual 27</option>
                    <option>Martes: 8:00-11:59 Aula: Virtual 28</option>
                    <option>Martes: 8:00-12:59 Aula: Virtual 29</option>
                    <option>Martes: 10:00-10:59 Aula: Virtual 30</option>
                    <option>Martes: 10:00-11:59 Aula: Virtual 31</option>
                    <option>Martes: 10:00-12:59 Aula: Virtual 32</option>
                    <option>Martes: 12:00-13:59 Aula: Virtual 33</option>
                    <option>Martes: 13:00-15:59 Aula: Virtual 34</option>
                    <option>Martes: 14:00-17:59 Aula: Virtual 35</option>
                    <option>Martes: 14:00-16:59 Aula: Virtual 36</option>
                    <option>Martes: 18:00-19:59 Aula: Virtual 37</option>
                    <option>Martes: 18:00-20:59 Aula: Virtual 38</option>
                    <option>Martes: 20:00-21:59 Aula: Virtual 39</option>
                    

                    {/* Miercoles */}
                    <option>Miercoles: 8:00-9:59 Aula: Virtual 40</option>
                    <option>Miercoles: 8:00-11:59 Aula: Virtual 41</option>
                    <option>Miercoles: 8:00-12:59 Aula: Virtual 42</option>
                    <option>Miercoles: 10:00-10:59 Aula: Virtual 43</option>
                    <option>Miercoles: 10:00-11:59 Aula: Virtual 44</option>
                    <option>Miercoles: 10:00-12:59 Aula: Virtual 45</option>
                    <option>Miercoles: 12:00-13:59 Aula: Virtual 46</option>
                    <option>Miercoles: 13:00-15:59 Aula: Virtual 47</option>
                    <option>Miercoles: 14:00-17:59 Aula: Virtual 48</option>
                    <option>Miercoles: 14:00-16:59 Aula: Virtual 49</option>
                    <option>Miercoles: 18:00-19:59 Aula: Virtual 50</option>
                    <option>Miercoles: 18:00-20:59 Aula: Virtual 51</option>
                    <option>Miercoles: 20:00-21:59 Aula: Virtual 52</option>


                    {/* Jueves */}
                    <option>Jueves: 8:00-9:59 Aula: Virtual 53</option>
                    <option>Jueves: 8:00-11:59 Aula: Virtual 54</option>
                    <option>Jueves: 8:00-12:59 Aula: Virtual 55</option>
                    <option>Jueves: 10:00-10:59 Aula: Virtual 56</option>
                    <option>Jueves: 10:00-11:59 Aula: Virtual 57</option>
                    <option>Jueves: 10:00-12:59 Aula: Virtual 58</option>
                    <option>Jueves: 12:00-13:59 Aula: Virtual 59</option>
                    <option>Jueves: 13:00-15:59 Aula: Virtual 60</option>
                    <option>Jueves: 14:00-17:59 Aula: Virtual 61</option>
                    <option>Jueves: 14:00-16:59 Aula: Virtual 62</option>
                    <option>Jueves: 18:00-19:59 Aula: Virtual 63</option>
                    <option>Jueves: 18:00-20:59 Aula: Virtual 64</option>
                    <option>Jueves: 20:00-21:59 Aula: Virtual 65</option>

                    {/* Viernes */}
                    <option>Viernes: 8:00-9:59 Aula: Virtual 66</option>
                    <option>Viernes: 8:00-11:59 Aula: Virtual 67</option>
                    <option>Viernes: 8:00-12:59 Aula: Virtual 68</option>
                    <option>Viernes: 10:00-10:59 Aula: Virtual 69</option>
                    <option>Viernes: 10:00-11:59 Aula: Virtual 70</option>
                    <option>Viernes: 10:00-12:59 Aula: Virtual 71</option>
                    <option>Viernes: 12:00-13:59 Aula: Virtual 72</option>
                    <option>Viernes: 13:00-15:59 Aula: Virtual 73</option>
                    <option>Viernes: 14:00-17:59 Aula: Virtual 74</option>
                    <option>Viernes: 14:00-16:59 Aula: Virtual 75</option>
                    <option>Viernes: 18:00-19:59 Aula: Virtual 76</option>
                    <option>Viernes: 18:00-20:59 Aula: Virtual 77</option>
                    <option>Viernes: 20:00-21:59 Aula: Virtual 78</option>

                    {/* Sabado */}
                    <option>Sabados: 8:00-9:59 Aula: Virtual 79</option>
                    <option>Sabados: 8:00-11:59 Aula: Virtual 80</option>
                    <option>Sabados: 8:00-12:59 Aula: Virtual 81</option>
                    <option>Sabados: 10:00-10:59 Aula: Virtual 82</option>
                    <option>Sabados: 10:00-11:59 Aula: Virtual 83</option>
                    <option>Sabados: 10:00-12:59 Aula: Virtual 84</option>
                    <option>Sabados: 12:00-13:59 Aula: Virtual 85</option>
                    <option>Sabados: 13:00-15:59 Aula: Virtual 86</option>
                    <option>Sabados: 14:00-17:59 Aula: Virtual 87</option>
                    <option>Sabados: 14:00-16:59 Aula: Virtual 89</option>
                    <option>Sabados: 18:00-19:59 Aula: Virtual 90</option>
                    <option>Sabados: 18:00-20:59 Aula: Virtual 91</option>
                    <option>Sabados: 20:00-21:59 Aula: Virtual 92</option>
                    <option selected disabled value=""></option>

                    </select>
                </div>


                {/* Docente */}
                <div class="col-md-6">
                    <label for="validationCustom03" class="form-label">Docente</label>
                    <input type="text" class="form-control" id="validationCustom03" required value=''/>
                </div>

                <div class="col-12">
                    <button class="btn btn-primary" >Submit form</button>
                </div>
            </form>
        </div>
    )
}

export default AddStudents;