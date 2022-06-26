import { Link } from 'react-router-dom';
import '../style-sheet/Item.css';

//! Componente responsable de la creacion de los items. Crea el item con los datos que le pasamos, vinculando al map del ItemList.

//. Seteamos todos los estados iniciales
function Item({
	nombre,
	imagen,
	estilo,
	descripcion,
	precio,
	id,
	stock,
	categoria
}) {
	return (
		<>
			<div className='row' key={id} categoria={categoria}>
				<div className='container-fluid'>
					<div className='cardProductos m-3 d-flex'>
						<div className='card-body text-center mt-3'>
							<h5 className='card-title fw-bolder'> {nombre} </h5>
							<p className='card-text'> {estilo} </p>
							<img src={imagen} className='card-img-top' alt='...' />
							<div className='item_descripcion'>
								<p className='mt-3'> {descripcion} </p>
								<p className='mt-3 fw-bold fs-5'> ${precio},00 </p>
							</div>
							<div className='d-flex gap-3 justify-content-center align-items-center mt-1 flex-column'>
								<Link to={`/producto/`+ id}>
									<button
										type='button'
										className='btn card-btn-cart bg-warning btn_detail rounded-pill mb-2 justify-content-center'>
										Mas detalles
									</button>
								</Link>
							</div>
							<span className='fw-bold'>Disponiblidad:</span>
							<span> {stock} botellas </span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Item;
