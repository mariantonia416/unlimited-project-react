import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import ItemCard from '../../components/ItemCard/ItemCard';

const ItemDetail = () => {
	const [user, setUser] = useState([]);

    let { prod_id } = useParams();
 
	 useEffect(() => {
		axios(`https://my-json-server.typicode.com/mariantonia416/unlimited-project-react/productos/${prod_id}`).then((res) => {
			setUser(res.data)
            console.log(res)}
		);
	}, [prod_id]);

	return (
		<div>	
            <div>
                <ItemCard data={user} />
            </div>
		</div>
	);
    // return (
	// 	<div>
	// 		{user.map((item) => {
	// 			return (
	// 				<div>
	// 					<ItemCard data={item} />
	// 				</div>
	// 			);
	// 		})}
	// 	</div>
	// );
};

export default ItemDetail;
