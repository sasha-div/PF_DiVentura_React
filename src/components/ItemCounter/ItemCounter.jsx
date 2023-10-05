import Button from 'react-bootstrap/Button';

export const ItemCounter = ({ quantity, handleRestar, handleSumar, handleAgregar }) => {

    return (
        <div>
            <div className="d-flex justify-content-center gap-3">
                <Button onClick={handleRestar} variant="light">-</Button>
                <p>{quantity}</p>
                <Button onClick={handleSumar} variant="light">+</Button>
            </div>
            <div className="d-flex justify-content-center my-2">
                <Button className="btn-sm" onClick={handleAgregar}>Agregar al carrito</Button>
            </div>
        </div>
    )
}