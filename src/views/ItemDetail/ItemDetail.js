import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ItemCardDetail from '../../components/ItemCardDetail/ItemCardDetail';


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
	const [user, setUser] = useState([]);
	
	const { id } = useParams();

	useEffect(() => {
		const getItems = async () => {
			const q = query(collection(db, 'items'), where(documentId(), '==', id));
			const docs = [];
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setUser(docs);
		};
		getItems();
	}, [id]);

	return (
			
		user.map((user) => {
			return <ItemCardDetail itemsData={user} key={user.id}/>;
		})
	);
};

export default ItemDetail;
