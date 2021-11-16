import React, { useState } from 'react';
import { Button, Input, TextField } from '@mui/material'
import axios from 'axios';

const AddDoctor = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null)
    const [success, setSuccess] = useState(false)
    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);
        axios.post('https://aqueous-shelf-84077.herokuapp.com/doctors', formData)
            .then(result => {
                if (result.data.insertedId) {
                    console.log('Doctor Added Successfully')
                    setSuccess(true);
                };
            })
            .catch(err => {
                console.log(err)
            })

    }
    return (
        <div>
            <h3>Add a doctor</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    id="standard-basic"
                    label="Name"
                    type="text"
                    onChange={e => setName(e.target.value)}
                    required
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    id="standard-basic"
                    label="Email"
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="standard" />
                <br />
                <Input sx={{ width: '50%' }}
                    accept="image/*"
                    type="file"
                    required
                    onChange={e => setImage(e.target.files[0])}
                />
                <br />
                <Button type="submit" sx={{ marginTop: '10px' }} variant="contained">
                    Add Doctor
                </Button>
            </form>
            {
                success && <p style={{ color: 'green' }}>Doctor added successfully</p>
            }
        </div>
    );
};

export default AddDoctor;