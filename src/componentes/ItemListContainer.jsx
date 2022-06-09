import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';



function ItemListContainer({onAdd, sumarCarrito}) {

  const [estiloList, setEstiloList] = useState([])

  useEffect(() => {
    setTimeout(() => { 

    fetch("productos.json")
    .then(resultado => resultado.json())
    .then(resultado => setEstiloList(resultado))
    .catch(error => console.log("Error", error))
  }, 2000)
},[])
console.log(estiloList)

    return (
      <div className="d-flex justify-content-around align-items-center w-50 col-6">

      <ItemList estilos={estiloList} onAdd={onAdd} sumarCarrito={sumarCarrito} />
      
      </div>
    )
}

    export default ItemListContainer
