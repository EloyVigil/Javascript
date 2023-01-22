import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Update = (props) => {
    const { _id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + _id)
            .then(results => {
                setTitle(results.data.title)
                setPrice(results.data.price)
                setDescription(results.data.description)
            })
            .catch(err => console.error(err));
    }, [_id]);

    const submitHandler = ev => {
        ev.preventDefault();
        axios.put('http://localhost:8000/api/product/' + _id, { title, price, description })
            .then(results => console.log(results), navigate('/products'))
            .catch(err => console.log(err));
        }

    return (
        <>
            <h1>Update Product</h1>
            <form onSubmit={submitHandler}>
                <TextField label="Title" variant="outlined" onChange={(ev) => setTitle(ev.target.value)} value={title} />
                <br />
                <TextField label="Price" variant="outlined" onChange={(ev) => setPrice(ev.target.value)} value={price} />
                <br />
                <TextField label="Description" variant="outlined" onChange={(ev) => setDescription(ev.target.value)} value={description} />
                <br />
                <Button variant="outlined" type='submit'>Update</Button>
            </form>
        </>
    )

}

export default Update;

