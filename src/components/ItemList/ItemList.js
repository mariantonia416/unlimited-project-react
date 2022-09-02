import React, { useState, useEffect} from 'react'
import Item from '../Item/Item';

const ItemList = () => {
    const [users, setUsers] = useState([]);

    useEffect (() => {
        fetch('https://dummyjson.com/users')
        .then((response) => response.json())
        .then((json) => setUsers(json))
    }, [])
    
  return (
    <div>
        {users.map((user) => {
            return <Item key={user.id} data={user}/>
        })}
    </div>
  )
}

export default ItemList