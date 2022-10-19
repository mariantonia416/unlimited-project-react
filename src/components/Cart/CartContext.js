import { createContext, useState } from "react";


export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const AddToCart = (item, cantidad) => {
    // (cartList.some((i) => i.item.id === item.id))
    if (IsInCart(item.id)) {
    const actualizar = cartList.map ((i) => {
      if (i.item.id === item.id) {
        i.cantidad = cantidad + i.cantidad;
      }
      return i
    })
     setCartList (actualizar)
    }
    else {
       setCartList([...cartList, { item, cantidad }]);
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
    return cartList.reduce((acum, i) => acum + i.cantidad * +i.item.price, 0)
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