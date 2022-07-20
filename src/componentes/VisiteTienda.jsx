import React from 'react';
import '../style-sheet/VisiteTienda.css';
import { Link } from 'react-router-dom';

export default function VisiteTienda() {
	return (
		<section id='tienda' className='container-fluid'>
			<div className='row'>
				<div className='col-sm-12 col-sm-12 col-lg-12 d-flex justify-content-center py-auto btn-tienda'>
					<Link to='./tienda'>
						<button className='btn btn-outline-warning text-uppercase btn-tienda my-auto d-flex align-self-center'>
							visite nuestra tienda
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
