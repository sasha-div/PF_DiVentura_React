import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext);
    const quantity = cartQuantity();

    return (
        <div>
            <Link to="/carrito" className='nav-link'>Carrito<span className="cartNumber">{quantity}</span></Link>
        </div>

    );
}

export default CartWidget;