import { useState } from 'react';
import Toastify from 'toastify-js';
import '../style-sheet/Item.css';

//! Componente responsable de la creacion de los items. Crea el item con los datos que le pasamos, vinculando al map del ItemList.


//. Seteamos todos los estados iniciales
function Item ({ initial, onAdd, max, agregarCantidad, estilo, imagen, tagline, descripcion, precio}) {  

  //. Estado de la cantidad y stock. Hago con que la cantidad default sea 1 y el stock default sea el max de cada item.
  const [cantidad, setCantidad] = useState(1);
  const [stock, setStock] = useState(max);

  //. Funcion para sumar la cantidad
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
        setCantidad(cantidad) //. Guardamos esa cantidad en el estado cantidad
    }
  
  }

  //. Funcion para restar la cantidad
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
      setCantidad(cantidad) //. Guardamos esa nueva cantidad en el estado cantidad.
  }}
  

  //. Funcion para restar el stock
  const restarStock = () => {
      setStock (stock - cantidad) //. Definicmos el nuevo stock restando la cantidad anterior.

  }

  //. Funcion para validar la cantidad
  const validarCantidad = () => {
    return cantidad > stock;
  }

  //. Funcion para resetear la cantidad del carrito, volviendo a la cantidad initial que es 1.
  const reset = () => {
    setCantidad(initial)

  }

  //. Funcion para validar el stock a ver si se puede agregar al carrito
  const ValidarStock = () => {
      restarStock();
      onAdd(cantidad);
      agregarCantidad(cantidad);
      reset()

      //. En caso de que el stock sea 0, salta un error al usuario.
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
          <div className="cardProductos m-3 d-flex">
              <div className="card-body text-center">
                  <h5 className="card-title fw-bolder text-center"> {estilo} </h5>
                  <p className="card-text"> { tagline } </p>
                  <img src={imagen} className="card-img-top" alt="..." />
                  <div className="item_descripcion">
                    <p className='mt-3'> { descripcion } </p>
                    <p className='fw-bold'> ${precio},00</p>
                  </div>
                  <div className="d-flex gap-4 justify-content-center">
                      <button onClick={sumar} type="button" className=" btn btn-warning my-3">+</button>
                      <h2 className='fw-bold my-3'> {cantidad} </h2>
                      <button onClick={restar} type="button" className="btn card-btn btn-warning my-3">-</button>
                  </div>
                  <div className="d-flex gap-3 justify-content-center align-items-center mt-1 flex-column">
                      <button onClick={() => { ValidarStock() }} type="button" className="btn card-btn-cart mt-1 bg-warning rounded-pill" disabled={validarCantidad()}>Agregar al Carrito</button>
                      <button type="button" className="btn card-btn-cart bg-warning btn_detail rounded-pill mb-2 justify-content-center">Mas detalles</button>
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
