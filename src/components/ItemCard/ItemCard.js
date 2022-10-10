
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Progress from '../Spinner/Spinner'
import React, { useState, useEffect } from 'react';

const ItemCard = ({ itemsData }) => {
	
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	});

	return (
		
		<div className="m-5 text-decoration-none text-center text-dark">
            
                <div className='fs-2 d-flex justify-content-center align-items-center' component="div">
				
				{isLoading ? (
					<div className='d-flex justify-content-center align-items-center' style={{width:'500px', height:'500px'}}>
						<Progress />
					</div>
					
				) : (
					<Image className='img-fluid mb-4' src={itemsData.img} alt='Unlimited' />
				)}
					
				</div>
            
                <div className='fs-2' component="div" variant='h5'>
					{itemsData.title}
				</div>
            
                <div className='fs-4'>
				COP$ {itemsData.price}
				</div>
            
                <div className='fw-bold fs-6 pt-2 text-muted'>
				Categoría: {itemsData.category}
				</div>
            
			<Button className='m-4'>Agregar al carrito</Button>
        </div>
	);
};

export default ItemCard;