import React, { useState } from 'react'
import BuscarBox from './buscarbox/BuscarBox';
import './Ejercicios.css';
import data from '../../../data/users.json';
import BusResul from './buscarbox/BusResul';


function Ejercicio2() {
  const [isAtTop, setIsAtTop] = useState(false); 
  const [resultado,setResultado] = useState([]);

  const Cerrar= () =>{
    setIsAtTop(false);
    setResultado([]);

  };
  const BuscarClick = (buscadorText) =>{
    setIsAtTop(true);
    if (data?.length) {
      const buscadorTextMinus = buscadorText.toLowerCase();
      const filteredData = data.filter((value)=>{
        return(
          value.name.toLowerCase().includes(buscadorTextMinus) ||
          value.phone.toLowerCase().includes(buscadorTextMinus) ||
          value.email.toLowerCase().includes(buscadorTextMinus) ||
          value.username.toLowerCase().includes(buscadorTextMinus)
        )
      });
      setResultado(filteredData);
    }
  };

  console.log(resultado);

 
  return (


    <div className='Ejercicio1'>
     <h1>Ejercicio 2</h1>
     <h2>Estilos condicionales</h2>
     <br />
     <br />
     <br />

    <div className={` buscar ${isAtTop ? "buscar--ariiba" : "buscar--center"}`}>
      <BuscarBox onBuscar={BuscarClick} onCerrar={Cerrar} isSinresul={isAtTop}/>
      <div>
       <BusResul resultado={resultado} isSinresul={isAtTop}/>
      </div> 
    </div>
   
   

    </div>




  )
}

export default Ejercicio2