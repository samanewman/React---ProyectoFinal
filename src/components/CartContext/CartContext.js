//contexto con las funciones y states globales que se utilizan en los distintos components.
import { createContext } from 'react/cjs/react.development';
import React, {useState} from 'react';

//creación del contexto
export const CartContext = createContext();

export const ItemsProvider = ({children}) =>{
    //Creación y state del array del carrito de compras
    // (Acá van los productos añadidos al mismo solamente)
    const [carrito, setCarrito] = useState ([]);

    //Función para añadit un producto al carrito
    const addItem = (newItem) =>{

        const newitemcarrito = carrito.find(
            (item) => 
                newItem.id === item.id && newItem.size === item.size && newItem.color === item.color
        );

        if(newitemcarrito){
            newitemcarrito.cantidad = newitemcarrito.cantidad + newItem.cantidad;
            newitemcarrito.precio = newItem.precio * newitemcarrito.cantidad ;
        }else{
            carrito.push(newItem); 
        }
        setCarrito([...carrito]);
    };


    //Función para eliminar un producto del carrito

    const removeItem = (newItem) =>{
        const newitemcarrito = carrito.filter( 
            (item) => item.id !== newItem.id || (item.id === newItem.id && newItem.size !== item.size) || (item.id === newItem.id && newItem.color !== item.color)
        );
        setCarrito(newitemcarrito);
    }

    
    //Función para vaciar por completo el carrito
    const clear = (carrito) =>{

        carrito.length = 0;
        const newcarrito = carrito;
        setCarrito(newcarrito);
    }
    
    //provider con los valores que pueden ser utilizados en los demás components.
    
    return <CartContext.Provider value = {{ addItem, removeItem, clear, carrito, setCarrito}}>
        {children}

    </CartContext.Provider>;
};
