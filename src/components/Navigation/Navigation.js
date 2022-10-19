//BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import React from 'react';

//COMPONENTS
import CartWidget from '../Cart/CartWidget';

//REACT ROUTER DOM
import { Link } from 'react-router-dom';

//ASSETS
import img from '../../static/unlimited-logo.png'


const NavBar = () => {
	return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
		<Image src={img} alt='Unlimited Logo' className='img-fluid mb-2' width='180px' />
		</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
			<NavDropdown title="Nuestros Servicios" id="collasible-nav-dropdown">
				<Link className='text-decoration-none text-dark dropdown-item' to="/category/Pantallas">Pantallas</Link>
				<Link className='text-decoration-none text-dark dropdown-item' to="/category/Sonido">Sonido</Link>
				<Link className='text-decoration-none text-dark dropdown-item' to="/category/Iluminación">Iluminación</Link>
				<Link className='text-decoration-none text-dark dropdown-item' to="/category/Techos">Techos</Link>
				<NavDropdown.Divider />
				<Link className='text-decoration-none text-dark dropdown-item' to="/">Ver todo</Link>
			</NavDropdown>
			<Link className='text-decoration-none text-white-50 nav-link' to="/conocenos">Conócenos</Link>
			<Link className='text-decoration-none text-white-50 nav-link' to="/contacto">Contáctanos</Link>
          </Nav>
		  <Nav>
			<Link className='text-light text-decoration-none' to="/cart">
				<CartWidget />
			</Link>
          </Nav>
        </Navbar.Collapse>
		</Container>
    </Navbar>
  );
}

export default NavBar;