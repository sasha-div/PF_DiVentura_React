import Item from '../Item/Item';

const ItemList = ({ products }) => {
    return (
        <div>
            <h1 className='my-5 d-flex justify-content-center'>Productos</h1>
            <div className='d-flex justify-content-center flex-wrap'>
                {
                    products.length > 0 &&
                    products.map((product) => {

                        return (
                            <Item key={product.id} product={product} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemList;