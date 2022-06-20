import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

function ItemListContainer() {
	//. Guardo el estado del estilo en un array

	const [estiloList, setEstiloList] = useState([]);
	const { categoria } = useParams();

	//= Cuando el componente se monta, se ejecuta el useEffect. Es una manera de informar que va a ser ejecutado una vez que el componente se monta.
	useEffect(() => {
		fetch('../../productos.json')
			.then((resultado) => resultado.json())
			.then((resultado) => {
				setEstiloList(resultado);

				if (categoria !== undefined) {
					setEstiloList(resultado.filter(item => item.categoria === categoria)); //. Filtra el array de estilos por la categoria que se le pasa por parametro.
				} else {
					setEstiloList(resultado);
				}
			})
			.catch((error) => {
				console.log('Error', error);
			});	
	}, [categoria]);

	return (
		//. Retorno un componente ItemList con los datos del estado estiloList. Asignamos estiloList al array estilos de ItemList.
		<>
			<div className='d-flex justify-content-around align-items-center'>
				
				<ItemList estiloList={estiloList} categoria={categoria}/>
			</div>
			)
		</>
	);
}

export default ItemListContainer;
