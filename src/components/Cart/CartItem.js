import { useContext } from "react";
import { CartContext } from "./CartContext";
import Image from 'react-bootstrap/Image'
import { X } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CartItem = ({ product, cantidad }) => {
  const { DelItem } = useContext(CartContext);
  const { title, price, img, id } = product;
  return (
    <Container className="d-flex justify-content-between border-bottom pb-5 mb-5">
      <Row className="mx-auto justify-content-center">
        <Col className="col-10 col-lg-4 text-center">
          <Image className='img-fluid' width={180} src={img} alt='Unlimited' />
        </Col>
        <Col className="col-8 col-lg-7 order-last mt-4 mt-lg-0 justify-content-center">
          <h4>{title}</h4>
          <p className="fs-5"> ${price}</p>
          <p className="w-100">Cantidad:</p>
          <span className="px-5 py-2 border">{cantidad}</span>
        </Col>
        <Col className="col-1 col-lg-1 order-lg-last">
          <Link onClick={() => DelItem(id)} >
            <X className='text-dark border' size={30}/>
          </Link>
        </Col>
      </Row> 
    </Container>
  );
};

export default CartItem;
