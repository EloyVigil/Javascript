import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductForm from './ProductForm';



const ProductList = () => {

    const [product, setProduct] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProduct(res.data);
            })
            .catch(err => console.error(err));
    },[]);

    const changedList = (arr) => {
        
    }

    return(
        <div>
            <ProductForm/>
            {product.map((product) => 
            
                <p key={product._id}>Title: <Link to={'/api/product/' + product._id}>{product.title}</Link></p>
            )}
        </div>
    )
}

export default ProductList;