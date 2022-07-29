import { Link } from 'react-router-dom';
import '../style-sheet/NavBar.css';
import CartWidget from './CartWidget.jsx';

function NavBar() {
	return (
		<nav className='navbar navbar-expand-lg navbar-light p-0 mx-0' id='menu'>
			<div className='container-fluid p-1 m-0 d-flex mx-lg-0'>
				<Link className='navbar-brand mx-1 my-0' to='/home'>
					<span className='fs-1 titulo-logo md-4'>Eita!</span>
					<span className='fw-light subtitulo-logo'>
						{' '}
						Club Exclusivo de Cerveza
					</span>
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon' />
				</button>
			</div>
			<div className='container-fluid mx-0 d-flex flex-row-reverse'>
				<div
					className='col-lg-6 collapse navbar-collapse navbar-menu p-3 m-0'
					id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0 d-flex ml-auto'>
						<li className='nav-item align-bottom align-self-start'>
							<Link className='nav-link active' aria-current='page' to='/home'>
								{' '}
								Inicio
							</Link>
						</li>
						<li className='nav-item dropdown'>
							<Link
								className='nav-link dropdown-toggle'
								to='home/tienda'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								Tienda
							</Link>
							<ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
								<li>
									<Link className='dropdown-item' to='/categoria/ale'>
										Ales
									</Link>
								</li>
								<li>
									<hr className='dropdown-divider' />
								</li>
								<li>
									<Link className='dropdown-item' to='/categoria/lager'>
										Lagers
									</Link>
								</li>
								<div>
									<li>
										<hr className='dropdown-divider' />
									</li>
									<li>
										<Link to='/home/tienda'>
											<span className='dropdown-item fw-bold text-uppercase'>
												Todos los estilos 🍻
											</span>
										</Link>
									</li>
								</div>
							</ul>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='home/contacto'>
								{' '}
								Contacto
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='home/login'>
								{' '}
								Mi cuenta
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='home/mi-cuenta'>
								{' '}
								Test
							</Link>
						</li>
					</ul>
					<CartWidget />
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
