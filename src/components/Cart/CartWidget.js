//BOOTSTRAP
import { Cart4 } from 'react-bootstrap-icons';

//CONTEXT
import { useContext } from 'react'
import { CartContext } from '../Cart/CartContext';


const CartWidget = () => {
	
	const { IconCart }  = useContext(CartContext)

	return (
		<div className='d-flex align-items-center'>
			{IconCart()}
			<Cart4 className='mx-2 text-secondary' size={28}/>
		</div>
	);
};

export default CartWidget;

