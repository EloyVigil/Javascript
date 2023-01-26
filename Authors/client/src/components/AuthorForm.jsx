import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { isRouteErrorResponse, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';


export default (props) => {
    const { initialFullName, onSubmitProp, errors } = props;
    const [fullName, setFullName] = useState(initialFullName);
    const navigate = useNavigate();

    const submitHandler = ev => {
        ev.preventDefault()
        onSubmitProp({ fullName });
    }

    return (
        <div>
            <Paper elevation={4}>
                <form onSubmit={submitHandler}>
                    <TextField label="Author Name" variant="standard" value={fullName} onChange={(ev) => {setFullName(ev.target.value)}} />
                    {errors.fullName && (<p>{errors.fullName.message}</p>)}
                    <Button variant="text" type='submit'>Submit</Button>
                    <Button variant="text" onClick={ () => {navigate('/')}}>Cancel</Button>
                </form>
            </Paper>
        </div>
    )
}