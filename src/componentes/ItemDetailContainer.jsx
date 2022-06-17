import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';

function ItemDetailContainer() {
	const [detalleProducto, setDetalleProducto] = useState();
	const { id } = useParams();

	useEffect(() => {
		fetch('../../productos.json')
			.then((resultado) => resultado.json())
			.then((data) => {
				setDetalleProducto(data.find((item) => item.id === id));
			})
			.catch((error) => console.log('Error', error));

		console.log(detalleProducto);
	}, [id]);

	return (
		<>
			<div className='d-flex justify-content-center align-items-center'>
				<ItemDetail
					id={detalleProducto.id}
					precio={detalleProducto.precio}
					estilo={detalleProducto.estilo}
					nombre={detalleProducto.nombre}
					tagline={detalleProducto.tagline}
					url={detalleProducto.url}
					descripcion={detalleProducto.descripcion}
					descripcion_complemento={detalleProducto.descripcion_complemento}
					abv={detalleProducto.abv}
					ibu={detalleProducto.ibu}
					categoria={detalleProducto.categoria}
				/>
			</div>
		</>
	);
}
export default ItemDetailContainer;
