import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"; 

export default () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate()

    const submitHandler = (ev) => {
        ev.preventDefault()
        axios.post("http://localhost:8000/api/product", {title, price, description})
        .then((res) => {
            console.log(res)
        })
        .catch((err) => console.log(err))
        setTitle("")
        setPrice("")
        setDescription("")
        navigate('/api/products');
        window.location.reload(false)
    }

    return (
        <>
        <h1>Product Manager</h1>
        <form onSubmit={submitHandler}>
            <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(ev) => setTitle(ev.target.value)} value={title} />
            <br/>
            <TextField id="outlined-basic" label="Price" variant="outlined" onChange={(ev) => setPrice(ev.target.value)} value={price} />
            <br/>
            <TextField id="outlined-basic" label="Description" variant="outlined" onChange={(ev) => setDescription(ev.target.value)} value={description} />
            <br/>
            <Button variant="outlined" type='submit'>Create</Button>
        </form>
        </>
    )
}