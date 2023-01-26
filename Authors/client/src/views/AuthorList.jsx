import Paper from '@mui/material/Paper';
import React from 'react';
import DeleteButton from '../components/DeleteButton';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button'; 


export default props => {
    const { authors:a, removeFromDom } = props;
    const navigate = useNavigate();

    return (
        <div>
            <Paper elevation={4}>
            <Button onClick={(ev) => navigate('/author')} variant="text">Add an author</Button>
                <table>
                    <tbody>
                        <tr>
                            <th><h1>Author</h1></th>
                            <th><h1>Actions</h1></th>
                        </tr>
                        {a.map((author, idx) => {
                            return (
                                <tr key={idx}>
                                    <td><h1>{author.fullName}</h1></td>
                                    <td>
                                        <Button onClick={ () => {navigate('/update/' + author._id)}}>Edit</Button>
                                        <DeleteButton authorId={author._id} successCallback={ removeFromDom} />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Paper>
        </div>
    )


}