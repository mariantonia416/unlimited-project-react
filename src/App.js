import React from 'react';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header/Header';
import CheckOut from './components/CheckOut/CheckOut';

// CONTEXT
import CartContextProvider from './components/Cart/CartContext';

// VIEWS
import Contacto from './views/Contacto/Contacto';
import ItemDetail from './views/ItemDetail/ItemDetail';
import Home from './views/Home/Home';
import Category from './views/Category/Category';
import Conocenos from './views/Conocenos/Conocenos';
import Cart from './views/Cart/Cart';


const App = () => {
	return (
		<CartContextProvider>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/category/:category" element={<Category />} />
					<Route path="/conocenos" element={<Conocenos />} />
					<Route path="/contacto" element={<Contacto />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/checkout" element={<CheckOut />} />
					<Route path="/detail/:id" element={<ItemDetail />} />
				</Routes>
			</Router>
		</CartContextProvider>
	);
};

export default App
