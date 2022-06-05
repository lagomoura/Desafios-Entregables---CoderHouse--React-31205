import './App.css';
import NavBar from './componentes/NavBar.jsx';
import ItemListContainer from './componentes/ItemListContainer.jsx';
import ItemCount from './componentes/ItemCount.jsx';

function App() {
  return (
    <div className="App">
      <NavBar  /> 
      <ItemListContainer  />
    </div>
  );
}

export default App;
