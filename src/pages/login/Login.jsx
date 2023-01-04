import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../home/Home';

function Login() {
  return (
    <>
    <div className='login'>
      <div className='login-container'>
        <div className='login-text'>
         <h1>Este es el login</h1>
        </div>
        <div className='login-link'>
         <Link to="/Home"><h2>ir al Inicio</h2></Link>
         <Link to="/Home"><h2>ir al Inicio 2</h2></Link>
        </div>
      </div>
    </div>
    
    
    </>

  )
}

export default Login