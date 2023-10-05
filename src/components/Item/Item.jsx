import { Card } from 'react-bootstrap';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (
        <div className='itemCard'>
            <Card style={{ width: '20rem', height: '31rem' }}>
                <Link to={`/products/${product.id}`}>
                    <Card.Img variant="top" src={product.img} />
                </Link>
                <Card.Body>
                    <Link to={`/products/${product.id}`}>
                        <Card.Title className="fs-5">{product.title}</Card.Title>
                    </Link>
                    <Card.Text>$ {product.price}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;