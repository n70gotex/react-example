import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../css/NavSmart.css';
import abajo from '../assets/abajo.svg';
import aico from '../assets/aico.svg'
import LogoGerman from '../assets/german.jpg';

function NavSmart() {
  const[ menu, setMenu] = useState (false);
  const toggleMenu= ()=>{
    setMenu( !menu)
  }
  const[ height, setHeight] = useState (false);
  const toggleHeight= ()=>{
    setHeight( !height)
  }
  const[ heights, setHeights] = useState (false);
  const toggleHeights= ()=>{
    setHeights( !heights)
  }
  



  return (
    <div className='nav__container'>
    <nav className='nav container'>
      <div className='nav__logo'>
       <img src={LogoGerman} className="nav__img"/>
      </div>
      <div  onClick={toggleMenu}  className='nav__hamburguer'>

      </div>
      
      <div className={ `nav__overlay ${ menu ? 'isActive' : '' }` }>
        <ul className='nav__menu'>
        <li className='nav__item'>          
          <a href='#' className='nav__link'>Inicio</a>
        </li>

        <li className='nav__item'>          
          <a href='#' className='nav__link'>Galeria</a>
        </li>

        <li className='nav__item'>          
          <a href='#' className='nav__link'>Sobre Mi...</a>
        </li>
        

        <li className='nav__item'>

          <span onClick={toggleHeight} className='nav__parent'>Paginas</span>
          
          <ul className={ `nav__inner ${ height ? 'isActive' : '' }` }>
            <li className='nav__dropdown'><a href='#' className='nav__link'><img src={aico} className="nav__illustration" alt="logo"/>ejercicios en react 1</a>
            </li>

            <li className='nav__dropdown'><a href='#' className='nav__link'><img src={aico} className="nav__illustration" alt="logo"/>Notas</a>
            </li>
            
            <li className='nav__dropdown'><a href='#' className='nav__link'><img src={aico} className="nav__illustration" alt="logo"/>Otras</a>
            </li>
            
          </ul>
        </li>

        <li className='nav__item'>

          <div>
          
          <span onClick={toggleHeights} className='nav__parent'>Blogs</span>

          </div>




          
          <ul className={ `nav__inners ${ heights ? 'isActive' : '' }` }>

            <li className='nav__dropdown'><a href='#' className='nav__link'><img src={aico} className="nav__illustration" alt="logo"/>Blog</a>
            </li>

            <li className='nav__dropdown'><a href='#' className='nav__link'><img src={aico} className="nav__illustration" alt="logo"/>Publicaciones</a>
            </li>

            <li className='nav__dropdown'><a href='#' className='nav__link'><img src={aico} className="nav__illustration" alt="logo"/>Datos</a>
            </li>
            
          </ul>
        </li>



        <li className='nav__login'>          
          <a href='#' className='nav__link'>Iniciar secion</a>
        </li>
        
        <li className='nav__login nav__login--border'>          
          <a href='#' className='nav__link'>Registar</a>
        </li>

        </ul>

      </div>

    </nav>
    </div>
  )
}

export default NavSmart