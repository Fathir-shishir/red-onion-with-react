import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png'

const Header = () => {
    return (
        <div className='d-flex align-items-center container mt-2'>
        <div className="col-md-6 ">
            <img style={{height:"40px",width:"200px"}} src={logo} alt="" />
            
        </div>
        <div className="col-md-6 d-flex justify-content-end" >
            <nav>
            <Link className='mx-3 text-decoration-none text-black' to="/login">Log In</Link>
            <Link className='mx-3  text-decoration-none text-black' to="/singup">Sing up</Link>
            </nav>
        </div>
            
        </div>
    );
};

export default Header;