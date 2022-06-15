import { Link } from 'react-router-dom';
import '../style-sheet/NavBar.css';
import CartWidget from './CartWidget.jsx';

function NavBar({ cantidad }) {
	return (
		<nav
			className='navbar navbar-expand-lg navbar-light p-0 mx-0 bg-warning'
			id='menu'>
			<div className='container-fluid bg-warning p-1 m-0 d-flex mx-lg-0'>
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
			<div className='container-fluid bg-warning mx-0 d-flex flex-row-reverse'>
				<div
					className='col-lg-6 collapse navbar-collapse navbar-menu bg-warning p-3 m-0'
					id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0 d-flex ml-auto'>
						<li className='nav-item align-bottom align-self-start'>
							<Link className='nav-link active' aria-current='page' to='/home'>
								{' '}
								Inicio
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='#elClub'>
								{' '}
								El Club
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='#unite'>
								{' '}
								Unite
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='./pages/calendarioEstilos.html'>
								{' '}
								Calendario de Estilos
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='#footer'>
								{' '}
								Contacto
							</Link>
						</li>
						<li className='nav-item dropdown'>
							<Link
								className='nav-link dropdown-toggle'
								to='/tienda'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								Tienda
							</Link>
							<ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
								<li>
									<Link className='dropdown-item' to='./category/ale'>
										Ales
									</Link>
								</li>
								<li>
									<hr className='dropdown-divider' />
								</li>
								<li>
									<Link className='dropdown-item' to='./category/lager'>
										Lagers
									</Link>
								</li>
							</ul>
						</li>

						<li className='nav-item'>
							<Link className='nav-link' to='./pages/miCuenta.html'>
								{' '}
								Mi Cuenta
							</Link>
						</li>
					</ul>
					<CartWidget cantidad={cantidad} />
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
