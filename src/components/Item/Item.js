import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Item = (title, description, images) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
                component='img'
                image= {images}
                alt='green iguana'
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {description}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  );
}

export default Item