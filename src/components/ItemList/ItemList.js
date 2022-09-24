import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "../ItemCard/ItemCard";
import { useParams } from "react-router-dom";

//LINK ROUTER DOM
import { Link } from "react-router-dom";

const ItemList = () => {
  const [users, setUsers] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    axios(
      "https://my-json-server.typicode.com/mariantonia416/unlimited-project-react/productos"
    ).then((res) => res.data)
	.then((res) => setUsers(type?res.filter((product)=> product.type === type):res));
  }, [type]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: "25px",
      }}
    >
      <div className="d-flex flex-wrap">
        {users.map((user) => {
          return (
            <div key={user.id}>
              <Link to={`/detail/${user.id}`} className="text-decoration-none">
                <ItemCard data={user} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
