import React from 'react';
import '../style-sheet/NavBar.css';
import CartWidget from './CartWidget.jsx';

function NavBar( {cantidad} ) {
    return (
    <nav className='navbar navbar-expand-lg navbar-light p-0 mx-0 bg-warning' id='menu'>
        <div className='container-fluid bg-warning p-1 m-0 d-flex mx-lg-0'>
            <a className='navbar-brand mx-1 my-0' href='asd'>
                <span className='fs-1 titulo-logo md-4'>Eita!</span>
                <span className='fw-light subtitulo-logo'>{' '}Club Exclusivo de Cerveza</span>
            </a>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon' />
            </button>
        </div>
        <div className='container-fluid bg-warning mx-0 d-flex flex-row-reverse'>
            <div className='col-lg-6 collapse navbar-collapse navbar-menu bg-warning p-3 m-0' id='navbarSupportedContent'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0 d-flex ml-auto'>
                    <li className='nav-item align-bottom align-self-start'>
                        <a className='nav-link active' aria-current='page' href='#elClub'> Inicio</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#elClub'> El Club</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#unite'> Unite</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='./pages/calendarioEstilos.html'> Calendario de Estilos</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#footer'>{' '} Contacto</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='./pages/tienda.html'>{' '}Tienda</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='./pages/miCuenta.html'>{' '}Mi Cuenta</a>
                    </li>
                </ul>
                <CartWidget cantidad={cantidad}/>
            </div>
        </div>
    </nav>
);
}

export default NavBar;
