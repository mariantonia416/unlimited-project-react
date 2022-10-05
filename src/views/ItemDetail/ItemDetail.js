import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ItemCardDetail from '../../components/ItemCardDetail/ItemCardDetail';
import Spinner from '../../components/Spinner/Spinner';

import { db } from '../../firebase/firebaseConfig';

// FIRBASE - FIRESTORE
import {
	collection,
	query,
	getDocs,
	documentId,
	where,
} from 'firebase/firestore';

const ItemDetail = () => {
	const [itemsData, setItemsData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);


	const { id } = useParams();

	useEffect(() => {
		const getItems = async () => {
			const q = query(collection(db, 'items'), where(documentId(), '==', id));
			const docs = [];
			const querySnapshot = await getDocs(q);
			// console.log('DATA:', querySnapshot);
			querySnapshot.forEach((doc) => {
				// console.log('DATA:', doc.data(), 'ID:', doc.id);
				docs.push({ ...doc.data(), id: doc.id });
			});
			// console.log(docs);
			setItemsData(docs);
		};
		getItems();
		setTimeout(() => {
			setIsLoading(false);
		}, 300);
	}, [id]);

	return (
		<div>
			{isLoading ? (
				<div className='Spinner'>
					<Spinner />
				</div>
			) : (
				itemsData.map((item) => {
					return <ItemCardDetail itemsData={item} />;
				})
			)}
		</div>
	);
};

export default ItemDetail;
