import React, { useState } from 'react';
import './BuscarBox.css';

function BuscarBox({ onBuscar, onCerrar, isSinresul}) {
  const [ buscadorText, setBuscadorText]= useState("");

  
  const CerrarClean = () =>{
    setBuscadorText("");
    onCerrar();

  }

  return (
    <>
    <div className='buscar-box'>
      <h2 className='busaca-box-text'>Buscardo de personal</h2>
     <div className='busaca-box-botones'>
      <label>
       <input
        className='busaca-box-input' 
        value={buscadorText} 
        onChange= {({ target: { value}})=> setBuscadorText(value)}/>
      </label>
      <button onClick={()=>onBuscar(buscadorText)} disabled={!buscadorText.length} >Buscar</button>
     {isSinresul && <button onClick={CerrarClean} disabled={!buscadorText.length}>Cerrar</button>}
     </div>
     
    </div>
    
    </>
  )
}

export default BuscarBox