import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Pages.css';
import Ejercicio1 from './ejercicos/Ejercicio1';
import Ejercicio2 from './ejercicos/Ejercicio2';


function Ejercicios() {
  return (
  
  <>
    <div className='ejercios__page'>
      <div className='ejercios__textos'>
      <h1>Practica de ejercicos REACT 2022</h1>
      </div>
      <div className='ejercicios__contenido'>

       <Ejercicio1 />
       <Ejercicio2 />
      </div>

    </div>
    </>

  )
}

export default Ejercicios