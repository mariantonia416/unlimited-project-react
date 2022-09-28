import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem"
import Box from '@mui/material/Box';

const Cart = () => {
  const { cartList, EmptyCart, PriceTotal, IconCart } = useContext(CartContext);

  return (
    <>
    <Box className='w-50'
    sx={{
      p: 4,
      margin: 'auto',
      flexGrow: 1,
      backgroundColor: (theme) =>
      theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  }}>
      <div className="py-5">
        {cartList.length < 1 ? (
          <p>Carrito vacío</p>
        ) : (
          cartList.map((product) => <CartItem key={product.item.id} product={product.item} cantidad ={product.cantidad}/>)
        )}
      </div>
      <p>El precio total de los productos es {PriceTotal()} </p>
      {IconCart() < 1? <p> </p>:<p>La cantidad total de items es {IconCart()}</p>}
      <button className="btn btn-danger m-3" onClick={EmptyCart}> Vaciar carrito</button>
      
    
    </Box>
    </>
  );
};

export default Cart;