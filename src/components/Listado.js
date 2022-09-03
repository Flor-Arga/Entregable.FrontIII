import React from 'react'

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.
import Item from './Item.js';
import Producto from './data.json';


export default function Listado(props) {
console.log("Listado",props);
//console.log(Producto);
  return (
    <div className='container'>
      {<>
      {Producto.map((elemento,index) =>
      <Item key={elemento.id} nombre= {elemento.producto.nombre} descripcion= {elemento.producto.descripcion} stock={elemento.stock} carrito ={props.carrito}/>
    )}
      </>}
    </div>
  )
}
