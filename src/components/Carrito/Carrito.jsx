import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import Button from 'react-bootstrap/Button';

export const Carrito = () => {

    const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <Container>
            <h1 className='my-5 d-flex justify-content-center'>Carrito</h1>

            {
                carrito.map((prod) => (
                    <div className='mt-5' key={prod.id}>
                        <h4>{prod.title}</h4>
                        <p>Cantidad: {prod.quantity}</p>
                        <p>Precio por unidad: $ {prod.price}</p>
                        <p>Total: $ {prod.price * prod.quantity}</p>
                    </div>
                ))
            }

            {
                carrito.length > 0 ?
                    <div>
                        <h2 className='mt-5'>Total en el carrito: $ {totalCarrito()}</h2>
                        <Button variant='danger' className="btn-sm" onClick={handleVaciar}>Vaciar carrito</Button>
                    </div> :
                    <h4>No hay productos en tu carrito :(</h4>
            }
        </Container>
    )
}
