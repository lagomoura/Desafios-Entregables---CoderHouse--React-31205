import { useContext } from 'react';
import '../style-sheet/CartWidget.css';
import { MiContexto } from './context/CartContextProvider';
import { Link } from 'react-router-dom';

function CartWidget() {
	const { cantidadCarrito } = useContext(MiContexto);

	return (
		<>
			<div className='nav-cart'>
				<Link to={'/cart'}>
					<img
						className='cart-img'
						src={require('../imagenes/shopping-cart.png')}
						alt='Shopping Cart'
					/>
				</Link>
				<span className='badge badge-danger' id='lblCartCount'>
					{cantidadCarrito()}
				</span>
			</div>
		</>
	);
}

export default CartWidget;
