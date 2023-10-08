import { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Container, Spinner } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/data';
import Swal from 'sweetalert2';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const id = useParams().id;
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const docRef = doc(db, "products", id);

        getDoc(docRef)
            .then((resp) => {
                if (resp.exists()) {
                    setProduct({ ...resp.data(), id: resp.id });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'No se encontró el producto',
                    });
                    navigate('/products');
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error al obtener el producto:", error);
                setLoading(false);
            });
    }, [id]);

    return (
        <Container className='my-5 d-flex justify-content-center mt-5'>
            {loading ? (
                <Spinner animation='border' role="status">
                    <span className='visually-hidden'>Cargando...</span>
                </Spinner>
            ) : (
                product &&
                <ItemDetail product={product} />)}
        </Container>
    )
}

export default ItemDetailContainer;