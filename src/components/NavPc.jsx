import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../css/NavPc.css';
import icoreact from '../assets/react.svg';
import abajo from '../assets/abajo.svg';
import up from '../assets/up.svg'
import LogoGerman from '../assets/german.jpg';


function NavPc() {
  const[ menu, setMenu] = useState (false);
  const toggleMenu= ()=>{
    setMenu( !menu)
  }

  const[ menuss, setMenuss] = useState (false);
  const toggleMenuss= ()=>{
    setMenuss( !menuss)
  }

  return (
    <header>
      <div className='navpc'>

        <div className='navpc__logo'>
         <img src={LogoGerman} className="navpc__img"/>
        </div>
        
        <div className='navpc__link'>

          
          
          <div className='navpc__ul'>

            <Link className='navpc__link' to="/Home">Inicio</Link> 
            <Link className='navpc__link' to="/Galeria">Galeria</Link>
            <Link className='navpc__link' to="/Sobre-mi">Sobremi</Link>
     
            <div className='navpc__item'>
              <span onClick={toggleMenu}  className='navpc__span'>Paginas de Pruebas</span>
              <div className={ `navpc__paginas ${ menu ? 'isActive' : '' }` }>
                
                <div className='navpc__cajauno'>
                    <Link className='navpc__linkpaginas' to="/Ejercicios"><img src={icoreact} className="navpc__illustration" alt="logo"/>Ejercicios REACT</Link>

                    <Link className='navpc__linkpaginas' to="/Notas"><img src={icoreact} className="navpc__illustration" alt="logo"/>Notas</Link>
                      
                    <Link className='navpc__linkpaginas' to="/Otras"><img src={icoreact} className="navpc__illustration" alt="logo"/>Otras</Link>

                    <div className='navpc__botonarriba'>
                      <img onClick={toggleMenu} src={up} alt="" className='abajo'/>
                    </div>
                </div>
              </div>

            </div>
            
            <div className='navpc__item'>
              <span onClick={toggleMenuss} className='navpc__span'>Blogs</span>
               
              <div className={ `verponsive ${ menuss ? 'isActive' : '' }` }>
                <div className='navpc__cajados'>
                      <Link className='navpc__linkpaginas' to="/Ejercicios"><img src={icoreact} className="navpc__illustration" alt="logo"/>Ejercicios REACT</Link>

                      <Link className='navpc__linkpaginas' to="/Notas"><img src={icoreact} className="navpc__illustration" alt="logo"/>Notas</Link>
                        
                      <Link className='navpc__linkpaginas' to="/Otras"><img src={icoreact} className="navpc__illustration" alt="logo"/>Otras</Link>

                      <div className='navpc__botonarriba'>
                        <img onClick={toggleMenuss} src={up} alt=""/>
                      </div>
                </div>
              </div>
            </div>

            <div className='navpc__cerrar'>
             <Link className='navpc__link' to="/Home">Cerrar secion</Link> 
            </div>


          </div>
        </div>
      </div>
    </header> 





  )
}

export default NavPc