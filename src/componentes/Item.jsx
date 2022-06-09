import React from 'react';
import { useState } from 'react';
import Toastify from 'toastify-js';
import '../style-sheet/Item.css';


function Item ({ initial, onAdd, max, agregarCantidad, estilo, imagen, tagline}) {  
    
  const [cantidad, setCantidad] = useState(1);
  const [stock, setStock] = useState(max);


  const sumar = () => {

    if (cantidad < max) {
      setCantidad(cantidad + 1);
    } else {
      Toastify({
        text: "Stock insuficiente",
        duration: 3000, 
        style: {
          background: "linear-gradient(to right, #ffbd52, #fc9d39)"
        }
        }).showToast();
        setCantidad(cantidad) 
    }
  
  }

  const restar = () => {
    if (cantidad > initial) {
      setCantidad(cantidad - 1);
    } else {Toastify({
      text: "La cantidad debe ser mayor o igual a 1",
      duration: 3000, 
      style: {
        background: "linear-gradient(to right, #ffbd52, #fc9d39)"
      }
      }).showToast();
      setCantidad(cantidad)
  }}
  

  const restarStock = () => {
      setStock (stock - cantidad)

  }

  const validarCantidad = () => {
    return cantidad > stock;
  }

  const reset = () => {
    setCantidad(initial)

  }


  const ValidarStock = () => {
      restarStock();
      onAdd(cantidad);
      agregarCantidad(cantidad);
      reset()

      if (stock === 0) {
      Toastify({
        text: "Producto Agotado",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #ffbd52, #fc9d39)"
        }
    }).showToast();
  }
}


    return(

  <>  
        <div className="row">
        <div className="container-fluid">
          <div className="cardProductos m-3">
              <div className="card-body text-center">
                  <h5 className="card-title fw-bolder text-center"> {estilo} </h5>
                  <p className="card-text"> { tagline } </p>
                  <img src={imagen} className="card-img-top" alt="..." />
                  <div className="d-flex gap-4 justify-content-center mt-3">
                      <button onClick={sumar} type="button" className=" btn btn-warning my-3">+</button>
                      <h2 className='fw-bold my-3'> {cantidad} </h2>
                      <button onClick={restar} type="button" className="btn card-btn btn-warning my-3">-</button>
                  </div>
                  <div className="d-flex gap-3 justify-content-center mt-1">
                      <button onClick={() => { ValidarStock() }} type="button" className="btn card-btn-cart mt-3 bg-warning rounded-pill mb-2" disabled={validarCantidad()}>Agregar al Carrito</button>
                  </div>
                  <span className='fw-bold'>Disponiblidad:</span><span> {stock} botellas   </span>
              </div>
          </div>
        </div>
      </div>
  </>
    )
}

export default Item;
