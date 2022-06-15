import { useEffect, useState } from 'react';
import ItemList from './ItemList';

function ItemListContainer({ categoria, onAdd, sumarCarrito, id }) {
	//. Guardo el estado del estilo en un array
	const [estiloList, setEstiloList] = useState([]);



	useEffect(() => {
		//. Funcion para obtener los estilos
		fetch('../../productos.json')
		.then((resultado ) => resultado.json())
		.then((data) => {
			setEstiloList(data)
		})
		.catch((error) => {
			console.log(error)
		})
}, [categoria])
	return (
		//. Retorno un componente ItemList con los datos del estado estiloList. Asignamos estiloList al array estilos de ItemList.
		<>
			<div className='d-flex justify-content-around align-items-center'>
				<ItemList
					estiloList={estiloList}
					onAdd={onAdd}
					sumarCarrito={sumarCarrito}
					categoria={categoria}
					id={id}
				/>
			</div>
			)
		</>
	

)
}

export default ItemListContainer;
