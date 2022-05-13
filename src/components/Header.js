import '../assets/style/Header.scss';
import '../assets/MediaQueries/HeaderResponsive.scss';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

const Header = ({ getMode })=>{
    const [menu, setMenu] = useState(false);
    const [user, setUser] = useState(
        localStorage.getItem('user')
    );
    const [color, setColor] = useState(
        localStorage.getItem('color')
    )

    const handleMenu = ()=>{
        setMenu(!menu);
    }


    const navigate = useNavigate();
    const handleSignout = ()=>{
        localStorage.removeItem('user');
        navigate('/')
    }
  


    return(


            <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className=""><i className='bx bx-menu shadow rounded'></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-4">

                        <li><NavLink to='periodo_1' className={({isActive})=> isActive ? 'active nav-link text-light shadow-lg rounded' 
                        : ' text-light nav-link'}>Período 1</NavLink></li>
                        <li><NavLink to='periodo_2' className={({isActive})=> isActive ? 'active nav-link text-light shadow-lg rounded' 
                        : ' text-light nav-link'}>Período 2</NavLink></li>
                        <li><NavLink to='periodo_3' className={({isActive})=> isActive ? 'active nav-link text-light shadow-lg rounded' 
                        : ' text-light nav-link'}>Período 3</NavLink></li>
                        <li><NavLink to='periodo_4' className={({isActive})=> isActive ? 'active nav-link text-light shadow-lg rounded' 
                        : ' text-light nav-link'}>Período 4</NavLink></li>
                        <li><NavLink to='periodo_5' className={({isActive})=> isActive ? 'active nav-link text-light shadow-lg rounded' 
                        : ' text-light nav-link'}>Período 5</NavLink></li>
                        <li><NavLink to='periodo_6' className={({isActive})=> isActive ? 'active nav-link text-light shadow-lg rounded' 
                        : ' text-light nav-link'}>Período 6</NavLink></li>
                        <li><NavLink to='periodo_7' className={({isActive})=> isActive ? 'active nav-link text-light shadow-lg rounded' 
                        : ' text-light nav-link'}>Período 7</NavLink></li>

                    </ul>
                    <form className="">
                        <div className="header-perfil">
                            <div className=''>
                                <i className='bx bx-user-circle'></i>
                            </div>
                            
                            <div className='r'>
                                <button className=" btn text-light" onClick={handleSignout}>SignOut</button>
                            </div>
                        
                        
                            <div className='ms-3 first-letter' style={{ backgroundColor : color}}>
                                <span>{user.slice(0,1).toUpperCase()}</span>
                            </div>
                            
                            <div className='ms-3 text-light resumen '>
                                <NavLink to='/resumen' className={({isActive})=> isActive ? 'active nav-link text-light  p-0 text-center' 
                                : ' text-light nav-link  p-0 text-center'}><i class='bx bxs-spreadsheet fs-2 '></i></NavLink>
                                    <span className=' text-center '>Resumen de selección</span>
                            </div>
                            <div className='ms-4 carpeta'>
                                <Link to='/add_students' className=''><i className='bx bxs-folder-plus'></i></Link>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </nav>
          
         
    )
}

export default Header;






 