import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectedProductReducer } from './redux/Reducer/ProductReducer';

const ProductDetails = () => {
    const product = useSelector(state => state.allProducts.products)
    const { productId } = useParams()
    const dispatch = useDispatch()
    console.log(product)
    const { title, price, category, id, image, description } = product[0]

    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .catch(err => console.log(err))

        dispatch(selectedProductReducer(response.data))
    }

    useEffect(() => {
        fetchProductDetails()
    }, [])

    return (
        <div className='container'>
            <div className="row m-auto">
                <div className="col-md-2">
                    <img className='img-fluid' src={image} alt={title} />
                </div>
                <div className="col-md-10">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <h4>{price}</h4>
                                <p>{description}</p>
                                <p>{category}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;