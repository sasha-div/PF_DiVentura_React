import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function MasVendidos() {
    return (

        <Container className='d-flex align-items-center justify-content-center flex-column'>
            <h2 className='my-5'>Más vendidos</h2>
            <CardGroup className='mb-5' style={{ width: '50rem' }}>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/9VPmHvf/product-002.webp" />
                    <Card.Body>
                        <Card.Title>Añadir al carrito</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Más detalles</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/sPXZKPJ/product-003.webp" />
                    <Card.Body>
                        <Card.Title>Añadir al carrito</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Más detalles</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/ZSKJ2kX/product-001.webp" />
                    <Card.Body>
                        <Card.Title>Añadir al carrito</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Más detalles</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://i.ibb.co/zJq5jtb/product-004.webp" />
                    <Card.Body>
                        <Card.Title>Añadir al carrito</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Más detalles</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Container>
    );
}

export default MasVendidos;