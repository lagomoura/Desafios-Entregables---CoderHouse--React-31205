import React, { useEffect, useState } from 'react';
import Toastify from 'toastify-js';
import ItemCount from '../componentes/ItemCount.jsx';

const Item2 = ({estilo, cartItemsCantidad, setCartItemsCantidad, imagen, info, disponibilidad }) => {

    const { url, stock, tagline} = estilo;
    const [cantidad, setCantidad] = useState(0);


    useEffect(() => {
        setTimeout(() => {
            setCartItemsCantidad(cartItemsCantidad + cantidad)       
        }, 3000);
    }, []);

    return (
        <>  
              <div className="row">
              <div className="container-fluid">
                <div className="cardProductos m-3">
                    <div className="card-body text-center">
                        <h5 className="card-title fw-bolder text-center"> {estilo} </h5>
                        <p className="card-text"> {info} </p>
                        <img src={imagen} className="card-img-top" alt="..." />
                        <div className="d-flex gap-4 justify-content-center mt-3">
                            <ItemCount />
                        </div>
                        <span className='fw-bold'>Disponiblidad:</span><span> {disponibilidad} botellas   </span>
                    </div>
                </div>
              </div>
            </div>
        </>
          )
}

export default Item2;