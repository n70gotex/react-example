import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/NavPaginas.css';

function NavPaginas() {
  return (
    <>
    <div className='nav__paginas'>
      <div>
        <Link className='paginas__link' to="/Ejercicios">Ejercicios</Link>
                       
        <Link className='paginas__link'  to="/Notas">Notas</Link>
      
        <Link className='paginas__link'  to="/Otras">Otras</Link>
      </div>
      <div>
      <Link className='paginas__link'  to="/Home">Inicio</Link>
      </div>
    </div>    
    </>
  )
}

export default NavPaginas