import React, {useState, useEffect } from 'react';
import ItemCard from '../ItemCard/ItemCard'
import Spinner from '../Spinner/Spinner';

//LINK ROUTER DOM
import { Link } from "react-router-dom";

//FIREBASE
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig'

const CardList = () => {
    const [itemsData, setItemsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() => { 
        const getItems = async () => {
            const q = query(collection(db, 'items'));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            })
            setItemsData(docs)
        };
        getItems();
        setTimeout(() => {
			setIsLoading(false);
		}, 1000);
    }, []);

    return (
        <>
        {isLoading ? (
				<div className='Spinner'>
					<Spinner />
				</div>
			) : (
                <div className='d-flex justify-content-center'>
                    {itemsData.map((item) => {
                        return (
                            <Link to={`/detail/${item.id}`} key={item.id} className="text-decoration-none" >
                                <ItemCard itemsData={item} />
                            </Link>
                        )
                    })}
                </div>
            )}
        </>
    );
};

export default CardList