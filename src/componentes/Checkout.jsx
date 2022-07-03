import React from 'react';
import { useState, useContext } from 'react';
import { MiContexto } from './context/CartContextProvider';
import Toastify from 'toastify-js';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';

export default function Checkout() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [orderId, setOrderId] = useState('');

	const db = getFirestore();
	const orderCollection = collection(db, 'orders');

	const { cart, valorTotalCarrito } = useContext(MiContexto);

	function handleForm(e) {
		e.preventDefault();

		const order = {
			buyer: { name, email, phone },
			items: cart,
			total: valorTotalCarrito(),
		};

		//= Obliga a todos los campos estaren completados
		if (!name || !email || !phone) {
			return Toastify({
				text: `Por favor, completar todos los campos`,
				duration: 2000,
				newWindow: true,
				close: true,
				gravity: 'top', // `top` or `bottom`
				position: 'center', // `left`, `center` or `right`
				stopOnFocus: true, // Prevents dismissing of toast on hover
				style: {
					background: 'linear-gradient(to right, #ffbd52, #fc9d39)',
				},
			}).showToast();
			//= Valida el nombre
		} else if (
			name.length < 3 ||
			name.length > 15 ||
			!/^[a-zA-Z]+$/.test(name)
		) {
			return Toastify({
				text: `Por favor, agregar un nombre valido.`,
				duration: 2000,
				newWindow: true,
				close: true,
				gravity: 'top', // `top` or `bottom`
				position: 'center', // `left`, `center` or `right`
				stopOnFocus: true, // Prevents dismissing of toast on hover
				style: {
					background: 'linear-gradient(to right, #ffbd52, #fc9d39)',
				},
			}).showToast();
		}
		// console.log(order);

		addDoc(orderCollection, order).then(({ id }) => {
			setOrderId(id);
			Toastify({
				text: `Pedido ${orderId} realizado con éxito.`,
				duration: 2000,
				newWindow: true,
				close: true,
				gravity: 'top', // `top` or `bottom`
				position: 'center', // `left`, `center` or `right`
				stopOnFocus: true, // Prevents dismissing of toast on hover
				style: {
					background: 'linear-gradient(to right, #ffbd52, #fc9d39)',
				},
			}).showToast();
		});
		console.log(order, orderId);
	}

	return (
		<>
			{!orderId ? (
				<div>
					<div className='mt-3'>
						<h5 className='text-center text-warning'>
							Para dar seguimiento a su compra, por favor, ingresar los datos
							abajo:
						</h5>
					</div>
					<div className='formulario container d-flex justify-content-center align-items-center pt-5'>
						<form>
							<div className='mb-1'>
								<label className='form-label text-warning'>Nombre</label>
								<input
									onChange={(e) => setName(e.target.value)}
									placeholder='Ingrese su nombre'
									type='name'
									className='form-control'
								/>
							</div>
							<div className='mb-1'>
								<label className='form-label text-warning'>Telefono</label>
								<input
									onChange={(e) => setPhone(e.target.value)}
									placeholder='Ingrese su telefono'
									type='phone'
									className='form-control'
								/>
							</div>
							<div className='mb-3'>
								<label className='form-label text-warning'>Email</label>
								<input
									onChange={(e) => setEmail(e.target.value)}
									placeholder='Ingrese su email'
									type='email'
									className='form-control'
								/>
							</div>
							<div className='pb-4'>
								<button
									onClick={handleForm}
									type='submit'
									className='btn btn-warning px-3 mx-2'>
									Enviar Pedido
								</button>
								<button className='btn btn-dark text-warning px-3 mx-2'>
									Necesito Ayuda
								</button>
							</div>
						</form>
					</div>
				</div>
			) : (
				<div
					className='container d-flex justify-content-start pt-5 flex-column align-items-center gracias-compra'
					id='orderForm'>
					<h2 className='text-warning'>Muchas gracias por su compra!!</h2>
					<p className='mt-2'>
						Para cualquier eventual consulta: contacto@eita.com
					</p>
					<p>ID de compra: {orderId}</p>
					<Link to='/home'>
						<button className='btn radius-50 bg-warning m-3'>
							Volver a Inicio
						</button>
					</Link>
				</div>
			)}
		</>
	);
}
