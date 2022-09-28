import React, {useState, useEffect } from 'react';
import ItemCard from '../ItemCard/ItemCard'

//FIREBASE
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig'

//LINK ROUTER DOM
import { Link } from "react-router-dom";

const CardList = () => {
    const [itemsData, setItemsData] = useState([]);

    const getItems = async () => {
        const q = query(collection(db, 'items'));
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            docs.push ({...doc.data(), id: doc.id})
        })
        setItemsData(docs)
    }

    useEffect (() => { 
        getItems();
    }, []);

    return (
        <div className='d-flex justify-content-center'>
            {itemsData.map((item) => {
                return (
                <div key={item.id}>
                    <Link to={`/detail/${item.id}`} className="text-decoration-none">
                        <ItemCard itemsData={item} />
                    </Link>
                </div>
                )
            })}
        </div>
    )
}

export default CardList