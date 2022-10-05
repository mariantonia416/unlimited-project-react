import React, { useState } from 'react';
// Firebase
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

import TextField from '@mui/material/TextField';
import MessageId from '../MessageId/MessageId';

const initialState = {
	nombre: '',
	telefono: '',
	email: '',
  producto: '',
  precio: '',
};

const styles = {
	containerCart: {
		textAlign: 'center',
		paddingTop: 20,
	},
};

const Cart = () => {
	const [values, setValues] = useState(initialState);
	// Este estado está destinado a guardar el id de la compra
	const [purchaseID, setPurchaseID] = useState('');

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(values);
		// Add a new document with a generated id.
		const docRef = await addDoc(collection(db, 'purchases'), {
			values,
		});
		// console.log('Document written with ID: ', docRef.id);
		setPurchaseID(docRef.id);
		setValues(initialState);
	};

	return (
		<div style={styles.containerCart}>
			<h1>Compra</h1>
			<form className='d-flex flex-column justify-content-center align-items-center' onSubmit={onSubmit}>
				<TextField
          
					placeholder='Nombre'
					style={{ margin: 10, width: 400 }}
					name='nombre'
					value={values.nombre}
					onChange={handleOnChange}
				/>
				<TextField
          
					placeholder='Teléfono'
					style={{ margin: 10, width: 400 }}
					name='telefono'
					value={values.telefono}
					onChange={handleOnChange}
				/>
				<TextField
          
					placeholder='Email'
					style={{ margin: 10, width: 400 }}
					name='email'
					value={values.email}
					onChange={handleOnChange}
				/>
        <TextField
          
					placeholder='Producto'
					style={{ margin: 10, width: 400 }}
					name='producto'
					value={values.producto}
					onChange={handleOnChange}
				/>
        <TextField
          
					placeholder='Precio'
					style={{ margin: 10, width: 400 }}
					name='precio'
					value={values.precio}
					onChange={handleOnChange}
				/>
        
				<button className='btn btn-primary mt-3 mb-5'>Enviar compra</button>
			</form>
			{purchaseID && <MessageId purchaseID={purchaseID} />}
		</div>
	);
};

export default Cart;
