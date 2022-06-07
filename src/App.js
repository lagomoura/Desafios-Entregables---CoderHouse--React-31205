import './App.css';
import ItemListContainer from './componentes/ItemListContainer.jsx';
import NavBar from './componentes/NavBar.jsx';
import Items from './componentes/Items.jsx';

function App() {
  return (
    <div className="App">
      <NavBar  /> 
      <div class="productos">
        < Items />
        < Items />
        
      </div>
    </div>
  );
}

export default App;
