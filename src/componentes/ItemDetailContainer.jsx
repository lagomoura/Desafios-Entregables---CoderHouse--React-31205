import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail.jsx';
import {useParams} from 'react-router-dom';

function ItemDetailContainer({ onAdd, sumarCarrito }) {


	const [detalleProducto, setDetalleProducto] = useState();

	const {id} = useParams()



	useEffect(() => {	
		fetch('../../productos.json')
				.then((resultado) => resultado.json())
				.then((data) => {
					console.log(data)
					setDetalleProducto(data.filter((item => item.id === id)));
					console.log(detalleProducto)
				})
				.catch((error) => console.log('Error', error));

		}
				
		, [id]);


	debugger

	return (
		<>
			<div className='d-flex justify-content-center align-items-center'>
				{
					detalleProducto && (detalleProducto.map((item) => 
						<ItemDetail id={item.id} estilo={item.estilo} nombre={item.nombre} tagline={item.tagline} url={item.url} descripcion={item.descripcion}  descripcion_complemento={item.descripcion_complemento} abv={item.abv} ibu={item.ibu} key={detalleProducto} />
					))
				}
			</div>
		</>
	);
}
export default ItemDetailContainer;
