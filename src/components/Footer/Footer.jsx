import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light">
            <Container>
                <Row>
                    <Col>
                        <p>© 2023 64 Bits</p>
                        <p>Términos y Condiciones | Política de Privacidad</p>
                    </Col>
                    <Col>
                        <p>Contacto: info@64bits.com</p>
                        <p>Síguenos en: <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>, <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;