import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from './Booking/Booking';
const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10:05 AM - 11:30 AM',
        space: 10
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '5:00 PM- 6:30 PM',
        space: 10
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '7:00 PM - 8:30 PM',
        space: 10
    },
    {
        id: 5,
        name: 'Teeth Orthodontics',
        time: '12:00 PM - 13:30 PM',
        space: 10
    },
    {
        id: 6,
        name: 'Teeth Orthodontics',
        time: '14:00 PM - 15:30 PM',
        space: 10
    },
]

const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography sx={{ fontWeight: 500, color: '#5ce7ed', my: 3 }} variant="h4">
                Available appointment on {date.toDateString()}
            </Typography>
            {bookingSuccess &&
                <Alert severity="success">Booking Successful</Alert>
            }
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        setBookingSuccess={setBookingSuccess}
                        booking={booking}
                        date={date}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;