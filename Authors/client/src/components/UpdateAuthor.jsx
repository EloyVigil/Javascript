import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthorForm from './AuthorForm';
import { useNavigate, useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default props => {
    const navigate = useNavigate();
    const { _id } = useParams();
    const [author, setAuthor] = useState([])
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/author/' + _id)
            .then(response => {
                const author = response.data
                setAuthor(author)
                setLoaded(true)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }, [_id])

    const authorUpdate = (updatedAuthor) => {
        axios.put('http://localhost:8000/author/edit/' + _id, updatedAuthor)
            .then(response => {
                console.log(response)
                navigate('/')
            })
            .catch(err => {
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div>
            <Paper elevation={4}>
                <Button onClick={(ev) => navigate('/')} variant="text">Home</Button>
                <h1>Edit Author</h1>
                {loaded && <AuthorForm onSubmitProp={authorUpdate} initialFullName={author.fullName} errors={errors} />}
            </Paper>
        </div>
    )

}