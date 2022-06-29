import { createContext } from 'react';
import { useState } from 'react';

export const MiContexto = createContext();

const { Provider } = MiContexto;

export default function CartContextProvider({ children }) {
	const [cart, setCart] = useState([]);

	//. Usaremos en itemDetail - Agrega productos al carrito sin pisar a los agregados anteriormente. Solo cambiando la cantidad.

	const addItemCarrito = (item, cantidad) => {
		const newItem = {
			...item,
			cantidad,
		};

		if (!estaEnCarrito(newItem.id)) {
			setCart([...cart, newItem]);
		} else {
			const findProduct = cart.find((producto) => producto.id === newItem.id);
			const productIndex = cart.indexOf(findProduct);
			const auxArray = [...cart];

			if (newItem.cantidad + findProduct.cantidad <= findProduct.stock) {
				auxArray[productIndex].cantidad += cantidad;
				setCart(auxArray);
			}
		}
	};

	//. Usaremos en cart. Retorna un nuevo array sin el producto eliminado.
	const removerItemCarrito = (id) => {
		return setCart(cart.filter((producto) => producto.id !== id));
	};

	//. Usaremos en cart. Vacia el carrito.
	const limpiarCarrito = () => {
		setCart([]);
	};

	//. Usaremos en ItemDetail - Informa si el item esta en el carrito o no. Retorna un boolean.
	const estaEnCarrito = (id) => {
		return cart.some((item) => item.id === id);
	};

	//. Usaremos en cartWidget. Nos va a dar la cantidad total de productos en el carrito (state). Es mejor usar el metodo reduce?
	const cantidadCarrito = () => {
		return cart.reduce((acc, producto) => (acc += producto.cantidad), 0);
	};

	//. Usareoms en el cart. Retorna el precio total del carrito.
	const valorTotalCarrito = () => {
		return cart.reduce((previousValue, currentValue) => {
			return previousValue + currentValue.precio * currentValue.cantidad;
		}, 0);
	};

	return (
		<Provider
			value={{
				cantidadCarrito,
				estaEnCarrito,
				cart,
				addItemCarrito,
				removerItemCarrito,
				limpiarCarrito,
				valorTotalCarrito,
			}}>
			{children}
		</Provider>
	);
}
