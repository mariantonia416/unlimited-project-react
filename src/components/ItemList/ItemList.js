import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from '../ItemCard/ItemCard';

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

const ItemList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios('https://my-json-server.typicode.com/mariantonia416/unlimited-project-react/productos').then((res) =>
			setUsers(res.data)
		);
	}, []);

	return (
		<div className='d-flex flex-wrap'>
			{users.map((user) => {
				return (
					<div key={user.id}>
						<Link to={`/detail/${user.id}`} className='text-decoration-none'>
							<ItemCard data={user} />
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default ItemList;
