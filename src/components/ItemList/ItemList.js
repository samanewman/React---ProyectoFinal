//Mapeo de items

import React from 'react';
import Item from '../item/Item';
import './ItemList.css';

const ItemList = ({items}) => {

   return ( 
   
   <div className = "ItemListBox">
     {
      items.map((item) => (
      <Item
      key = {item.ItemId}
      items = {item}
    />
     ))
    }
    
   </div>     
      
    )
}

export default ItemList;
