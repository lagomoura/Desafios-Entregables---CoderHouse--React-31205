import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Toastify from 'toastify-js';
import { MiContexto } from './context/CartContextProvider';

function ItemCount({
	cantidad,
	setCantidad,
	precio,
	max,
	id,
	detalleProducto,
}) {
	const [valor, setValor] = useState(precio);
	const [stock, setStock] = useState(max);
	const [cantidadCarrito, setCantidadCarrito] = useState(0);

	const { estaEnCarrito, addItemCarrito } = useContext(MiContexto);

	const onAdd = () => {
		estaEnCarrito(id);


		Toastify({
			text: `${cantidad} Items Agregados`,
			duration: 2000,
			newWindow: true,
			close: true,
			gravity: 'top', // `top` or `bottom`
			position: 'left', // `left`, `center` or `right`
			stopOnFocus: true, // Prevents dismissing of toast on hover
			style: {
				background: 'linear-gradient(to right, #ffbd52, #fc9d39)',
			},
		}).showToast();
	};

	const sumar = () => {
		if (cantidad < max) {
			setCantidad(cantidad + 1);
			setValor(precio * (cantidad + 1));
		} else {
			Toastify({
				text: 'Stock insuficiente',
				duration: 3000,
				style: {
					background: 'linear-gradient(to right, #ffbd52, #fc9d39)',
				},
			}).showToast();

			setCantidad(cantidad);
			setValor(valor);
		}
	};

	const restar = () => {
		if (cantidad > 1) {
			setCantidad(cantidad - 1);
			setValor(precio);
			setValor(precio * (cantidad - 1));
		} else {
			Toastify({
				text: 'La cantidad debe ser mayor o igual a 1',
				duration: 3000,
				style: {
					background: 'linear-gradient(to right, #ffbd52, #fc9d39)',
				},
			}).showToast();

			setCantidad(cantidad);
			setValor(valor);
		}
	};

	const restarStock = () => {
		setStock(stock - cantidad);
	};

	const resetCantidad = () => {
		setCantidad(1);
	};

	const validarCantidad = () => {
		return cantidad > stock;
	};

	const validarStock = () => {
		restarStock();
		onAdd();
		resetCantidad();
	};

	const agregarAlCarrito = () => {
		setCantidadCarrito(cantidad);
	};

	return (
		<>
			<div className='producto-detail' key={id}>
				<div className='producto_Detail_Precio'>
					<p className='text-center fw-bold mt-3 fs-4'>${valor},00</p>
				</div>
				<div className='d-flex gap-4 justify-content-center'>
					<button
						onClick={sumar}
						type='button'
						className='btn btn-warning my-3'>
						+
					</button>
					<h2 className='fw-bold my-3'> {cantidad} </h2>
					<button
						onClick={restar}
						type='button'
						className='btn card-btn btn-warning my-3'>
						-
					</button>
				</div>
				<div className='btn_agregarCarrito d-flex flex-column'>
					<button
						className='btn card-btn-cart my-3 bg-warning rounded-pill'
						disabled={validarCantidad()}
						onClick={() => {
							validarStock();
							agregarAlCarrito(cantidad);
							addItemCarrito(detalleProducto, cantidad);
						}}>
						Agregar al Carrito
					</button>
					{cantidadCarrito >= 1 && (
						<Link
							to='/cart'
							className='btn card-btn-cart my-1 bg-dark text-warning rounded-pill'>
							Finalizar mi compra
						</Link>
					)}

					<p className='fw-bold'> Disponibilidad: {stock} botellas</p>
				</div>
			</div>
		</>
	);
}

export default ItemCount;
