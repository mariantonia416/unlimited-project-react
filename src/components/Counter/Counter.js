import React, { useState } from "react";

const ItemCount = ({ inicial, stock, onAdd }) => {
  const [count, setCount] = useState(1);
  const aumentarCantidad = () => {
    if (count < stock) setCount(count + 1);
  };
  const disminuirCantidad = () => {
    if (count > inicial) setCount(count - 1);
  };

  const addToCart = () => {
    onAdd(count);
  };
  
  return (
    <div>
      <p>{count}</p>
      <button
        className="btn btn-outline-primary mx-2"
        onClick={aumentarCantidad}
      >
        +
      </button>
      <button
        className="btn btn-outline-primary mx-2"
        onClick={disminuirCantidad}
      >
        -
      </button>
      <button className="btn btn-outline-primary mx-2" onClick={addToCart}>
        Agregar producto
      </button>
    </div>
  );
};

export default ItemCount;
