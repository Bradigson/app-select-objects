import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LogIn = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmail = (e)=>{
        setEmail(e.target.value);
    }

    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault();

        if(email === ''){
            alert('campo email empty')
        }else if(password === ''){
            alert('campo password vacio')
        }else{
            navigate('select-objects/periodo_1')
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><i className='bx bxs-envelope'></i></span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" 
                    aria-describedby="basic-addon1" value={email} onChange={handleEmail}/>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><i className='bx bxs-lock' ></i></span>
                    <input type="password" className="form-control" placeholder="Username" aria-label="Username" 
                    ria-describedby="basic-addon1" value={password} onChange={handlePassword}/>
                </div>
                <div>
                     <button  className="btn btn-outline-primary">Primary</button>
                </div>
            </form>
        </div>
    )
}

export default LogIn;