import React from 'react';
import '../style-sheet/VisitaFabrica.css';
import { Link } from 'react-router-dom';

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
						<div className='card-body d-flex justify-content-center flex-column align-items-center'>
							<p className='card-text text-center'>
								Tour por nuestra fábrica. Todos los fines de semana, de puertas
								abiertas a nuestros miembros. Hacé tu reserva!
							</p>
							<Link to='/home/contacto'>
								<button className='btn btn-warning text-uppercase btn-fabrica'>
									Más info
								</button>
							</Link>
						</div>
					</div>
					<div className='card card2 col-sm-12 col-lg-4 align-items-center justify-content-around p-2 g-2'>
						<img
							src={require('../imagenes/fabrica2.jpg')}
							className='card-img-top'
							alt='tapbeer'
						/>
						<div className='card-body d-flex flex-column justify-content-center align-items-center'>
							<p className='card-text text-center'>
								Conocé nuestro taproom. Cerveza tirada directo de los tanques de
								la fábrica. Enterate de nuestros eventos y reservas, en el botón
								abajo.
							</p>
							<Link to='/home/contacto'>
								<button className='btn btn-warning text-uppercase btn-fabrica'>
									Nuestro tapboard
								</button>
							</Link>
						</div>
					</div>
					<div className='card card3 col-sm-12 col-lg-4 align-items-center justify-content-around p-2 g-2'>
						<img
							src={require('../imagenes/fabrica3.jpg')}
							className='card-img-top'
							alt='beer'
						/>
						<div className='card-body d-flex flex-column justify-content-center align-items-center'>
							<p className='card-text text-center'>
								Acceso a nuestra bodega de guarda. Probá nuestros experimentos y
								descubrí algunas rarezas. Hacé tu reserva ya!
							</p>
							<Link to='/home/contacto'>
								<button className='btn btn-warning text-uppercase btn-fabrica'>
									Hacé tu reserva
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
