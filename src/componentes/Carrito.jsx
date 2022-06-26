import { useContext } from 'react';
import { MiContexto } from './context/CartContextProvider';
function Carrito({ children }) {
	const { cart, valorTotalCarrito } = useContext(MiContexto);

	return (
		<>
			<div>
				{cart.map((producto) => {
					return (
						<div key={producto.id}>
							<section className='h-100' style={{ backgroundColor: '#eee' }}>
								<div className='container h-100 pt-5'>
									<div className='row d-flex justify-content-center align-items-center h-100'>
										<div className='col-10'>
											<div className='card rounded-3 mb-4'>
												<div className='card-body p-4'>
													<div className='row d-flex justify-content-between align-items-center'>
														<div className='col-md-2 col-lg-2 col-xl-2'>
															<img
																src={producto.url}
																className='img-fluid rounded-3'
																alt='beer'
															/>
														</div>
														<div className='col-md-3 col-lg-3 col-xl-3 d-flex flex-column text-center'>
															<p className='lead fw-bold mb-2'>
																{producto.nombre}
															</p>
															<p>
																<span className='text-muted'>Estilo: </span>
																{producto.estilo}
															</p>
															<p className='text-muted'>ABV: {producto.abv}</p>
															<p className='text-muted'>IBU: {producto.ibu}</p>
														</div>
														<div className='col-md-3 col-lg-3 col-xl-2 d-flex'>
															<button className='btn btn-link px-2 bg-warning'>
																<i className='fas fa-minus' />
															</button>
															<input
																id='form1'
																min={1}
																name='quantity'
																defaultValue={producto.cantidad}
																type='number'
																className='form-control form-control-sm text-center '
															/>
															<button className='btn btn-link px-2 bg-warning'>
																<i className='fas fa-plus' />
															</button>
														</div>
														<div className='col-md-3 col-lg-2 col-xl-2 offset-lg-1'>
															<h5 className='mb-0'>${valorTotalCarrito()},00</h5>
														</div>
														<div className='col-md-1 col-lg-1 col-xl-1 text-end'>
															<a href='#!' className='text-danger'>
																<i className='fas fa-trash fa-lg bg-warning p-3' />
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
						</div>
					);
				})}
				<div className='d-flex justify-content-end p-5'>
					<button type='button' className='btn btn-warning btn-block btn-lg'>
						Proceder a pago
					</button>
				</div>
			</div>
		</>
	);
}

export default Carrito;
