//Esta es la vista de detalles del producto, se accede desde la foto del producto en el ItemList.

import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import itemsprop from '../../public/itemprop';
import './ItemDetailContainer.css';


const ItemDetailContainer = () => {

    //Se utiliza el ID del producto, extrayendo el parámetro con useParams
    let id = useParams();

    //Se utiliza una promise para mostrar y actualizar el estado del item.
    const [itemsd, setItemsd] = useState(itemsprop[id.id]);

    useEffect(() => {
      const getItem =  new Promise ((resolve, reject) => {
        setTimeout(() => {
          resolve(itemsd)
        }, 500)
      })
      getItem
      .then((res) => {setItemsd(res);
      })
      .catch((error) => {
        console.log(error)
      })
  
    });

  return (

    //Los detalles del item se encuentran en ItemDetail
    <div className = "MainItemDetail">
        <ItemDetail
        itemd = {itemsd}/>
    </div>
  )
};

export default ItemDetailContainer;