import React from 'react';
import { useState } from 'react';
import Toastify from 'toastify-js'

function ItemCount ({stock, initial, onAdd}) {
  const [cantidad, setCantidad] = useState(0);
  console.log('Renderizando ContadorPintas');

  return (
    <>
    <div className="card m-5" style={{width: '18rem'}}>
      <img src= {require ("../imagenes/bestBitter.jpg")} className="card-img-top img-fluid" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center">English Best Bitter</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="container-btn">
          <button className="btn btn-warning m-3" id="btn-sumar" onClick = { () => {
            
            if (cantidad >= stock) {
                ('#btn-sumar').off('click', true);  
            }
              setCantidad (cantidad +1);
            }}>+</button>

          <span>{cantidad}</span>

          <button className="btn btn-warning m-3" onClick = { () => {
            setCantidad (cantidad - 1);
            if (cantidad <=0) {
              setCantidad(0)
            }
          }}>-</button>
        </div>
        <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-warning m-3" onClick={ () => {
          if (cantidad < 1 ) {
            Toastify({
              text: "ERROR - Agregue alguna unidad",
              duration: 2000,
              newWindow: true,
              close: true,
              gravity: "bottom", // `top` or `bottom`
              position: "center", // `left`, `center` or `right`
              stopOnFocus: true, // Prevents dismissing of toast on hover
              style: {
                background: "linear-gradient(to right, red, #990022)",
              },
              onClick: function(){} // Callback after click
            }).showToast();
          } else {
          setCantidad(0);

          Toastify({
            text: "Producto agregado correctamente",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #fdf522, #ffbd52)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        }
        }}>Agregar a Carrito</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default ItemCount;
