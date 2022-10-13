import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';


const Products = ({addItem}) => {

    const [products, setProducts] = useState([])
    
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    return (
        <div className='container p-5 mt-5'>
            <div className="row">
                {
                    products.map(product => <SingleProduct addItem={addItem} key={product.id} product={product}></SingleProduct>)
                }              
            </div>
        </div>
    );
};

export default Products;