import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/data';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const platform = useParams().platform;

    useEffect(() => {

        const productsRef = collection(db, "products");

        const q = platform ? query(productsRef, where("platform", "==", platform)) : productsRef;

        getDocs(q)
            .then((resp) => {

                setProducts(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })
    }, [platform])

    return (
        <Container>
            <ItemList products={products} />
        </Container>
    )
}

export default ItemListContainer;