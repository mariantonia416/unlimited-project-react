import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const AddToCart = (item, cantidad) => {
   
    if (IsInCart(item.id)) {
      alert("El producto ya se encuentra en el carrito");
    } else {
      setCartList([...cartList, { item, cantidad }]);
      alert("Se agrego el producto correctamente");
    }
  };

  const DelItem = (id) => {
    const items = cartList.filter((product)=> product.item.id !== id)
    setCartList(items)
    return
  }

  const IconCart = () => {
    return cartList.reduce((acum, i)=> acum + i.cantidad, 0)
  }

  const PriceTotal = () => {
    return cartList.reduce((acum, i) => acum + i.cantidad * i.item.precio, 0)
  }

  const EmptyCart = () =>{
    return setCartList([])
  }

  const IsInCart = (id) => {
    return cartList && cartList.some((i) => i.item.id === id);
  };

  return (
    <CartContext.Provider value={{ AddToCart, cartList, EmptyCart, DelItem, PriceTotal, IconCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;