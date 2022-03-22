//Pie de página (Footer)

import React from 'react'
import './Footer.css'
import logowhatsapp from '../../imagenes/logo-whatsapp.png'
import logoinstagram from '../../imagenes/logo-instagram.png'


const Footer = () => {
  return (
    <div className = "bodyFooter">
      <hr/>
      <div className = "Redes">
        <div>Nuestras redes</div>
        <a href="https://wa.me/5491158666939/?text=¡Hola DioNeon! Quiero realizarte una consulta"><img src= {logowhatsapp} alt="logo-whatsapp" /></a>
        <a href="https://www.instagram.com/dioneonled/"><img src={logoinstagram} alt="logo-instagram" /></a>
      </div>
      <div>
          <div className="copyright">
          Copyright &copy; 2022 <span>DIONEON. Todos los derechos reservados</span>
          </div>
      </div>
    </div>
  )
}

export default Footer