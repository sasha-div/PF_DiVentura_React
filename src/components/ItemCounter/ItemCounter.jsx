import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ItemCounter = ({ quantity, handleRestar, handleSumar, handleAgregar }) => {
    const notify = () => toast.success("¡Producto agregado al carrito!");

    return (
        <div>
            <div className="d-flex justify-content-center gap-3">
                <Button onClick={handleRestar} variant="light">-</Button>
                <p>{quantity}</p>
                <Button onClick={handleSumar} variant="light">+</Button>
            </div>
            <div className="d-flex justify-content-center my-2">
                <Button className="btn-sm" onClick={() => { handleAgregar(); notify(); }}>Agregar al carrito</Button>
            </div>
        </div>
    )
}