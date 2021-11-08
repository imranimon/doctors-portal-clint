import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74, 0.85)',
    backgroundBlendMode: 'darken',
    marginTop: '120px',
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '350px', height: '365px', marginTop: '-100px' }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} 
                sx={{display: 'flex', 
                justifyContent: 'flex-start',
                alignItems: 'center',
                textAlign:'left',
                }}>
                    <Box>
                        <Typography sx={{mb:5}} variant="h6" style={{ color: '#5ce7ed' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make an appointment Today
                        </Typography>
                        <Typography sx={{my:3}} variant="h6" style={{ color: 'white', fontSize: '14', fontWeight: '14' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laborum odio ut a officiis tempore quia nostrum perferendis laboriosam dolores.
                        </Typography>
                        <Button sx={{backgroundColor: '#5ce7ed', mb:2}} variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;