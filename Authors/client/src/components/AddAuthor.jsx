import React, { useState } from 'react';
import AuthorForm from './AuthorForm';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default () => {
    const navigate = useNavigate();
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState([]);

    const addNewAuthor = (newAuthor) => {
        axios.post('http://localhost:8000/author/create', newAuthor)
            .then(response => {
                setAuthors([...authors, response.data])
                navigate('/')
            })
            .catch((err) => {
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div>
            <Paper elevation={4}>
                <h1>Add A New Author</h1>
                <Button onClick={(ev) => navigate('/')} variant="text">Home</Button>
                <AuthorForm onSubmitProp={addNewAuthor} initialFullName={""} errors={errors} />
            </Paper>
        </div>
    )

}