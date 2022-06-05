import React, { useState } from 'react';



function ItemCount ({initial, stock, onAdd}) {
  const [cantidad, setCantidad] = useState(initial); //. Creamos un estado para la cantidad. Seteamos la cantidad inicial en 1.
  console.log('Renderizando ContadorPintas'); //. Creamos esa informacion de render en consola para ver cuantas vezes estamos renderizando el componente
  
  //. Creamos una funcion para sumar, asiciado al boton +
  const sumar = () => {
    if (cantidad < stock) { //.Validamos para que no sea agregado mas que la cantidad en stock
      setCantidad (cantidad + 1);
    }else {
      alert('Disculpe, no hay mas stock disponible! 📦');
    }
  }

  //. Hacemos lo mismo para el boton - y validamos que la cantidad no sea menor que la cantidad inicial (1)
  const restar = () => {
    cantidad > initial ? setCantidad(cantidad - 1) : setCantidad(1);
  }

  const limpiarCarrito = () => {
    setCantidad(initial);
  }

  return (
    <>
      <div className="d-flex flex-row justify-content-center align-items-center container-btn">
        <button className="btn btn-warning m-3" onClick={sumar}>+</button>
        <h3>{cantidad}</h3>
        <button className="btn btn-warning m-3" onClick={restar}>-</button>
      </div>
      <div className="container-contador d-flex flex-column">
          <button className="btn btn-warning m-3" onClick={ ()=>  {onAdd(cantidad); limpiarCarrito()}}>Agregar al Carrito </button>
      </div>

    </>
  );
}

export default ItemCount;
