import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthorList from './AuthorList';

export default () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/authors')
            .then(response => { setAuthors(response.data) })
            .catch(error => console.log(error))
    }, [])

    const removeFromDom = authorId => {
        console.log("test", authorId)
        const updatedAuthors = authors.filter(author => {
            console.log(author._id, authorId)
            return author._id !== authorId
        })
        setAuthors(updatedAuthors);
    }

    return(
        <div>
            <h1>Favorite Authors</h1>
            <AuthorList authors={authors} removeFromDom={removeFromDom} />
        </div>
    )
}