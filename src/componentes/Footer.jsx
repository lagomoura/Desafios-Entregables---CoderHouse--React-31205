import {Link} from 'react-router-dom';
import '../style-sheet/Footer.css';
import Logo from '../imagenes/logo-fondo4.svg';

function Footer() {
	return (
		<footer id='footer' className='bg-warning'>
			<div className='container-fluid col-12'>
				<div className='row'>
					<div className='col-sm-auto col-md-6 col-lg-4 logo d-flex align-items-start justify-content-center my-auto'>
						<img src={Logo} alt='logo' />
					</div>
					<div className='col-sm-auto col-md-6 col-lg-4 d-flex menu-footer justify-content-center align-items-center mx-0 px-1 my-auto'>
						<ul>
							<li>
								<Link  to='./home'>INICIO</Link>
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
								<Link to='/home'>CONTACTO</Link>
							</li>
							<li>
								<Link to='./home'>TIENDA</Link>
							</li>
							<li>
								<Link to='/home'>MI CUENTA</Link>
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
									<label htmlFor='inputPassword2' className='visually-hidden'>
										Su mail
									</label>
									<input
										type='email'
										className='form-control text-dark'
										id='inputPassword2'
										placeholder=' *Su mail'
									/>
								</div>
								<div className='col-auto p-2'>
									<button
										type='submit'
										className='btn bg-dark mb-3 text-uppercase btn-newsletter text-warning'>
										confirmar
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className='d-flex col-sm-auto col-md-6 col-lg-4 justify-content-between my-auto mx-auto m-0 redes-logo my-auto py-auto'>
						<Link to='./home'  className='p-1'>
							<i className='fab fa-instagram redes-logo' />
						</Link>
						<Link to='./home'  className='p-1'>
							<i className='fab fa-youtube redes-logo' />
						</Link>
						<Link to='./home'  className='p-1'>
							<i className='fab fa-reddit redes-logo' />
						</Link>
						<Link to='./home'  className='p-1'>
							<i className='fab fa-twitter redes-logo' />
						</Link>
						<Link to='./home'  className='p-1'>
							<i className='fab fa-tiktok redes-logo' />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
