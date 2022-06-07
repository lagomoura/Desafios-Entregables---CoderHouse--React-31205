import React from 'react';
import ItemList from './ItemList';

const Items = ({estilos}) => {

  const onAdd = (cantidad) => {
    alert(`Fueron Agregados: ${cantidad} items 🛒`);
  }    

  const {img_url, estilo, stock, precio} = estilos;

  <div className="layout-productos m-4 col-md-3 ">
  <div className="card" style={{width: '18rem'}}>
    
    <div className="card-body">
      <h5 className="card-title text-center">{estilo}</h5>
      <img src={img_url} className="card-img-top img-fluid" alt="..." />
      <p className="card-text">{stock}</p>
      <p className="card-text">{precio}</p>
      <div className="container-btn">
      </div>
    </div>
  </div>
</div>
}

export default Items;
