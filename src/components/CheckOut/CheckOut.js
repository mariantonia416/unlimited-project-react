import React, { useState } from 'react';
// Firebase
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

//LINK ROUTER DOM
import { Link } from "react-router-dom";

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

const CheckOut = () => {
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
			<h1 className='mt-5'>Completa tus datos</h1>
			<Form className='d-flex flex-column justify-content-center align-items-center' onSubmit={onSubmit}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Control 
					placeholder='Escribe tu Nombre'
					style={{ margin: 10, width: 400 }}
					name='nombre'
					value={values.nombre}
					onChange={handleOnChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Control 
					placeholder='Escribe tu teléfono'
					style={{ margin: 10, width: 400 }}
					name='telefono'
					value={values.telefono}
					onChange={handleOnChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Control 
					placeholder='Escribe tu Email'
					style={{ margin: 10, width: 400 }}
					name='email'
					value={values.email}
					onChange={handleOnChange}
					/>
				</Form.Group>
				<div className='d-flex m-3'>
					<Link to={`/cart`} className="text-decoration-none m-2 btn btn-dark" >
						Volver al carrito
					</Link>
					<Button className='btn btn-primary m-2'>Enviar compra</Button>
				</div>
			</Form>

			{purchaseID && 
				<Alert variant="success">
					<Alert.Heading>Hey, nice to see you</Alert.Heading>
					<p>
					Aww yeah, you successfully read this important alert message. This
					example text is going to run a bit longer so that you can see how
					spacing within an alert works with this kind of content.
					</p>
					<hr />
					<p className="mb-0">
					Whenever you need to, be sure to use margin utilities to keep things
					nice and tidy.
					</p>
				</Alert>
			}
		</div>
	);
};

export default CheckOut;
