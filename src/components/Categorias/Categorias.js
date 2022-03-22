//Menú categorías -- La page permite filtrar por categorías

import React from 'react';
import {useParams} from 'react-router';
import ItemList from '../ItemList/ItemList';
import itemsjson from '../../public/itemprop';
import {useState, useEffect} from 'react';


const Categorias = () => {

  //state del item, se utilizan los parámetros de la url. Se filtra el array por categoría.
  const [items, setItems] = useState([]);
    let categoria = useParams();
    const itemsjsonfilt = itemsjson.filter(producto => producto.categoria === categoria.categoria);

    //Promise para actualizar la info
    useEffect(() => {
        const itemsPromise =  new Promise ((resolve, reject) => {
          setTimeout(() => {
            resolve(itemsjsonfilt)
          }, 500)
        })
        itemsPromise 
        .then((res) => {setItems(res);
          
        })
        .catch((error) => {
          console.log(error)
        })
    
      },[itemsjsonfilt]);
    
      return (
        //El mapeo de los items
        <div className = "mainItemListContainer">    
          <div className = "ContenedorProductos">
            <ItemList
            items={items}/>
          </div> 
        </div>
      ) 
    
    };
    
    export default Categorias;
    