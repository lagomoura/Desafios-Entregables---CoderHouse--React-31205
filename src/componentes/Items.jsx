import React from 'react';
import ItemCount from './ItemCount.jsx';

const Items = () => {
  const onAdd = (cantidad) => {
    alert(`Fueron Agregados: ${cantidad} items 🛒`);
}    


  return (
  <>
    <div className="card m-5" style={{width: '18rem'}}>
      <img src= {require ("../imagenes/bestBitter.jpg")} className="card-img-top img-fluid" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center">English Best Bitter</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="container-btn">
          <ItemCount initial={1} stock={8} onAdd={onAdd}/>
        </div>
      </div>
    </div>
  </>
  )
}

export default Items;
