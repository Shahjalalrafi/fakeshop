import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from './redux/Actions/productAction';

const ProductList = () => {
    const products = useSelector(state => state)
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch(err => console.log(err))
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    console.log('products :', products)
    return (
        <div>
            <ProductComponent />
        </div>
    );
};

export default ProductList;