import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const { token } = useAuth()
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminCreate = e => {
        e.preventDefault();
        const user = { email }
        axios.put('https://aqueous-shelf-84077.herokuapp.com/users/admin', user, { headers: { "authorization": `Bearer ${token}` } })
            .then(response => {
                if (response.data.modifiedCount) {
                    setSuccess(true)
                    setEmail('')
                    console.log(response)
                }
            })
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminCreate}>
                {
                    success && <Alert severity="success">Admin Role Added</Alert>
                }
                <TextField label="Email" variant="standard" sx={{ width: '50%' }}
                    onBlur={handleOnBlur} type="email" /> <br />
                <Button type="submit" style={{ backgroundColor: '#5ce7ed', marginTop: '5px' }}
                    variant="contained" sx={{ width: '30%' }}>
                    Make Admin
                </Button>
            </form>
        </div >
    );
};

export default MakeAdmin;