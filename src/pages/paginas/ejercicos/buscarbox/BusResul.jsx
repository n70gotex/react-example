import React from 'react'
import './BuscarBox.css';

function BusResul({resultado, isSinresul}) {
  return (
   <>
   <h1>resultados</h1>
   <div>
    {!resultado?.length && isSinresul &&<p>no existen resultados</p>}
    {resultado?.map((value)=>{
     return(
      <div className='BusResul' key={value.id}>
        <p>Nombre: {value.name}</p>
        <p>mail: {value.email}</p>
        <p>telefono: {value.phone}</p>
      </div>

    );
   })}
   </div> 
   </>
  )
}

export default BusResul