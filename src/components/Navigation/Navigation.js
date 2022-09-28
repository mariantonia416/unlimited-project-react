import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className='w-100'>
			<ul className='d-flex justify-content-around bg-secondary bg-gradient'>
				<Link to='/' className='py-3 text-white text-decoration-none fs-5'>
					Home
				</Link>
				<Link to='/category/Sonido' className='py-3 text-white text-decoration-none fs-5'>
					Sonido
				</Link>
				<Link to='/category/Pantallas' className='py-3 text-white text-decoration-none fs-5'>
					Pantallas
				</Link>
				<Link to='/galeria' className='py-3 text-white text-decoration-none fs-5'>
					Galería
				</Link>
				<Link to='/contacto' className='py-3 text-white text-decoration-none fs-5'>
					Contacto
				</Link>
				<Link to='/cart' className='py-3 text-white text-decoration-none fs-5'>
					Carrito
				</Link>
			</ul>
		</nav>
	);
};

export default NavBar;