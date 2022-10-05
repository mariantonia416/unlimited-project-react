import React from 'react';

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css';

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';

// CONTEXT
import { ItemsProvider } from './components/Cart/CartContext';

// VIEWS
import Contacto from './views/Contacto/Contacto';
import Galeria from './views/Galeria/Galeria';
import Servicios from './views/Servicios/Servicios';
import Clientes from './views/Clientes/Clientes';
import ItemDetail from './views/ItemDetail/ItemDetail';
import CardList from './components/CardList/CardList';
import Cart from './components/Cart/Cart';
import Category from './views/Category/Category';

const App = () => {
	return (
		<ItemsProvider>
		<Router>
			<div>
				<Header />
				<Navigation />
				<Routes>
					<Route path='/' element={<CardList />} />
					<Route path='/category/:category' element={<Category />} />


					
					<Route path='/contacto' element={<Contacto />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/galeria' element={<Galeria />} />
					<Route path='/clientes' element={<Clientes />} />
					<Route path='/servicios' element={<Servicios />} />
					<Route path='/detail/:id' element={<ItemDetail />} />
				</Routes>
			</div>
		</Router>
		</ItemsProvider>
	);
};

export default App
