import React from 'react';
import img from './unlimited-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='bg-dark d-flex justify-content-center flex-wrap'>
			<Link to='/'>
				<img
					src={img}
					alt='Unlimited Logo'
					width='180px'
				/>
			</Link>
			<h1 className='text-white w-100 text-center pb-5'>Unlimited App</h1>
		</div>
	);
};

export default Header;