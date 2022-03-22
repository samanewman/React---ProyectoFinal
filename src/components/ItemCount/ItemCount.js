//El count permite seleccionar una cantidad de productos para añadir al carrito.

import React from 'react';
import './ItemCount.css';
import { useState } from 'react';
import {Link} from "react-router-dom";

const ItemCount = (props) => {

  //State del contador de cantidad
  const[counter, setCounter] = useState(props.initial);
  //State del botón Agregar al carrito. Cuando está true se muestra, sino no.
  const [show, setShow] = useState (true);

  //Expresión funcional que permite incrementar el contador
  const SubirCantidad = () => {
    
    if (parseInt(props.stock - 1 ) >= parseInt(counter)){
      setCounter (parseInt(counter) + 1); 
    }  
  };

  //Expresión funcional que permite decrementar el contador.
  
  const BajarCantidad = () => {
    if (counter > (props.initial)){
      setCounter (parseInt(counter) - 1);
      props.stock = props.stock + 1;
    }else if(counter <= (props.initial)){
      if (counter !== 0){
      setCounter (parseInt(counter) - 1);
      props.stock = props.stock + 1;
      }
    }
  };

  return (
    
  <div className = "ContenedorItemCount">

    {show ? (
      <div className = "ContenedorItemCount">
        <div className="ContenedorContador">
          <button id= "BotonContadorMas" onClick={SubirCantidad}>+</button>
          <div id = "Contador">{counter}</div>
          <button id = "BotonContadorMenos" onClick={BajarCantidad}>-</button>
        </div>
        
        <button id = "BotonAgregar" 
          onClick = {() =>{
            props.add(counter);
            setShow(!show);
          }}
          >Agregar al carrito
        </button>
      </div>
      ):(
      <button><Link to="/carritoList">Ir al carrito</Link></button>
      )}
      
  </div>
  )
}


export default ItemCount;
