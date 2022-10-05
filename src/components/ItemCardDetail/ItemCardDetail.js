import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import ItemCount from "../Counter/Counter";


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

const ItemCardDetail = ({ itemsData }) => {
    return (
		<Box
        className='w-75'
        sx={{
            p: 4,
            margin: 'auto',
            flexGrow: 1,
            backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
        >
        <Grid container spacing={6} className='align-items-center'>
            <Grid item>
                <ButtonBase className='w-100'>
                    <Img src={itemsData.img} alt='Unlimited' />
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography className='fs-2' component="div">
                        {itemsData.Title}
                        </Typography>
                        <Typography className='fs-6 text-muted'>
                        {itemsData.category}
                        </Typography>
                        <Typography className='mt-4 fs-5' component="div">
                            Precio
                        </Typography>
                        <Typography className='fs-5' component="div">
                            $COP {itemsData.Price}
                        </Typography>
                        <Typography className='mt-3 fs-5 fw-light' component="div">
                            Cantidad
                        </Typography>
                        <ItemCount stock={10} inicial={1} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
	);
};

export default ItemCardDetail;