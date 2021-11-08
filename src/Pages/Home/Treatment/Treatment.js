import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import treatment from '../../../images/treatment.png'

const Treatment = () => {
    return (
        <Container sx={{mt:5}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img height="450px" width="300px" src={treatment} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography variant='h4' component='h4' sx={{ fontWeight: 500, mt: 5 }}>
                            Exceptional Dental <br />Care, on Your Terms
                        </Typography>
                        <Typography variant='subtitle1' component='h4' sx={{ mt: 3 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus, ut ullam delectus officia commodi provident corrupti pariatur ipsum laboriosam rem quae neque autem dicta officiis sed esse inventore doloribus itaque ab repellendus a ipsam dignissimos. Nulla odio sint, commodi optio dolorum facilis. Fugit quasi, fugiat quia, inventore esse nobis velit iure nulla voluptatibus, aperiam doloribus ab minima quo possimus voluptates. Ullam, voluptatibus. Optio assumenda tenetur rem cum a iste error veritatis.
                        </Typography>
                        <Button sx={{ backgroundColor: '#5ce7ed', mt: 3 }} variant="contained">Learn More</Button>
                    </Box>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Treatment;