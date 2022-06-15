import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import TituloTienda from './componentes/TituloTienda';
import Home from './componentes/Home.jsx';

function App({ carrito, ale, lager }) {
	//. el (:id) indica que es variable
	return (
		<BrowserRouter>
			<NavBar cantidad={carrito} />
			<TituloTienda />

			<Routes>
				<Route path='/' element={<ItemListContainer />} />
				<Route path='/home' element={<ItemListContainer />} />

				<Route
					path='/category/ale'
					element={<ItemListContainer />}
					categoria={ale}
				/>
				<Route
					path='/category/lager'
					element={<ItemListContainer />}
					categoria={lager}
				/>
				<Route path='/producto/:id' element={<ItemDetailContainer />} />
				<Route path='*' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
