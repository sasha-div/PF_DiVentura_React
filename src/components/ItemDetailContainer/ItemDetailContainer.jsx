import { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/data';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const id = useParams().id;

    useEffect(() => {

        const docRef = doc(db, "products", id);
        getDoc(docRef)
            .then((resp) => {
                setProduct(
                    { ...resp.data(), id: resp.id }
                )
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