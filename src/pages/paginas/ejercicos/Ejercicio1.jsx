import React, { useState } from 'react';
import './Ejercicios.css';
import German from '../../../assets/german.jpg';


function Ejercicio1() {
  const [isCambioclass, setIsCambioclass] = useState(true); 
  const Cambio = ()=>{
    setIsCambioclass(!isCambioclass);
  };
  
  const estilo1={background:"green"}
  const estilo2={background:"aquamarine"}

  const [color,setColor]=useState(estilo1);
  const cambioc = ()=>{
    setColor(estilo2)
  }
  const cambiocc = ()=>{
    setColor(estilo1)
  }


  
 const [vercontenido,setVercontenido]=useState("");
 const escribir = () =>{
    setVercontenido("boton1")
 }
 const foto = ()=>{
  setVercontenido( <img src={German} className="navpcpc__img"/> )
 } 
  return (
    <>
      <div className='Ejercicio1'>
        <h1>Ejercicio1</h1>
        <h2>Variables</h2>
        <br />
        <br />

            
        <button onClick={()=>escribir()}>boton 1</button>
        <button onClick={foto}>foto</button>
        <button onClick={()=>cambioc()}>color1</button>
        <button onClick={()=>cambiocc()}>color2</button>
        <br />
        <br />
        <div className='caja' style={color}>{vercontenido} <h3>Ejemplo de variales</h3></div>
        <br />
        <br />
        <button onClick={Cambio}>cambiar clase</button>
        <br />
        <br />
        <div className={` cambioclase ${isCambioclass ? "cambioclase--uno" :   "cambioclase--dos" }`}>
         <h1>Cambio de clases</h1>
        </div>
     </div>

    </>

  )
}

export default Ejercicio1