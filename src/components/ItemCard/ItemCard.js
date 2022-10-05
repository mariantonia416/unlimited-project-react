import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ItemCard = ({ itemsData }) => {
	return (
		<Card className="m-5 text-decoration-none" sx={{ maxWidth: 345 }}>
			<CardMedia component='img' image={itemsData.img} />
			<CardContent className='text-center'>
				<Typography variant='h5' component='div'>
					{itemsData.Title}
				</Typography>
				<Typography className='fs-4'>
					COP$ {itemsData.Price}
				</Typography>
				<Typography className='fw-bold fs-6 pt-2 text-muted' gutterBottom>
					Categoría: {itemsData.category}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ItemCard;