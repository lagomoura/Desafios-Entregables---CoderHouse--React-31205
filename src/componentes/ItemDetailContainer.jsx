import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';

function ItemDetailContainer({ onAdd, sumarCarrito }) {
	const { id } = useParams();

	const [detalleProducto, setDetalleProducto] = useState({});

	// const productoElegido = detalleProducto?.filter(
	// 	(producto) => producto.id === 4
	// );
	console.log(id)


	useEffect(() => {
		const tomarDetalleProductos = () => {
			fetch('./productos.json')
				.then((resultado) => resultado.json())
				.then((resultado) => {
					setDetalleProducto(resultado.find((item => item.id === id)));
					setDetalleProducto(detalleProducto)
				})
				.catch((error) => console.log('Error', error));
				
		};
		setTimeout(() => {
			tomarDetalleProductos();	
		}, 2000);
		
	}, [id] );
	
	return (
		<>
			<div className='d-flex justify-content-center align-items-center'>
				<ItemDetail
					detalleProducto={detalleProducto}
					onAdd={onAdd}
					agregarCantidad={sumarCarrito}
				/>
			</div>
		</>
	);
}
export default ItemDetailContainer;
