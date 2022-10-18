import * as React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ItemCount from '../Counter/Counter'
import Image from 'react-bootstrap/Image'
import { useContext } from 'react'
import { CartContext } from '../Cart/CartContext';

const ItemCardDetail = ({ itemsData }) => {

    const {AddToCart} = useContext(CartContext)

    const onAdd = (counter) => {
        AddToCart(itemsData, counter)
    }
    return (
        <Container className='container'>
            <Row className='d-flex flex-wrap justify-content-center py-5'>
                <Col className='d-flex justify-content-center col-12 col-lg-6 col-xl-6'>
                    <Image className='img-fluid' src={itemsData.img} alt='Unlimited' />
                </Col>
                <Col className='col-12 col-sm-9 col-lg-6 col-xl-6 p-4 p-xl-0'>
                    
                    <Col className='fs-2'>
                        {itemsData.title}
                    </Col>
                
                    <Col className='fs-6 text-muted'>
                        Categoría: {itemsData.category}
                    </Col>
                
                    <Col className='mt-4 fs-5'>
                        $COP {itemsData.price}
                    </Col>
                
                    <Col className='mt-3 fs-5 fw-light'>
                        Cantidad
                        <ItemCount stock={10} inicial={1} onAdd={onAdd}/>
                    </Col>
                
                    <Col className='mt-5 fs-5 fw-light'>
                        <span className='fw-bold'> Descripción del producto: </span>
                            {itemsData.description}
                    </Col>
                
                </Col>
            </Row>
        </Container>
	);
};

export default ItemCardDetail;