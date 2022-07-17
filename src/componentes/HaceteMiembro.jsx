import React from 'react';
import '../style-sheet/HaceteMiembro.css';

export default function HaceteMiembro() {
	return (
		<section id='unite' className='container-fluid'>
			<div className='row'>
				<div className='titulo-unite text-warning text-center py-3'>
					<span className='text-uppercase'>Hacete Miembro</span>
					<p className='text-light '>3 simples pasos</p>
					<div className='linea-titulo-unite d-flex justify-content-center align-content-center py-0 my-0' />
				</div>
			</div>
			<div className='row unite-container d-flex flex-row justify-content-center'>
				<div
					className='col-sm-4 col-lg-4 text-center p-2'
					data-aos='fade-right'>
					<i className='fab fa-wpforms step1 text-warning' />
					<p className='text-light'>
						Completá el formulario con tus datos personales
					</p>
				</div>
				<div className='col-sm-4 col-lg-4 text-center p-2' data-aos='fade-down'>
					<i className='fas fa-beer step2 text-warning' />
					<p className='text-light'>
						Elegí que cantidad de birra querés recibir
					</p>
				</div>
				<div className='col-sm-4 col-lg-4 text-center p-2' data-aos='fade-left'>
					<i className='fas fa-gift step3 text-warning' />
					<p className='text-light'>
						Recibí todos los meses un estilos diferente.
					</p>
				</div>
			</div>
			<div className='row'>
				<div className='col-xs-12 col-sm-12 col-lg-12 d-flex justify-content-center py-auto mb-2'>
					{/* INICIO Boton Simulando Cerveza */}
					<button className='btn bg-warning btn-unite text-uppercase m-3'>
						<span className='text-dark'>Sí quiero!</span>
						<div className='liquid' />
					</button>
					{/* FIN Boton Simulando Cerveza */}
				</div>
			</div>
		</section>
	);
}
