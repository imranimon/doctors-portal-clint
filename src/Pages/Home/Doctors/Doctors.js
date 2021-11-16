import { Container, Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        axios.get('https://aqueous-shelf-84077.herokuapp.com/doctors')
            .then(response => {
                setDoctors(response.data)
            })
    }, [])
    return (
        <div>
            <h2>Our Doctors</h2>
            <Container>
                <Grid container spacing={2}>
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor._id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Grid>
            </Container>

        </div>
    );
};

export default Doctors;