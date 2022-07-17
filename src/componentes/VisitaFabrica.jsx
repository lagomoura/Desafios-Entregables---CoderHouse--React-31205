import React from 'react';
import '../style-sheet/VisitaFabrica.css';

export default function VisitaFabrica() {
	return (
		<section id='fabrica'>
			<div className='container-fluid col-sm-12'>
				<div className='row d-flex justify-content-between p-lg-4 p-3'>
					<div className='card card1 col-sm-12 col-lg-4 align-items-center justify-content-around p-2 g-2'>
						<img
							src={require('../imagenes/fabrica1.jpg')}
							className='card-img-top'
							alt='brewery'
						/>
						<div className='card-body d-flex justify-content-center flex-column'>
							<p className='card-text text-center'>
								Tour por nuestra fábrica. Todos los fines de semana, de puertas
								abiertas a nuestros miembros. Hacé tu reserva!
							</p>
							<a href='#fabrica' className='btn btn-warning text-uppercase'>
								Más info
							</a>
						</div>
					</div>
					<div className='card card2 col-sm-12 col-lg-4 align-items-center justify-content-around p-2 g-2'>
						<img
							src={require('../imagenes/fabrica2.jpg')}
							className='card-img-top'
							alt='tapbeer'
						/>
						<div className='card-body d-flex flex-column justify-content-center'>
							<p className='card-text text-center'>
								Conocé nuestro taproom. Cerveza tirada directo de los tanques de
								la fábrica. Enterate de nuestros eventos y reservas, en el botón
								abajo.
							</p>
							<a href='#fabrica' className='btn btn-warning text-uppercase'>
								Nuestro tapboard
							</a>
						</div>
					</div>
					<div className='card card3 col-sm-12 col-lg-4 align-items-center justify-content-around p-2 g-2'>
						<img
							src={require('../imagenes/fabrica3.jpg')}
							className='card-img-top'
							alt='beer'
						/>
						<div className='card-body d-flex flex-column justify-content-center'>
							<p className='card-text text-center'>
								Acceso a nuestra bodega de guarda. Probá nuestros experimentos y
								descubrí algunas rarezas. Hacé tu reserva ya!
							</p>
							<a href='#fabrica' className='btn btn-warning text-uppercase'>
								Hacé tu reserva
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
