import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import person1 from '../../../images/people-1.png';
import person2 from '../../../images/people-2.png';
import person3 from '../../../images/people-3.png';

const ClintReview = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Grid>
                <Typography variant='p' component='p' sx={{ color: '#5ce7ed', textAlign: 'left', fontWeight: 'bold', mb: 2, }}>
                    TESTIMONIAL
                </Typography>
                <Typography variant='h5' component='h5' sx={{ textAlign: 'left', fontSize: '35px' }}>
                    What's Our Patients <br />Says
                </Typography>
            </Grid>
            <Grid container spacing={2} sx={{ my: 5 }}>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3}>
                        <Typography variant="body" component="p" sx={{ p: 3, fontSize: '20px', color: 'gray', mb: 3 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium recusandae officiis porro delectus aliquam dignissimos. Quae itaque excepturi suscipit porro veniam natus, ipsam quidem aspernatur, ullam, non fugiat rem.
                        </Typography>
                        <Grid sx={{ display: 'flex', px: 5, pb: 3 }}>
                            <img src={person1} alt="" />
                            <Grid sx={{ mt: 2, ml: 3 }}>
                                <Typography variant='p' component='p' sx={{ color: '#5ce7ed', textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
                                    Winson Herry
                                </Typography>
                                <Typography variant='p' component='p' sx={{ textAlign: 'left', color: 'gray' }}>
                                    California
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3}>
                        <Typography variant="body" component="p" sx={{ p: 3, fontSize: '20px', color: 'gray', mb: 3 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium recusandae officiis porro delectus aliquam dignissimos. Quae itaque excepturi suscipit porro veniam natus, ipsam quidem aspernatur, ullam, non fugiat rem.
                        </Typography>
                        <Grid sx={{ display: 'flex', px: 5, pb: 3 }}>
                            <img src={person2} alt="" />
                            <Grid sx={{ mt: 2, ml: 3 }}>
                                <Typography variant='p' component='p' sx={{ color: '#5ce7ed', textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
                                    Winson Herry
                                </Typography>
                                <Typography variant='p' component='p' sx={{ textAlign: 'left', color: 'gray' }}>
                                    California
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3}>
                        <Typography variant="body" component="p" sx={{ p: 3, fontSize: '20px', color: 'gray', mb: 3 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium recusandae officiis porro delectus aliquam dignissimos. Quae itaque excepturi suscipit porro veniam natus, ipsam quidem aspernatur, ullam, non fugiat rem.
                        </Typography>
                        <Grid sx={{ display: 'flex', px: 5, pb: 3 }}>
                            <img src={person3} alt="" />
                            <Grid sx={{ mt: 2, ml: 3 }}>
                                <Typography variant='p' component='p' sx={{ color: '#5ce7ed', textAlign: 'left', fontWeight: 'bold', mb: 1 }}>
                                    Winson Herry
                                </Typography>
                                <Typography variant='p' component='p' sx={{ textAlign: 'left', color: 'gray' }}>
                                    California
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid >
        </Container >
    );
};

export default ClintReview;