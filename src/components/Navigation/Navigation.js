import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className='w-100'>
			<ul className='d-flex justify-content-around bg-secondary bg-gradient'>
				<Link to='/' className='py-3 text-white text-decoration-none fs-5'>
					Home
				</Link>
				<Link to='/servicios' className='py-3 text-white text-decoration-none fs-5'>
					Servicios
				</Link>
				<Link to='/clientes' className='py-3 text-white text-decoration-none fs-5'>
					Clientes
				</Link>
				<Link to='/galeria' className='py-3 text-white text-decoration-none fs-5'>
					Galería
				</Link>
				<Link to='/contacto' className='py-3 text-white text-decoration-none fs-5'>
					Contacto
				</Link>
			</ul>
		</nav>
	);
};

export default NavBar;