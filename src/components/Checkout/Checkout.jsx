import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/data';
import Swal from 'sweetalert2';

export const Checkout = () => {

    const [orderId, setOrderId] = useState("");
    const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm();

    const comprar = (data) => {
        if (data.email !== data.confirmarEmail) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Los correos que ingresaste no coinciden.',
            });
            return;
        }

        const order = {
            cliente: data,
            productos: carrito,
            total: totalCarrito()
        }
        console.log(order);

        const ordersRef = collection(db, "orders");

        addDoc(ordersRef, order)
            .then((doc) => {
                setOrderId(doc.id);
                vaciarCarrito();
            })
            .catch((error) => {
                console.error('Error al procesar la orden:', error);

                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al procesar tu compra. Por favor, inténtalo nuevamente.',
                });
            });
    }

    if (orderId) {
        return (
            <Container>
                <h1 className='my-5 d-flex justify-content-center'>¡Gracias por tu compra!</h1>
                <p className='mb-5 d-flex justify-content-center'>Tu número de pedido es: {orderId}</p>
            </Container>
        )
    }

    return (
        <Container>
            <h1 className='my-5 d-flex justify-content-center'>Finalizar compra</h1>
            <div className='col-sm-6' style={{ width: '50%', margin: '3rem auto' }}>
                <Form className='mb-5' onSubmit={handleSubmit(comprar)}>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre" {...register("nombre", { required: true })} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Apellido" {...register("apellido", { required: true })} />
                        </Form.Group>
                    </Row>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Ingresa tu email</Form.Label>
                        <Form.Control type="email" placeholder="Ingresa tu Email" {...register("email", { required: true })} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridConfirmEmail">
                        <Form.Label>Confirma tu email</Form.Label>
                        <Form.Control type="email" placeholder="Confirma tu Email" {...register("confirmarEmail", { required: true }, {
                            validate: (value) => value === watch('email') || 'Los correos electrónicos no coinciden',
                        })}
                        />
                        {errors.confirmarEmail && (
                            <Form.Text className="text-danger">
                                {errors.confirmarEmail.message}
                            </Form.Text>
                        )}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control placeholder="Calle, casa, depto, piso" {...register("direccion", { required: true })} />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control {...register("ciudad", { required: true })} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Región</Form.Label>
                            <Form.Select defaultValue="Choose..." {...register("region", { required: true })} >
                                <option>Elige...</option>
                                <option>RM</option>
                                <option>Bio Bio</option>
                            </Form.Select>
                        </Form.Group>

                    </Row>

                    <Button variant="primary" type="submit" disabled={!isValid}>
                        Realizar compra
                    </Button>
                </Form>
            </div>
        </Container>
    )
}