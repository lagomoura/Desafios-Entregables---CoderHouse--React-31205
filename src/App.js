import './App.css';
import ItemListContainer from './componentes/ItemListContainer.jsx';
import NavBar from './componentes/NavBar.jsx';
import Toastify from 'toastify-js';
import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./componentes/Home.jsx";
// import Contacto from './componentes/Contacto.jsx';
import ItemDetailContainer from './componentes/ItemDetailContainer.jsx';


function App() {

  // return (
  //   <BrowserRouter>

  //     <Routes>
  //     {/*  */}
  //       <Route path="/" element={<Home />} />
  //       <Route path="/contacto" element={<Home />} />
  //       <Route path="/contacto" element={<Contacto />} />
  //       <Route path="/producto/:id" element={<Contacto />} /> //. el (:id) indica que es variable 
  //     </Routes>
      
  //   </BrowserRouter>
  //   )


  const onAdd = (cantidad) => {
    Toastify({
        text: `${cantidad} Items Agregados`,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #ffbd52, #fc9d39)"
        }
    }
  ).showToast();}

      const [carrito, setCarrito] = useState(0);

    const sumarCarrito = (cantidad) => {
      setCarrito(carrito + cantidad)
    }

  return (
    <div className="App">
      <NavBar cantidad={ carrito } /> 

      <div className="container-fluid">
            <div className="row d-flex justify-content-center m-2">
                <div className="col-12 mt-5 text-center"> <h2>Bievenidos a <span className="titulo-logo">Eita!</span> <span className="subtitulo-logo">Club Exclusivo de Cerveza</span></h2></div>
            </div>
        </div>
        <div>
            <div className="row">
              <ItemListContainer onAdd={onAdd} sumarCarrito={sumarCarrito} />
            </div>
          </div>
          <div class="row">
            <ItemDetailContainer onAdd={onAdd} sumarCarrito={sumarCarrito} />
          </div>
    </div>
  );
}

export default App;
