import React from 'react';
import ItemList from '../../components/ItemList/ItemList';

const Home = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				padding: '25px',
			}}
		>
			<h1>Home</h1>
			<ItemList />
		</div>
	);
};

export default Home;
