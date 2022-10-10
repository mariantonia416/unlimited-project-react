// import { Link } from 'react-router-dom';
import img from '../../static/unlimited-logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import React from 'react';
import CartWidget from '../Cart/CartWidget';

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
			<NavDropdown title="Servicios" id="collasible-nav-dropdown">
				<NavDropdown.Item href="/category/Pantallas">Pantallas</NavDropdown.Item>
				<NavDropdown.Item href="/category/Sonido">Sonido</NavDropdown.Item>
				<NavDropdown.Item href="/category/Iluminación">Iluminación</NavDropdown.Item>
				<NavDropdown.Item href="/category/Techos">Techos</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="/">Ver todo</NavDropdown.Item>
				</NavDropdown>
			<Nav.Link href="/conocenos">Conócenos</Nav.Link>
			<Nav.Link href="/contacto">Contáctanos</Nav.Link>
          </Nav>
		  <Nav>
			<Nav.Link href="/cart">
				<CartWidget />
			</Nav.Link>
          </Nav>
        </Navbar.Collapse>
		</Container>
    </Navbar>
  );
}

export default NavBar;