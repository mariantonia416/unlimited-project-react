import React from 'react';
import Item from '../Item/Item';

const ItemList = ({users}) => {
	
	return (
		<div className='d-flex flex-wrap justify-content-center'>
			{users.map((user) => {
				return <Item key={user.id} data={user} />;
			})}
		</div>
	);
};

export default ItemList;
