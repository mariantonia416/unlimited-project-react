import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartList, EmptyCart, PriceTotal, IconCart } = useContext(CartContext);

  return (
   <div className="mt-5 d-flex flex-wrap justify-content-center">
      <div className="w-100 text-center">
        {cartList.length < 1 ? (
          <p>Carrito vacio</p>
        ) : (
          cartList.map((product) => <CartItem key={product.item.id} product={product.item} cantidad ={product.cantidad}/>)
        )}
      </div>
      <div className="w-100 text-center">
        <p>El precio total de los productos es {PriceTotal()} </p>
        {IconCart() < 1? <p> </p>:<p>La cantidad total del carrito es {IconCart()}</p>}
        <div className="d-flex justify-content-center">
          <button onClick={EmptyCart} className='btn btn-danger m-2'> Vaciar carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;