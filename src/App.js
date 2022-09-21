//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css';

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

// VIEWS
import Home from './views/Home/Home';
import Contacto from './views/Contacto/Contacto';
import Galeria from './views/Galeria/Galeria';
import Servicios from './views/Servicios/Servicios';
import Clientes from './views/Clientes/Clientes';
import ItemDetail from './views/ItemDetail/ItemDetail';

const App = () => {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Navigation />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contacto' element={<Contacto />} />
					<Route path='/galeria' element={<Galeria />} />
					<Route path='/clientes' element={<Clientes />} />
					<Route path='/servicios' element={<Servicios />} />
					<Route path='/detail/:prod_id' element={<ItemDetail />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App
