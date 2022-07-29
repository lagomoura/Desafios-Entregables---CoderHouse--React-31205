import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Carrito from './componentes/Carrito';
import Checkout from './componentes/Checkout';
import CartContextProvider from './componentes/context/CartContextProvider.jsx';
import Footer from './componentes/Footer';
import Home from './componentes/Home.jsx';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import Contacto from './componentes/Contacto';
import MiCuenta from './componentes/MiCuenta';
import LogIn from './componentes/LogIn';

function App() {
	//. el (:id) indica que es variable
	return (
		<CartContextProvider>
			<BrowserRouter>
				<NavBar />

				<Routes>
					<Route path='/' element={<Home />} />

					<Route path='/home' element={<Home />} />

					<Route path='/home/tienda' element={<ItemListContainer />} />

					<Route path='/categoria/:categoria' element={<ItemListContainer />} />

					<Route path='/producto/:id' element={<ItemDetailContainer />} />

					<Route path='/cart' element={<Carrito />} />

					<Route path='cart/checkout' element={<Checkout />} />

					<Route path='/home/contacto' element={<Contacto />} />

					<Route path='/home/login' element={<LogIn />} />

					<Route path='/home/mi-cuenta' element={<MiCuenta />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</CartContextProvider>
	);
}

export default App;
