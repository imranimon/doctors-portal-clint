import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from './Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Typography from '@mui/material/Typography';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate qui rem debitis voluptatem voluptates laboriosam tempora nobis perferendis fugit harum.',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate qui rem debitis voluptatem voluptates laboriosam tempora nobis perferendis fugit harum.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate qui rem debitis voluptatem voluptates laboriosam tempora nobis perferendis fugit harum.',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1}}>
            <Container>
                <Typography sx={{ fontWeight: 600, color: '#5ce7ed' }} variant="h6" component="div">
                    Our Services
                </Typography>
                <Typography sx={{ fontWeight: 600, mt: 2, mb:5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;