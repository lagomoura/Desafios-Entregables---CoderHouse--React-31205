import './App.css';
import NavBar from './componentes/NavBar.jsx';
import ItemListContainer from './componentes/ItemListContainer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar  /> 
      <ItemListContainer 
      saludo ='Bievenidx a Eita! Club Exclusivo de Cerveza'/>
    </div>
  );
}

export default App;
