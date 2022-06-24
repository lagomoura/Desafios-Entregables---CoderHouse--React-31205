import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';

function ItemDetailContainer() {
	const [detalleProducto, setDetalleProducto] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		fetch('../../productos.json')
			.then((resultado) => resultado.json())
			.then((resultado) => {
				setDetalleProducto(resultado.find(item => item.id == id));
			})
			.catch((error) => console.log('Error', error));

	}, [id]);

	return (
		<>
			<div className='d-flex justify-content-center align-items-center'>
				<ItemDetail detalleProducto={detalleProducto} id={id}/> 
			</div>
		</>
	);
}
export default ItemDetailContainer;
