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
      <header className=' bg-primary header'>
          
          <nav className={`${menu ? 'change' : ''}${' navbar '}`}>
              <div className="hamburger-menu" onClick={handleMenu}>
                  <div className="line line-1"></div>
                  <div className="line line-2"></div>
                  <div className="line line-3"></div>
              </div>
              <ul className="ul-menu mt-2">
                  <li><NavLink to='periodo_1' className="nav-link active">Período: 1</NavLink></li>
                  <li><NavLink to='periodo_2' className="nav-link">Período: 2</NavLink></li>
                  <li><NavLink to='periodo_3' className="nav-link">Período: 3</NavLink></li>
                  <li><NavLink to='periodo_4' className="nav-link">Período: 4</NavLink></li>
                  <li><NavLink to='periodo_5' className="nav-link">Período: 5</NavLink></li>
                  <li><NavLink to='periodo_6' className="nav-link">Período: 6</NavLink></li>
                  <li><NavLink to='periodo_7' className="nav-link">Período: 7</NavLink></li>
              </ul>
                
          </nav>
          <div className="header-perfil  ">
                    <div className=' pt-1'>
                        <i className='bx bx-user-circle'></i>
                    </div>
                    
                    <div>
                        <button className=" btn text-light" onClick={handleSignout}>SignOut</button>
                    </div>
                   
                   
                    <div className='ms-4 first-letter' style={{ backgroundColor : color}}>
                        <span>{user.slice(0,1).toUpperCase()}</span>
                    </div>
                    <div className='ms-5 carpeta'>
                        <Link to='/add_students' className=''><i className='bx bxs-folder-plus'></i></Link>
                    </div>
            </div>
            
      </header>
    )
}

export default Header;