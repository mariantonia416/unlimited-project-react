import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import ItemCardDetail from '../../components/ItemCardDetail/ItemCardDetail';


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
                <ItemCardDetail data={user} />
            </div>
		</div>
	);
    
};

export default ItemDetail;
