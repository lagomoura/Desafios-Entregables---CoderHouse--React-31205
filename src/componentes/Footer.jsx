import { Link } from 'react-router-dom';
import '../style-sheet/Footer.css';
import Logo from '../imagenes/logo-fondo4.svg';
import Toastify from 'toastify-js';
import { useState } from 'react';

function Footer() {
	const [email, setEmail] = useState('');

	function handleEmail(email) {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			return true;
		} else {
			return false;
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (!handleEmail(email)) {
			Toastify({
				text: `Por favor, agregar un email valido.`,
				duration: 2000,
				newWindow: true,
				close: true,
				gravity: 'bottom', // `top` or `bottom`
				position: 'right', // `left`, `center` or `right`
				stopOnFocus: true, // Prevents dismissing of toast on hover
				style: {
					background: 'linear-gradient(to right, #ffbd52, #fc9d39)',
				},
			}).showToast();
		} else {
			Toastify({
				text: `Email enviado correctamente`,
				duration: 2000,
				newWindow: true,
				close: true,
				gravity: 'bottom', // `top` or `bottom`
				position: 'right', // `left`, `center` or `right`
				stopOnFocus: true, // Prevents dismissing of toast on hover
				style: {
					background: 'linear-gradient(to right, #ffbd52, #fc9d39)',
				},
			}).showToast();
			setEmail('');
		}
	}

	return (
		<footer id='footer' className='footer-fondo'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-sm-auto col-md-6 col-lg-4 logo d-flex align-items-start justify-content-center my-auto'>
						<img src={Logo} alt='logo' />
					</div>
					<div className='col-sm-auto col-md-6 col-lg-4 d-flex menu-footer justify-content-center align-items-center mx-0 px-1 my-auto'>
						<ul>
							<li>
								<Link to='/home'>INICIO</Link>
							</li>
							<li>
								<Link to='/home'>EL CLUB</Link>
							</li>
							<li>
								<Link to='/home'>UNITE</Link>
							</li>
							<li>
								<Link to='/home'>CALENDARIO DE ESTILOS</Link>
							</li>
							<li>
								<Link to='/home/contacto'>CONTACTO</Link>
							</li>
							<li>
								<Link to='./home/tienda'>TIENDA</Link>
							</li>
							<li>
								<Link to='/home/contacto'>MI CUENTA</Link>
							</li>
						</ul>
					</div>
					<div className='col-sm-auto col-md-6 col-lg-4 redes-logo d-flex justify-content-around'>
						<div className='newsletter d-flex justify-content-start align-items mx-auto p-3'>
							<form className='row g-0 justify-content-center text-center my-auto mx-auto d-flex flex-column'>
								<div className='col-auto d-flex p-1'>
									<label
										htmlFor='staticEmail2'
										className='text-capitalize text-dark fw-bold fs-5'>
										Suscribate nuestra newsletter
									</label>
								</div>
								<div className='col-auto'>
									<input
										type='email'
										onChange={(e) => setEmail(e.target.value)}
										className='form-control text-dark'
										placeholder=' *Su E-mail'
									/>
								</div>
								<div className='col-auto p-2'>
									{
										<button
											onClick={handleSubmit}
											type='submit'
											className='btn bg-dark mb-3 text-uppercase btn-newsletter text-warning'>
											confirmar
										</button>
									}
								</div>
							</form>
						</div>
					</div>
					<div className='d-flex col-sm-auto col-md-6 col-lg-4 justify-content-between my-auto mx-auto m-0 redes-logo my-auto py-auto'>
						<Link to='./home' className='p-1'>
							<i className='fab fa-instagram redes-logo' />
						</Link>
						<Link to='./home' className='p-1'>
							<i className='fab fa-youtube redes-logo' />
						</Link>
						<Link to='./home' className='p-1'>
							<i className='fab fa-reddit redes-logo' />
						</Link>
						<Link to='./home' className='p-1'>
							<i className='fab fa-twitter redes-logo' />
						</Link>
						<Link to='./home' className='p-1'>
							<i className='fab fa-tiktok redes-logo' />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
