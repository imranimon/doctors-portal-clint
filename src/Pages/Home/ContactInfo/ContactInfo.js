import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { Box } from '@mui/system';


const ContactInfo = () => {
    return (
        <Container sx={{ mb: 5, mt: -12 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Paper variant="outlined" sx={{
                        p: 4, display: 'flex',
                        height: '100px', backgroundColor: '#5ce7ed', color: 'white'
                    }}>
                        <AccessTimeOutlinedIcon sx={{ fontSize: '100px' }} />
                        <Box sx={{ ml: 2, textAlign: 'left' }}>
                            <Typography variant='h5' component="h5" sx={{ fontWeight: 500 }}>
                                Opening Hours
                            </Typography>
                            <Typography variant='subtitle1' component="h5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper variant="outlined" sx={{
                        p: 4, display: 'flex', height: '100px',
                        backgroundColor: '#172d51', color: 'white'
                    }}>
                        <LocationOnOutlinedIcon sx={{ fontSize: '100px' }} />
                        <Box sx={{ ml: 2, textAlign: 'left' }}>
                            <Typography variant='h5' component="h5" sx={{ fontWeight: 500 }}>
                                Visit our location
                            </Typography>
                            <Typography variant='subtitle1' component="h5">
                                Brooklyn, NY 10036, US
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper variant="outlined" sx={{
                        p: 4, display: 'flex',
                        height: '100px', backgroundColor: '#5ce7ed', color: 'white'
                    }}>
                        <PhoneInTalkOutlinedIcon sx={{ fontSize: '100px' }} />
                        <Box sx={{ ml: 2, textAlign: 'left' }}>
                            <Typography variant='h5' component="h5" sx={{ fontWeight: 500 }}>
                                Contact us now
                            </Typography>
                            <Typography variant='subtitle1' component="h5">
                                +000 123 456789
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid >
        </Container >
    );
};

export default ContactInfo;