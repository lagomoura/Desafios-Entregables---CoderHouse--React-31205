import React from 'react';
import '../style-sheet/Beneficios.css';

export default function Beneficios() {
	return (
		<section id='beneficios' className='container-fluid p-0 py-3 my-3'>
			<div className='row d-flex justify-content-center align-items-center'>
				<div className='col-sm-4 col-lg-4 beneficio-item' data-aos='zoom-in-up'>
					<img src={require('../imagenes/beneficio1.png')} className='beneficio1-img' alt='' />
					<p className='beneficio-item-titulo fw-bold'>
						Cervezas Exclusivas y Producciones Acotadas
					</p>
					<p>
						Cada estilo cuenta con una produccion de bajo volumen, poniendo la
						atención en el proceso y la calidad del producto final.
					</p>
				</div>
				<div className='col-sm-4 col-lg-4 beneficio-item' data-aos='zoom-in-up'>
					<img src={require('../imagenes/beneficio2.png')} className='beneficio-img' alt='' />
					<p className='beneficio-item-titulo fw-bold'>
						Ingredientes Seleccionados
					</p>
					<p>
						Cada receta respeta sus ingredientes originales. Una mezcla perfecta
						entre el perfeccionismo de lo tradicional con la dosis justa de
						inovación.
					</p>
				</div>
				<div className='col-sm-4 col-lg-4 beneficio-item' data-aos='zoom-in-up'>
					<img src={require('../imagenes/beneficio4.png')} className='beneficio-img' alt='' />
					<p className='beneficio-item-titulo fw-bold'>Material Gráfico</p>
					<p>
						Todos las entregas van acompañandas de material gráfico impreso, con
						notas del cervecero, sugerencias de maridajes, historia de la
						cerveza, guía de estilos, curiosidades y mucho más.
					</p>
				</div>
			</div>
			<div className='row d-flex justify-content-center d-flex'>
				<div
					className='col-sm-4 col-lg-4 beneficio-item'
					data-aos='zoom-in-down'>
					<img src={require('../imagenes/beneficio3.png')} className='beneficio-img' alt='' />
					<p className='beneficio-item-titulo fw-bold'>
						Llegamos a Todo el País
					</p>
					<p>
						Del norte al sur, llegamos a donde quieras que lleguemos. Recibí la
						mejor experiencia artesanal, en el confort de tu casa.
					</p>
				</div>
				<div
					className='col-sm-4 col-lg-4 beneficio-item'
					data-aos='zoom-in-down'>
					<img src={require('../imagenes/beneficio5.png')} className='beneficio-img' alt='' />
					<p className='beneficio-item-titulo fw-bold'>
						Una Experiencia Diferente
					</p>
					<p>
						Cada mes, una entrega diferente, un estilo diferente, una
						experiencia diferente.
					</p>
				</div>
				<div
					className='col-sm-4 col-lg-4 beneficio-item'
					data-aos='zoom-in-down'>
					<img src={require('../imagenes/beneficio6.png')} className='beneficio-img' alt='' />
					<p className='beneficio-item-titulo fw-bold'>
						Formá Parte de un Grupo Exclusivo
					</p>
					<p>
						Catas guiadas, backstages de la producción, sorteos, regalos y mucho
						más.
					</p>
				</div>
			</div>
		</section>
	);
}
