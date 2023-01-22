import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';

const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState({});
    const { _id } = useParams();
    const navigate = useNavigate();

    useEffect( () => {
        axios.get('http://localhost:8000/api/product/' + _id)
        .then(res => {setProductDetails(res.data)})
        .catch(err => console.log(err));
        console.log(productDetails)
    }, [_id])


    const deleteProduct = (_id) => {
        axios.delete('http://localhost:8000/api/delete/' + _id)
        .then(res => {
            console.log(res)
            console.log("deleted")
            navigate('/products')
        })
        .catch(err => console.log(err))
    }

    return(
        <>
            <h1>Product Details</h1>
            <h2>Title: {productDetails.title}</h2>
            <h2>Price: ${productDetails.price}</h2>
            <h2>Description: {productDetails.description}</h2>
            <Button variant="outlined" onClick={ ev => {deleteProduct(productDetails._id)}} >Delete</Button>
        </>
    )

}

export default ProductDetails;