import { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const Carrito = () => {

    const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <Container>
            <h1 className='my-5 d-flex justify-content-center'>Carrito</h1>

            {carrito.map((prod) => (
                <Row className='mt-4' key={prod.id}>
                    <Col>
                        <h4>{prod.title}</h4>
                        <p>Cantidad: {prod.quantity}</p>
                        <p>Precio por unidad: $ {prod.price}</p>
                        <p>Total: $ {prod.price * prod.quantity}</p>
                    </Col>
                </Row>
            ))}

            {carrito.length > 0 ? (
                <div className='mt-5'>
                    <Row>
                        <Col>
                            <h2>Total en el carrito: $ {totalCarrito()}</h2>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col className='mb-5'>
                            <Button variant='danger' className='btn-sm' onClick={handleVaciar}>
                                Vaciar carrito
                            </Button>
                            <Button variant='primary' className='btn-sm mx-2'>
                                <Link to='/checkout' className='nav-link'>
                                    Checkout
                                </Link>
                            </Button>
                        </Col>
                    </Row>
                </div>
            ) : (
                <div className='my-5 d-flex flex-column align-items-start'>
                    <h4>¡No hay productos en tu carrito!</h4>
                    <div className='mt-3'>
                        <Button variant='light' className='btn-sm'>
                            <Link to='/products' className='nav-link'>
                                Volver a la tienda
                            </Link>
                        </Button>
                    </div>
                </div>

            )}
        </Container>
    )
}
