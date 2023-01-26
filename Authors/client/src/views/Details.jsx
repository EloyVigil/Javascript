import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteButton from '../components/DeleteButton';
import { useNavigate } from 'react-router-dom';

export default props => {
    const [author, setAuthor] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        axios.get('http://localhost:8000/author/' + props._id)
        .then(response => setAuthor(response.data))
        .catch(error => console.log(error))
    }, [])

    return(
        <div>
            <Paper elevation={4}>
                <h1>{author.name}</h1>
                <Button variant="text">Home</Button>
                <Button variant="text" onClick={(ev) => navigate('/')}>Edit</Button>
                <DeleteButton authorId={author._id} successCallback={() => navigate('/') } />
            </Paper>
        </div>
    )

}