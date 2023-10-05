import { useEffect, useState } from 'react';
import { getProductById } from '../../helpers/getProducts';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const id = useParams().id;

    useEffect(() => {
        getProductById(Number(id))
            .then(res => {
                setProduct(res)
            })
            .catch(error => {
                console.error(error);
            })
    }, [id])

    return (
        <Container className='d-flex justify-content-center mt-5'>
            {product &&
                <ItemDetail product={product} />}
        </Container>
    )
}

export default ItemDetailContainer;