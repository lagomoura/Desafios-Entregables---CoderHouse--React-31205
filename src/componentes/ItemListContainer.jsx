import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

function ItemListContainer() {
	//. Guardo el estado del estilo en un array

	const [estiloList, setEstiloList] = useState([]);
	const { categoria } = useParams();

	//= Cuando el componente se monta, se ejecuta el useEffect. Es una manera de informar que va a ser ejecutado una vez que el componente se monta.
	useEffect(() => {
		//= Obtengo la referencia a la base de datos
		const db = getFirestore();
		const productosCollection = collection(db, 'producto');

		//= Filtramos por categoria, caso el useParams Categoria exista.
		if (categoria) {
			const q = query(productosCollection, where('categoria', '==', categoria));

			getDocs(q)
				.then((resultado) => {
					setEstiloList(
						resultado.docs.map((doc) => ({ ...doc.data(), id: doc.categoria }))
					);
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			//= Caso el useParams Categoria no exista, simplemente trae toda la coleccion de objetos.
			getDocs(productosCollection)
				.then((resultado) => {
					setEstiloList(
						resultado.docs.map((doc) => ({ ...doc.data(), id: doc.categoria }))
					);
				})
				.catch((error) => {
					console.log(error);
				});
		}
		//= Cada vez que la categoria es seteada, se vuelve a ejecutar el useEffect
	}, [categoria]);

	return (
		//. Retorno un componente ItemList con los datos del estado estiloList. Asignamos estiloList al array estilos de ItemList.
		<>
			<div className='d-flex justify-content-center align-items-center'>
				<ItemList estiloList={estiloList} />
			</div>
		</>
	);
}
export default ItemListContainer;
