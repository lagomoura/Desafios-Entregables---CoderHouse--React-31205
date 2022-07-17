import React from 'react';
import '../style-sheet/Recicle.css';

export default function Recicle() {
	return (
		<section id='recicle'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='text-slanted'>
						<div className='col-sm-12 col-md-6 col-lg-4 d-flex flex-column align-items-center text-sm-center text-lg-left my-5 py-5 reciclage-texto justify-content-center w-100'>
							<p className='text-sm-center text-warning titulo-reciclage'>
								♻️
								<span className='titulo-logo'>
									<em className='text-warning logo-texto'>Eita!</em>
								</span>
								<span className='subtitulo-reciclage'>
									Apoya la Sustentabilidad!
								</span>
								♻️
							</p>
							<p className='text-uppercase text-sm-center fw-bold text-dark'>
								REDUCIR, <span className='text-white'>RECICLAR </span> y
								<span className='text-dark'> REUTILIZAR </span> 👍🏽
							</p>
							<div className='row '>
								<a href='https://planetark.org/programs/recyclingnearyou' className='btn text-uppercase btn-reciclage mt-2'>
									Confira puntos de reciclage
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
