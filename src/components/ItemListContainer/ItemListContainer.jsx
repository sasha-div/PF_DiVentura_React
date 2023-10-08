import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/data';


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const platform = useParams().platform;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const productsRef = collection(db, "products");

        const q = platform ? query(productsRef, where("platform", "==", platform)) : productsRef;

        getDocs(q)
            .then((resp) => {
                setProducts(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                );
                setLoading(false);
            });
    }, [platform]);

    return (
        <Container className='my-5 d-flex justify-content-center'>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            ) : (
                <ItemList products={products} />
            )}
        </Container>
    )
}

export default ItemListContainer;