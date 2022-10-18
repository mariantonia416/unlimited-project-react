import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartList, EmptyCart, PriceTotal, /*IconCart*/ } = useContext(CartContext);

  return (
    <div className="my-5 d-flex flex-wrap justify-content-center">
      <h1 className="text-center fs-2 fw-bold w-100 mb-5">CARRITO DE COMPRA</h1>
      {cartList.length < 1 ? (
      <>
        <p className="text-center fs-4 w-100">Su carrito actualmente está vacío</p>
        <Link to="/">
          <button className="btn btn-outline-primary">Ver los productos</button>
        </Link>
      </>
      ) : (
        <>
        <div>
          {cartList.map((product) => {
          return (
            <CartItem key={product.item.id} product={product.item} cantidad ={product.cantidad}/>
            )
          })}
        </div>
        <div className="w-100 text-center">
        {/* <p>Cantidad de productos {IconCart()}</p> */}
        <p className="fs-4 fw-bold">Total: ${PriceTotal()} </p>
        <div>
          <Link onClick={EmptyCart} className='btn btn-outline-dark m-2'>Vaciar Carrito</Link>
          <Link to="/checkout" className='btn btn-primary m-2'>Checkout</Link>
        </div>
      </div>  
      </>
      )}       
    </div>
  )
};

export default Cart;

