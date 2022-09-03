import React from 'react'
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'

//COMPONENTS
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemList/ItemList';

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
      </header>
      <div>
        <ItemListContainer
          greeting="¡Bienvenido! Esta será la lista de items"
        />
      </div>
      <div className='bg-light'>
        <ItemList/>
      </div>
      <div>
        <ItemCount
            inicial={1}
            stock={10}
          />
      </div>
    </div>
  );
}

export default App;
