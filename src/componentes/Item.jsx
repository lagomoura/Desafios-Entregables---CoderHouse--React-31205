import '../style-sheet/Item.css';
import ItemCount from './ItemCount.jsx';
import { Link } from 'react-router-dom';

//! Componente responsable de la creacion de los items. Crea el item con los datos que le pasamos, vinculando al map del ItemList.

//. Seteamos todos los estados iniciales
function Item({
	initial,
	max,
	onAdd,
	agregarCantidad,
	estilo,
	imagen,
	tagline,
	descripcion,
	precio,
	id,
}) {
	return (
		<>
			<div className='row' key={id}>
				<div className='container-fluid'>
					<div className='cardProductos m-3 d-flex'>
						<div className='card-body text-center mt-3'>
							<h5 className='card-title fw-bolder'> {estilo} </h5>
							<p className='card-text'> {tagline} </p>
							<img src={imagen} className='card-img-top' alt='...' />
							<div className='item_descripcion'>
								<p className='mt-3'> {descripcion} </p>
							</div>
							<ItemCount
								initial={initial}
								max={max}
								precio={precio}
								onAdd={onAdd}
								agregarCantidad={agregarCantidad}
								id={id}
							/>
							<Link to={`/producto/${id}`}>
								<button
									type='button'
									className='btn card-btn-cart bg-warning btn_detail rounded-pill mb-2 justify-content-center'>
									Mas detalles
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Item;
