import * as React from 'react';
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Box,
} from '@mui/material';

const ItemDetail = ({ data }) => {
	return (
		<Card className="w-75 m-5 d-flex flex-wrap">
            <CardMedia className='w-50 pt-3 ps-3' component='img' image={data.image} alt='Image API' />
				<Box className='w-50 pt-5 ps-5 text-start'>
					<Typography gutterBottom variant='h2'>
						{data.name}
					</Typography>
                    <CardContent className='w-50'>
                        <Typography color='text.secondary'>
                            Status: {data.status}
                        </Typography>
                        <Typography color='text.secondary'>
                            Species: {data.species}
                        </Typography>
                        <Typography color='text.secondary'>
                            Location: {data.location.name}
                        </Typography>
                        <Typography>
                            Gender: {data.gender}
                        </Typography>                        
                    </CardContent>
                    <a type="button" href={data.episode[0]} class="btn btn-primary">EPISODE</a>
				</Box>
		</Card>
	);
};

export default ItemDetail;