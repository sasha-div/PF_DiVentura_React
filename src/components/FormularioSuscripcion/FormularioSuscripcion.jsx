import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormularioSuscripcion = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(enviar)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="¿Cómo deberíamos llamarte?" {...register("nombre")} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="¿Cuál es tu correo?" {...register("email")} />
                    <Form.Text className="text-muted">
                        No lo compartiremos con nadie.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Quiero recibir información sobre ofertas y promociones." {...register("validacion")} />
                </Form.Group>
                <Button className="mb-5" variant="primary" type="submit">
                    Suscribirme
                </Button>
            </Form>
        </div>
    )
}

export default FormularioSuscripcion;