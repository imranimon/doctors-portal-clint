import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const style = {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 5
};

const BookingModal = ({ handleBookingClose, openBooking, booking, date, setBookingSuccess }) => {
    const { name, time, price } = booking;
    const { user } = useAuth()
    const initialBookingInfo = {
        serviceType: name,
        time,
        price,
        patientName: user.displayName,
        email: user.email,
        phone: ''
    }
    const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setBookingInfo({ ...bookingInfo, [field]: value });
        // last line did the following job:
        // const newInfo = { ...bookingInfo};
        // newInfo[field] = value;
        // setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        e.preventDefault();
        bookingInfo.date = date.toLocaleDateString("de-DE");
        axios.post('https://aqueous-shelf-84077.herokuapp.com/appointments', bookingInfo)
            .then(res => {
                if (res.data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style}>
                    <Typography sx={{ color: '#5ce7ed' }} id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="patientName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            type="email"
                            name="email"
                            onBlur={handleOnBlur}
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            placeholder="Your Phone Number"
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <Button type="submit" style={{ backgroundColor: '#5ce7ed' }}
                            variant="contained">
                            Book
                        </Button>
                    </form>

                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;