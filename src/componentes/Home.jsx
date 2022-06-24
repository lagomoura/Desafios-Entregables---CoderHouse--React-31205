import { useState } from 'react';
import ItemListContainer from './ItemListContainer.jsx';
import ItemDetailContainer from './ItemDetailContainer.jsx';
import '../style-sheet/NavBar.css'

function Home() {

	const [carrito, setCarrito] = useState(0);

	const sumarCarrito = (cantidad) => {
		setCarrito(carrito + cantidad);
	};

	return (
		<div>
			<div className='container-fluid'>
				<div className='row d-flex justify-content-center m-2'>
					<div className='col-12 mt-5 text-center'>
						{' '}
						<h2>
							Bievenidos a <span className='titulo-logo'>Eita!</span>{' '}
							<span className='subtitulo-logo'>Club Exclusivo de Cerveza</span>
						</h2>
					</div>
				</div>
			</div>
			<div>
				<div className='row'>
					<ItemListContainer sumarCarrito={sumarCarrito} />
				</div>
			</div>
			<div className='row'>
				<ItemDetailContainer sumarCarrito={sumarCarrito} />
			</div>
		</div>
	);
}

export default Home;
