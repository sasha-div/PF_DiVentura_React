import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicio = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicio);

    const agregarAlCarrito = (product, quantity) => {
        const productAgregado = { ...product, quantity }
        const nuevoCarrito = [...carrito];
        const enElCarrito = nuevoCarrito.find((product) => product.id === productAgregado.id);

        if (enElCarrito) {
            enElCarrito.quantity += quantity;
        } else {
            nuevoCarrito.push(productAgregado);
        }
        setCarrito(nuevoCarrito);
    }

    const cartQuantity = () => {
        return carrito.reduce((acc, prod) => acc + prod.quantity, 0);
    }

    const totalCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, cartQuantity, totalCarrito, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )

}