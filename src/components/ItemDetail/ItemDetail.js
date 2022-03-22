//Detalles del item, acá el llamado a la función para añadir un producto al carrito.

import Item from '../item/Item';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {useContext, useState} from 'react';
import {CartContext} from '../CartContext/CartContext';


const ItemDetail = ({itemd}) => {

    //Se trae la función de añadir al carrito del contexto
    const {addItem} = useContext(CartContext);

    //State de color y de tamaño (size) para guardar el value del radio button seleccionado por el usuario.
    const [size, setSize] = useState(itemd.itemSize[0]);
    const [color, setColor] = useState(itemd.itemColors[0]);

    //Expresión funcional para radio button
    const cambiarSize = (event) => {
            setSize(event.target.value)
      }

      const cambiarColor = (event) => {
        setColor(event.target.value)
  }


    //Exp. funcional para añadit producto al carrito. Datos del producto + llamado a la función del context
    const add = (counter) =>{   
        if (counter > 0){
                let newItem = { 
                id: parseInt(itemd.itemId),
                nombre : itemd.itemName, 
                cantidad : parseInt(counter),
                size: `${size}`,
                color: `${color}`,
                precio: parseInt(itemd.itemPrice),
                foto: itemd.pictureUrl
            }
            //Agregamos el item al carrito
            addItem(newItem);
            alert(`Tu producto  ${newItem.nombre} de tamaño ${size}  y de color ${color} se agregó  al carrito.`); 
        }
      };  

return(
    <div>
        <div className = "BoxAllDetails">
            
            
            <div>
                <Item 
                    items = {itemd} 
                />

                <ItemCount 
                        stock = {`${itemd.stock}`}
                        initial = {`${itemd.initial}`}
                        itemId = {`${itemd.itemId}`}
                        add = {add}
                /> 
            </div>

            <div className = "BoxDetails">
                <div>
                <div className = "BoxListas">{itemd.itemDescription}</div>
                            <div className = "BoxListas">
                                <div>Tamaños:</div>
                                <ul className = "ULista" onChange = {cambiarSize}>
                                    <li className = "Li"><input type= "radio" name = "size" value = {itemd.itemSize[0]} checked></input>{itemd.itemSize[0]}</li>
                                    <li className = "Li"><input type= "radio" name = "size" value = {itemd.itemSize[1]}></input>{itemd.itemSize[1]}</li>
                                    <li className = "Li"><input type= "radio" name = "size" value = {itemd.itemSize[2]}></input>{itemd.itemSize[2]}</li>                            
                                    <li className = "Li"><input type= "radio" name = "size" value = {itemd.itemSize[3]}></input>{itemd.itemSize[3]}</li>
                                    <li className = "Li"><input type= "radio" name = "size" value = {itemd.itemSize[4]}></input>{itemd.itemSize[4]}</li>
                                </ul>
                            </div>
                            <div className = "BoxListas">
                                <div>Colores:</div>
                                <ul className = "ULista" onChange = {cambiarColor}>
                                    <li className = "Li"><input type= "radio" name = "color" value = {itemd.itemColors[0]} checked></input><label style={{color: `${itemd.itemColors[0]}`}}>■</label></li>
                                    <li className = "Li"><input type= "radio" name = "color" value = {itemd.itemColors[1]}></input><label style={{color: `${itemd.itemColors[1]}`}}>■</label></li>
                                    <li className = "Li"><input type= "radio" name = "color" value = {itemd.itemColors[2]}></input><label style={{color: `${itemd.itemColors[2]}`}}>■</label></li>
                                    <li className = "Li"><input type= "radio" name = "color" value = {itemd.itemColors[3]}></input><label style={{color: `${itemd.itemColors[3]}`}}>■</label></li>
                                    <li className = "Li"><input type= "radio" name = "color" value = {itemd.itemColors[4]}></input><label style={{color: `${itemd.itemColors[4]}`}}>■</label></li>
                                    <li className = "Li"><input type= "radio" name = "color" value = {itemd.itemColors[5]}></input><label style={{color: `${itemd.itemColors[5]}`}}>■</label></li>
                                    <li className = "Li"><input type= "radio" name = "color" value = {itemd.itemColors[6]}></input><label style={{color: `${itemd.itemColors[6]}`}}>■</label></li>
                                    <li className = "Li"><input type= "radio" name = "color" value = {itemd.itemColors[7]}></input><label style={{color: `${itemd.itemColors[7]}`}}>■</label></li>
                                </ul>
                            </div>  
                            <div>
                                <div>Tenemos cotización sin cargo para todas las formas y colores. Hacemos Factura A y B.</div>
                                <div>✅Toda la cartelería está confeccionada en Neon LED de alta eficiencia.</div>
                                <div>🔌 Utiliza tensión 12v. Incluye fuente de alimentación para conectar a 220v.</div> 
                                <div>Aceptamos 💵 Efectivo, 💳 MercadoPago o ↪️ Transferencia</div>
                                <div>📐Realizamos diseños personalizados.
                                    <div>🚚Hacemos Envíos a todo el país.</div>
                                </div>
                            </div> 
                </div>
            </div>
        </div>
        
    </div>
    
)
};

export default ItemDetail;
