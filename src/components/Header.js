import '../assets/style/Header.scss';
import { Link, NavLink } from "react-router-dom";

const Header = ()=>{
    
    return(
      <header className="bg-primary header">
          
          <nav className="navbar">
              <div className="hamburger-menu">
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
          <div className="header-perfil">
                    <div className=' pt-1'>
                        <i className='bx bx-user-circle'></i>
                    </div>
                    <div>
                        <button className=" btn text-light">SignOut</button>
                    </div>
                    <div className='ms-3'>
                      <i className='bx bxs-moon'></i>
                    </div>
                    <div className='ms-5'>
                        <Link to='/add_students' className=''><i className='bx bxs-folder-plus'></i></Link>
                    </div>
            </div>
            
      </header>
    )
}

export default Header;