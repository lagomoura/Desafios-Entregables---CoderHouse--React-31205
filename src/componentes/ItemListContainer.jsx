import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer({ onAdd, sumarCarrito }) {
	//. Guardo el estado del estilo en un array

	const [estiloList, setEstiloList] = useState([]);
	const [estiloFiltrado, setEstiloFiltrado] = useState([]);

	const { categoria }= useParams()

	//= Cuando el componente se monta, se ejecuta el useEffect. Es una manera de informar que va a ser ejecutado una vez que el componente se monta.
	useEffect(() => {
		//. Funcion para obtener los estilos
		fetch('../../productos.json')
			.then((resultado) => resultado.json())
			.then((resultado) => {
				setEstiloList(resultado);
			})
			.catch((error) => {
				console.log('Error', error);
			});
	}, []);



	//= Filtrado por categoria
	useEffect(() => {
		//. Funcion para filtrar los estilos
		let categoriaFiltrada = estiloList.filter((estilo) => estilo.categoria === categoria)
		setEstiloFiltrado(categoriaFiltrada)
	}, [categoria]);

	return (
		//. Retorno un componente ItemList con los datos del estado estiloList. Asignamos estiloList al array estilos de ItemList.
		<>
			<div className="estiloFiltrado d-flex justify-content-around align-items-center">
				{
				estiloFiltrado.categoria !== undefined 

					?

					<ItemList
					estiloList={estiloFiltrado}
					onAdd={onAdd}
					sumarCarrito={sumarCarrito}/>

					:

					<ItemList
					estiloList={estiloList}
					onAdd={onAdd}
					sumarCarrito={sumarCarrito}/>
				}	
				
			</div>	
		</>						
)
}

export default ItemListContainer;
