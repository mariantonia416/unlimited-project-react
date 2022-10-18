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
      <div className="d-flex align-items-center">
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={disminuirCantidad}
      >
        -
      </button>
      <p className="m-4">{count}</p>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={aumentarCantidad}
      >
        +
      </button>
      </div>
      <button type="button" className="btn btn-outline-primary" onClick={addToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
