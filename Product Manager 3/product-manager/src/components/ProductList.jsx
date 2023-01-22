import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductForm from './ProductForm';
import Button from '@mui/material/Button';




const ProductList = () => {
    const [product, setProduct] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8000/api/products')
            .then(res => { setProduct(res.data); })
            .catch(err => console.error(err));
    }, [])
    
    const removeFromDom = (_id) => {
        setProduct(product.slice(_id, 1))
        window.location.reload(false)
    }

    const deleteProduct = (_id) => {
        axios.delete('http://localhost:8000/api/delete/' + _id)
        .then(res => {
            console.log(res)
            console.log("deleted")
            removeFromDom(_id)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <ProductForm />
            {product.map((product) =>
                <h3 key={product._id}>Title:
                    <Link to={'/product/' + product._id}>{product.title}</Link>
                    <br/>
                    <Button variant="outlined" ><Link to={'/edit/product/' + product._id}>Edit</Link></Button>
                    <Button variant="outlined" onClick={ ev => {deleteProduct(product._id)}} >Delete</Button>
                </h3>
            )}
        </div>
    )
}

export default ProductList;