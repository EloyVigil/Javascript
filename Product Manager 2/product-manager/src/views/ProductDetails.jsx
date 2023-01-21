import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState({});
    const { _id } = useParams();

    useEffect( () => {
        axios.get('http://localhost:8000/api/product/' + _id)
        .then(res => {setProductDetails(res.data)})
        .catch(err => console.log(err));
        console.log(productDetails)
    }, [_id])

    return(
        <>
            <h1>Title: {productDetails.title}</h1>
            <h1>Price: ${productDetails.price}</h1>
            <h1>Description: {productDetails.description}</h1>
        </>
    )

}

export default ProductDetails;