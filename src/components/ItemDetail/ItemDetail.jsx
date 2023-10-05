import { useContext, useState } from 'react';
import { ItemCounter } from '../ItemCounter/ItemCounter';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';


export const ItemDetail = ({ product }) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito)

    const [quantity, setQuantity] = useState(1);

    const handleRestar = () => {
        quantity > 1 && setQuantity(prevQuantity => prevQuantity - 1)
    };

    const handleSumar = () => {
        quantity < product.stock && setQuantity(prevQuantity => prevQuantity + 1)
    };

    return (
        <div className='mb-5'>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12} md={6}>
                        <Card>
                            <Row className='mb-2'>
                                <Col xs={12} md={6}>
                                    <Card.Img variant="top" src={product.img} alt={product.title} />
                                </Col>
                                <Col xs={12} md={6}>
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>{product.description}</Card.Text>
                                        <Card.Text>Género: {product.genre}</Card.Text>
                                        <Card.Text>Plataforma: {product.platform}</Card.Text>
                                        <Card.Text>Precio: {product.price}</Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                            <ItemCounter quantity={quantity} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={() => { agregarAlCarrito(product, quantity) }} />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}