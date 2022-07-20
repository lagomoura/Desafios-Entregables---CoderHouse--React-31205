import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MiContexto } from './context/CartContextProvider';
import '../style-sheet/Carrito.css';
function Carrito({ children, initial }) {
	const { cart, valorTotalCarrito, removerItemCarrito } =
		useContext(MiContexto);

	return (
		<>
			<div>
				<h3 className='text-center titulo-logo m-3'>Shopping Cart</h3>
			</div>
			{cart[0] !== undefined ? (
				<div>
					{cart.map((producto) => {
						return (
							<div key={producto.id}>
								<section className='h-100' style={{ backgroundColor: '#eee' }}>
									<div className='container-fluid pt-5'>
										<div className='row justify-content-center align-items-center'>
											<div className='col-12 d-flex justify-content-center cart-item-box'>
												<div className=' rounded-3 mb-2'>
													<div className='bg-light card-body p-2'>
														<div className='row d-flex justify-content-center align-items-center'>
															<div className='col-md-3 col-lg-3 col-xl-3 text-center'>
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
																<p className='text-muted'>
																	ABV: {producto.abv}%
																</p>
																<p className='text-muted'>
																	IBU: {producto.ibu}
																</p>
																<p className='cantidadProducto fw-bold'>
																	Cantidad: {producto.cantidad}
																</p>
															</div>
															<div className='col-md-6 col-lg-6 col-xl-6 offset-lg-1 justify-content-end d-flex'>
																<h5 className='mb-0'>
																	Valor: ${producto.precio * producto.cantidad},00
																</h5>
															</div>
														</div>
													</div>
													<div className='d-flex justify-content-end '>
														<button className='text-danger btn'>
															<i
																onClick={() => {
																	removerItemCarrito(producto.id);
																}}
																className='fas fa-trash fa-lg bg-warning p-3 rounded basurita'
															/>
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						);
					})}
					<div className='d-flex justify-content-end m-4 align-content-center'>
						<div className='valorTotal mx-4'>
							<p className='fw-bold fs-5'>
								Valor total: ${valorTotalCarrito()},00
							</p>
						</div>
						<div className='btnComprar'>
							<Link to='/cart/checkout'>
								<button
									type='button'
									className='btn bg-warning text-capitalize btn-block m-3 rounded'>
									Terminar Compra
									<div className='liquid'></div>
								</button>
							</Link>
						</div>
					</div>
				</div>
			) : (
				<div className='container my-5 py-5 d-flex flex-column'>
					<div className='msgCarritoVacio'>
						<h3>Su carrito está vacio</h3>
						<p>
							Para seguir comprando, navega por las categorias en el menu
							Tienda, o busque su producto
						</p>
					</div>
					<div className='btnHome'>
						<Link to='/home/tienda' className='btn btn-warning mb-3 fw-bold'>
							Elegir Productos
						</Link>
					</div>
				</div>
			)}
		</>
	);
}

export default Carrito;
