import React from 'react'
import '../css/Footer.css';
import logouno from '../assets/whatsapp.svg';
import logodos from '../assets/instagram.svg';
import logotres from '../assets/facebook-circle.svg';
import logoReact from '../assets/LogoReact.svg';


function Footer() {
  return (
    <footer>

        <div className='footer-header'>
          <div className='logo'>
          
            <p>Pruebas en REACT</p>
          </div>
          <div className='redes'>
            <span><img src={logouno} className="App-logo-copia" alt="logo" /></span>
            <span><img src={logodos} className="App-logo-copia" alt="logo" /></span>
            <span><img src={logotres} className="App-logo-copia" alt="logo" /></span>
          </div>
        </div>
  
        <div className='section'>
          <div className='logo-grande'>
            <img src={logoReact} className="App-logo-React" alt="logo" /> 
            <p className='App-logo-React-texto'>Pruebas en REACT</p>
          </div>
          
          <div>
            <h2>Menu</h2>
            <a href="#">menu</a>
            <a href="#">menu</a>
            <a href="#">menu</a>
          </div>

          <div>
            <h2>Paginas</h2>
            <a href="#">menu</a>
            <a href="#">menu</a>
          </div>

          <div className='footer__comenta'>
            <h2>Comenta</h2>
            <form>
            <input className='footer__input' type="text" placeholder="escribe aqui"></input>
            <button className='footer__button' type='submit'>Enviar</button>
            </form>
          </div>
        </div>
      
        <div className='derechos'>
          <p>Copyright@2022 germani9100@gmail.com. ALL right reserved</p>
          <p>Privacy Policy terms and Conditions</p>
        </div>

    </footer>
  )
}

export default Footer