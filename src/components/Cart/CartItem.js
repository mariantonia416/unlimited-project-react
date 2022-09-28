import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartItem = ({ product, cantidad }) => {
  const { DelItem } = useContext(CartContext);
  const { nombre, precio, id } = product;
  return (
    <div className="py-5 border-bottom">
      <h4>{nombre}</h4>
      <p>Cantidad : {cantidad}</p>
      <p>Precio : {precio}</p>
      <button className="btn btn-outline-danger m-2" onClick={() => DelItem(id)}>Eliminar item</button>
    </div>
  );
};

export default CartItem;