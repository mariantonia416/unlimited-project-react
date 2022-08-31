import React from 'react'
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'

//COMPONENTS
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css';

//STYLES
import './styles';

function App() {
  return (
    <div className="App">
      <header>
        <Router>
          <NavBar/>
        </Router>
        <ItemListContainer
        greeting="¡Bienvenido! Esta será la lista de items"
        />
        <ItemCount
          inicial={1}
          stock={10}
        />
      </header>
    </div>
  );
}

export default App;
