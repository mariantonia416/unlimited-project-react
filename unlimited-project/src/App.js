import logo from './logo.svg';
import React from 'react'
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'

//COMPONENTS
import NavBar from './components/NavBar';

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css';

//STYLES
import './styles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <NavBar/>
        </Router>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Mariantonia Castaño</p>
        <p>Unlimited project</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
