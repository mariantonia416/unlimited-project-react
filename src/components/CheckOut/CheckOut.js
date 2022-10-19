import React, { useContext, useState } from 'react';

//FIREBASE
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

//BOOTSTRAP
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//REACT ROUTER DOM
import { Link } from "react-router-dom";

//COMPONENTS
import MessageId from '../MessageId/MessageId';

//CONTEXT
import { CartContext } from '../Cart/CartContext';

const initialState = {
	nombre: '',
	telefono: '',
	email: '',
};

const CheckOut = () => {
	const [values, setValues] = useState(initialState);
	const [purchaseID, setPurchaseID] = useState('');
	const { cartList } = useContext(CartContext)
	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const docRef = await addDoc(collection(db, 'purchases'), {
			values,
			items: cartList.map((product) => ({
				id: product.item.id,
				name: product.item.title,
				price: product.item.price,
				quantity: product.cantidad
			}))
		});
		setPurchaseID(docRef.id);
		setValues(initialState);
	};

	return (
		<>			
			<Form className='d-flex flex-column justify-content-center align-items-center' onSubmit={onSubmit}>
				<h1 className='mt-5 text-center'>Completa tu orden</h1>
				<Form.Control className='w-75 my-3'
				placeholder='Escribe tu Nombre'
				name='nombre'
				value={values.nombre}
				onChange={handleOnChange}
				/>
				<Form.Control className='w-75 my-3'
				placeholder='Escribe tu teléfono'
				name='telefono'
				value={values.telefono}
				onChange={handleOnChange}
				/>				
				<Form.Control className='w-75 my-3'
				placeholder='Escribe tu Email'
				name='email'
				value={values.email}
				onChange={handleOnChange}
				/>			
				<div className='d-flex my-4 pb-5'>
					<Link to={"/cart"} className="text-decoration-none m-2 btn btn-outline-dark" >
						Volver al carrito
					</Link>
					<Button type="submit" className='btn btn-primary m-2'>Finalizar orden</Button>
				</div>
			</Form>
			{purchaseID && <MessageId purchaseID={purchaseID} />}
		</>
	);
};

export default CheckOut;
