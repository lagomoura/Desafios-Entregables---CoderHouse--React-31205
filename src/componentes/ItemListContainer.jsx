import { useEffect, useState } from 'react';
import ItemList from './ItemList';


function ItemListContainer({onAdd, sumarCarrito}) {

  //. Guardo el estado del estilo en un array
  const [estiloList, setEstiloList] = useState([])


  useEffect(() => {
    
    setTimeout(() => { 
    fetch("productos.json") //. Hago un fetch de mi objeto de items
    .then(resultado => resultado.json()) //. El resultado, lo paso a json.
    .then(resultado => setEstiloList(resultado)) //. Guardo ese resultado conversito en JSON en el estado estiloList.
    .catch(error => console.log("Error", error));
  }, 2000);
},[])

    return (
        //. Retorno un componente ItemList con los datos del estado estiloList. Asignamos estiloList al array estilos de ItemList.
  <>
            <div className="d-flex justify-content-around align-items-center">
              <ItemList estilos={estiloList} onAdd={onAdd} sumarCarrito={sumarCarrito} />
            </div>
          )
  </>    
  )};

    export default ItemListContainer
