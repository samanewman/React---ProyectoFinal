//Vista del carrito de compras. Se accede desde el botón de "Ir al carrito" luego de darle comprar
//o también desde el item del carrito en el nav.
//Contiene un mapeo del array carrito que contiene los productos que se añaden al carrito.

import React from 'react';
import './Carrito.css';
import {useContext} from 'react';
import {CartContext} from '../CartContext/CartContext';

const Carrito = () => {

  //Se usa el carrito que se encuentra en el context y la función de eliminar item del carrito.
  const {carrito} = useContext(CartContext);
  const {removeItem} = useContext(CartContext);


  //map del carrito y vista de la información del mismo.

    return (
    <div>
      <h1>TU CARRITO</h1>

      <div className = "ContainerCarrito">
          <hr></hr>
        {
        carrito.map( (itemcarrito) => (
          
          <div className = "ContainerDetallesCarrito">

            <img className = "img"src = {itemcarrito.foto} alt = {itemcarrito.nombre} />
            <div>
              <div>Nombre:</div> 
                <div>{itemcarrito.nombre}</div>
              </div>
            <div>
              <div>Cantidad:</div>
              <div>{itemcarrito.cantidad}</div>
            </div>
            <div>
              <div>Tamaño:</div>
              <div>{itemcarrito.size}</div>
            </div>
            <div>
              <div>Color:</div> 
              <div style={{color: `${itemcarrito.color}`}}>■</div>
            </div>
            <div>
              <div>Precio:</div> 
              <div>{itemcarrito.precio}</div>
            </div>
            <button onClick = {() =>{
              removeItem(itemcarrito);
            }}>Borrar</button>
          </div>
        ))
        }

        
      </div>
      <div className = "BotonComprar">
    <button >Comprar</button>
    </div>
  </div>
  ) 


}

export default Carrito;