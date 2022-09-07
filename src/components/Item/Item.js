import * as React from 'react';
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	CardActionArea
} from '@mui/material';

const Item = ({ data }) => {
	return (
		<Card sx={{ maxWidth: 345, margin: 10 }}>
			<CardActionArea>
				<CardMedia component='img' image={data.image} alt='green iguana' />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{data.name}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{data.status}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default Item;