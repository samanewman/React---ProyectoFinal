//Este JS es el contenedor de la lista de productos que se ve en la sección de productos de la page.

import React, {useState, useEffect}from 'react';
import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import itemsjson from '../../public/itemprop';



const ItemListContainer = (props) =>{
  
  //Este estado contiene la info del array de productos resultado de la promise.
  const [items, setItems] = useState([]);
  
  //Resuelvo el listado y actualizo el state
  useEffect(() => {
    const itemsPromise =  new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(itemsjson)
      }, 500)
    })
    itemsPromise 
    .then((res) => {setItems(res);
      
    })
    .catch((error) => {
      console.log(error)
    })

  },[]);

  return (
    //Llamo al item list que contiene un mapeo del array de productos.
    
    <div className = "mainItemListContainer">
      <div className = "ContenedorSaludo">
        <ul>
          <li className = "ListaSaludo" style= {{color:`${props.color}`}}>{props.saludo}</li>
        </ul>
      </div>

      <div className = "ContenedorProductos">
        <ItemList
        items={items}/>
      </div> 
    </div>
  ) 

};

export default ItemListContainer;
