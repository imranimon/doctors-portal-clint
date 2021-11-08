import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (<>
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ py: 2 }}>
                <Typography sx={{ color: '#5ce7ed', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" gutterBottom display="block">
                    {space} space available
                </Typography>
                <Button onClick={handleBookingOpen} style={{ backgroundColor: '#5ce7ed' }} variant="contained">Book Appointment</Button>
            </Paper>
        </Grid>
        <BookingModal
            date={date}
            booking={booking}
            openBooking={openBooking}
            setBookingSuccess={setBookingSuccess}
            handleBookingClose={handleBookingClose}
        >
        </BookingModal>
    </>
    )
};

export default Booking;