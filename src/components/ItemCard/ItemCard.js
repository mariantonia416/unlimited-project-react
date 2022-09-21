import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ItemCard = ({ data }) => {
	return (
		<Card className="m-5 text-decoration-none" sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia component='img' image={data.image} />
				<CardContent className='text-center'>
					<Typography variant='h5' component='div'>
						{data.nombre}
					</Typography>
					<Typography className='fs-4'>
						COP$ {data.precio}
					</Typography>
					<Typography className='fw-bold fs-6 pt-2 text-muted' gutterBottom>
						{data.type}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default ItemCard;
