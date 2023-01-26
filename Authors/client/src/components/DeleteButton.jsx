import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';


export default props => {
    const {authorId, successCallback} = props;

    const deleteAuthor = (ev) => {
        axios.delete('http://localhost:8000/delete/author/' + authorId)
        .then(response => successCallback(authorId))
        .catch(error => console.log(error))
        successCallback(authorId);
        // console.log(authorId)
    }

    return(
        <div>
            <Button variant="text" onClick={deleteAuthor} >Delete</Button>
        </div>
    )

}