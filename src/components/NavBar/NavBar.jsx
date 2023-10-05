import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Link to="/" className='navbar-brand me-5'>
                        <img
                            alt="logo"
                            src="https://i.ibb.co/SXTGCLJ/icon-logo.webp"
                            width="40"
                            height="34"
                            className="d-inline-block align-top me-3"
                        />
                        64 Bits
                    </Link>
                    <Nav className="me-auto">
                        <Link to="/" className='nav-link'>Inicio</Link>
                        <Link to="/products" className='nav-link'>Productos</Link>
                        <Link to="/product/PS4" className='nav-link'>PS4</Link>
                        <Link to="/product/Switch" className='nav-link'>SWITCH</Link>
                        <Link to="/product/Xbox" className='nav-link'>XBOX</Link>
                        <Link to="/conocenos" className='nav-link'>Conócenos</Link>
                    </Nav>
                    <CartWidget />
                </Container>

            </Navbar>
        </div>
    )
}

export default NavBar;