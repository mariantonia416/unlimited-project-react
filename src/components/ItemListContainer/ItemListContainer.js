import React, {useState, useEffect} from 'react'
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ greeting }) => {
    const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10')
			.then((response) => response.json())
			.then((json) => setUsers(json));
	}, []);

    return (
    
        <div className='p-5'>
            <h1>{greeting}</h1>
            <ItemList users={users}/>
        </div>
     
    )
}

export default ItemListContainer;