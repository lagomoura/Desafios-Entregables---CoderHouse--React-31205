import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Carrito from './componentes/Carrito';
import Footer from './componentes/Footer';
import Home from './componentes/Home.jsx';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import TituloTienda from './componentes/TituloTienda';

function App() {
	//. el (:id) indica que es variable
	return (
		<BrowserRouter>
			<NavBar />
			<TituloTienda />

			<Routes>
				<Route path='/' element={<ItemListContainer />} />
				<Route path='/home' element={<ItemListContainer />} />
				<Route path='/categoria/:categoria' element={<ItemListContainer />} />

				<Route path='/producto/:id' element={<ItemDetailContainer />} />
				<Route path='/carrito' element={<Carrito />} />

				<Route path='*' element={<Home />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
