import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MasVendidos from "../MasVendidos/MasVendidos";
import Destacados from "../Destacados/Destacados";

const Inicio = () => {
    return (
        <div>
            <img className="mb-3" src="https://i.ibb.co/q5Y5jr8/Purple-and-Blue-Retro-Game-Event-Banner.webp" alt="banner genérico head" width="100%" />
            <Container className="mb-5" >
                <Row className="justify-content-md-center gap-2">
                    <Col><img src="https://i.ibb.co/vvTszd7/inicio-banner1.webp" alt="Banner Gaming Channel" width="100%" /></Col>
                    <Col><img src="https://i.ibb.co/K7VXp2F/inicio-banner2.webp" alt="Banner Flash Sale" width="100%" /></Col>
                </Row>
            </Container>
            <Destacados />
            <MasVendidos />
            <img src="https://i.ibb.co/Pwy2v2K/Black-Blue-Simple-Gaming-Banner-Landscape.webp" alt="banner genérico foot" width="100%" />
        </div>
    )
}

export default Inicio;
