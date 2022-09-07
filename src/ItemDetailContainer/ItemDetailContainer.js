// import React, {useState, useEffect} from 'react'
// import Spinner from '../components/Spinner/Spinner';
// import axios from 'axios'
// import ItemDetail from '../ItemDetail/ItemDetail';

// const ItemDetailContainer = () => {
//     const [data, setData] = useState({});
// 	const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
// 		setIsLoading(true);

// 		axios('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10')
// 		.then((res) => setData(res.data));

// 		setTimeout(() => {
// 			setIsLoading(false);
// 		}, 1000);
// 	}, []);

//     return (
//         <div className='w-100 d-flex flex-column align-items-center'>
//             {isLoading ? <Spinner /> : <ItemDetail data={data} />}
//         </div>
     
//     )
// }

// export default ItemDetailContainer;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../components/Spinner/Spinner';

const ItemDetailContainer = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		
        
		axios(
		'https://rickandmortyapi.com/api/character/1'
		).then((res) => setData(res.data));

		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	return (
		<div className='d-flex justify-content-center'>
			{isLoading ? <Spinner /> : <ItemDetail data={data} />}
		</div>
	);
};

export default ItemDetailContainer;