import { useState, useEffect } from 'react';
import { getProducts } from '../../helpers/getProducts';
import ItemList from '../ItemList/ItemList';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const platform = useParams().platform;

    useEffect(() => {
        getProducts()
            .then((res) => {
                if (platform) {
                    setProducts(res.filter((prod) => prod.platform === platform));
                } else {
                    setProducts(res);
                }
            })
    }, [platform])

    return (
        <Container>
            <ItemList products={products} />
        </Container>
    )
}

export default ItemListContainer;