import React from 'react';
import '../style-sheet/CarouselHome.css';

export default function CarouselHome() {
	return (
		<>
			<div
				id='carousel-portada'
				className='carousel slide'
				data-bs-ride='carousel'>
				<div className='carousel-indicators'>
					<button
						type='button'
						data-bs-target='#carouselExampleCaptions'
						data-bs-slide-to={0}
						className='active'
						aria-current='true'
						aria-label='Slide 1'
					/>
					<button
						type='button'
						data-bs-target='#carouselExampleCaptions'
						data-bs-slide-to={1}
						aria-label='Slide 2'
					/>
					<button
						type='button'
						data-bs-target='#carouselExampleCaptions'
						data-bs-slide-to={2}
						aria-label='Slide 3'
					/>
				</div>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<img src={require('../imagenes/carousel_2.jpg')} className='d-block w-100' alt='beer' />
						<div className='carousel-caption d-none d-md-block'>
							<h5 className='titulo1-carousel text-uppercase fw-bold'>Mes a mes, una experiencia única</h5>
							<p className='subtitulo1-carousel'>
              Aprienda tomando. Estas listos para entrar en el mundo de la cerveza?
							</p>
						</div>
					</div>
					<div className='carousel-item'>
						<img src={require('../imagenes/tienda-bg.jpg')} className='d-block w-100' alt='beer' />
						<div className='carousel-caption d-none d-md-block'>
							<h5>Second slide label</h5>
							<p>
								Some representative placeholder content for the second slide.
							</p>
						</div>
					</div>
					<div className='carousel-item'>
						<img src={require('../imagenes/carousel-img-3.jpg')} className='d-block w-100' alt='beer' />
						<div className='carousel-caption d-none d-md-block'>
							<h5>Third slide label</h5>
							<p>
								Some representative placeholder content for the third slide.
							</p>
						</div>
					</div>
				</div>
				<button
					className='carousel-control-prev'
					type='button'
					data-bs-target='#carouselExampleCaptions'
					data-bs-slide='prev'>
					<span className='carousel-control-prev-icon' aria-hidden='true' />
					<span className='visually-hidden'>Previous</span>
				</button>
				<button
					className='carousel-control-next'
					type='button'
					data-bs-target='#carouselExampleCaptions'
					data-bs-slide='next'>
					<span className='carousel-control-next-icon' aria-hidden='true' />
					<span className='visually-hidden'>Next</span>
				</button>
			</div>
		</>
	);
}
