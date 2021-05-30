import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products)
    
    const renderList = products.map(product => {
        const { title, price, category, id, image } = product
        return (
            <div className="col-md-4 p-3 text-start" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="card m-3 p-5">
                        <div className="card-img">
                            <img className='img-fluid' style={{ height: '300px', width: '100%' }} src={image} alt={title} />
                        </div>
                        <div className="card-title">
                            <h4 className='card-title'>{title}</h4>
                            <h4 style={{ color: 'red' }}>${price}</h4>
                            <p>{category}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return (
        <div className="container">
            <div className='row'>
                {renderList}
            </div>
        </div>
    );
};

export default ProductComponent;