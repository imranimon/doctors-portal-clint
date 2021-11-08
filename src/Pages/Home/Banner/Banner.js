import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container, Box } from '@mui/material';
const bannerBg = {
    background: `url(${bg})`,

}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: '450px',
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{...verticalCenter, textAlign: 'left', }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h4" sx={{fontWeight:500}}>
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: 13, my:3, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus impedit doloremque aliquid nemo asperiores quibusdam modi praesentium maiores quos.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5ce7ed' }}>
                            Get Appointment
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;