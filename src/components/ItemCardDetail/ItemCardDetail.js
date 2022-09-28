import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ItemCount from "../Counter/Counter";
import { useContext } from "react";
import { CartContext } from '../Cart/CartContext';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const ItemCardDetail = ({ data }) => {
    const {AddToCart} = useContext(CartContext)
    const onAdd = (counter) => {
        AddToCart(data, counter)
  };
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
                    <Img src={data.image} alt='Unlimited' />
                </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography className='fs-2' component="div">
                        {data.nombre}
                        </Typography>
                        <Typography className='fs-6 text-muted'>
                        {data.type}
                        </Typography>
                        <Typography className='mt-4 fs-5' component="div">
                            Precio
                        </Typography>
                        <Typography className='fs-5' component="div">
                            $COP {data.precio}
                        </Typography>
                        <Typography className='mt-3 fs-5 fw-light' component="div">
                            Cantidad
                        </Typography>
                        <ItemCount stock={10} inicial={1} onAdd={onAdd} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Box>
    )
}

export default ItemCardDetail;
