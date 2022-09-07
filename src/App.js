import React from 'react'
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'

//COMPONENTS
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';


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
        <ItemDetailContainer/>
      </div>
    </div>
  );
}

export default App;
