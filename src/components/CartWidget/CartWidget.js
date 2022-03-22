//Icono del carrito de compras que se visualiza en el nav.

import React from 'react';
import img from '../../imagenes/Carrito.png';
import './CartWidget.css';
import {Link} from "react-router-dom";

const CartWidget = () => {
  return <div className ="BoxContenedor">
      <div className ="BoxImg">
      <Link  to="/carritoList"><img src={img} alt = "ImgCarrito" className = "ImgCarrito"></img></Link>
      </div>
  </div>;
};

export default CartWidget; 
