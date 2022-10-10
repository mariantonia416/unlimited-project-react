import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartItem = ({ product, cantidad }) => {
  const { DelItem } = useContext(CartContext);
  const { title, price, id } = product;
  return (
    <div>
      <h4>Hola mundo {title}{price}</h4>
      <p>cantidad : {cantidad}</p>
      <button onClick={() => DelItem(id)}>Borrar item</button>
    </div>
  );
};

export default CartItem;