import '../style-sheet/ItemDetail.css';
import ItemCount from './ItemCount.jsx';

function ItemDetail({
	id,
	precio,
	nombre,
	estilo,
	tagline,
	url,
	descripcion,
	descripcion_complemento,
	abv,
	ibu,
	categoria,
}) {
	return (
		<>
			<div className='itemDetail' id={id} castegoria={categoria}>
				<div className='producto_titulo text-center mt-3'>
					<h2>{nombre}</h2>
				</div>
				<p className='text-center mt-1'>Estilo: {estilo}</p>
				<p className='text-center'>{tagline}</p>
				<div className='cuerpo_info'>
					<div className='row'>
						<div className='producto_img justify-content-end align-items-center d-flex col-6 flex-column'>
							<img src={url} alt='' className='img-card' />
							<div className='descripcion_detail text-justify'>
								<p className='text-center font-italic'>{descripcion}</p>
								<p className='text-center'>{descripcion_complemento}</p>
							</div>
						</div>
						<div className='datos_extras col-6 d-flex flex-column align-items-center justify-content-center'>
							<p className='text-center'>
								Entregas a todo el pais a traves del correo Andreani en hasta
								48h
							</p>
							<p className='text-center'>La mejor experiencia Birristica</p>
							<p className='text-center'>
								AA: {abv} | IBU: {ibu}
							</p>
							<div className='btn_litros'>
								<button className='btn btn-warning m-2'>500ml</button>
								<button className='btn btn-warning m-2'>1000ml</button>
							</div>
							<div className='count'>
								<ItemCount precio={precio} id={id} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ItemDetail;
