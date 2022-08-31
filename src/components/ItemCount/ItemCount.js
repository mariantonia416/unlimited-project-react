import React, {useState} from 'react'

const ItemCount = ({inicial , stock}) => {
  const [count, setCount] = useState(1)
  const aumentarCantidad = () => {
    if (count < stock)
      setCount(count + 1)
  }
  const disminuirCantidad = () => {
    if (count > inicial)
      setCount(count - 1)
  }
  return (
    <div>
        <p>{count}</p>
        <button className='btn btn-outline-primary mx-2' onClick={aumentarCantidad}>+</button>
        <button className='btn btn-outline-primary mx-2' onClick={disminuirCantidad}>-</button>
    </div>
  )
}

export default ItemCount