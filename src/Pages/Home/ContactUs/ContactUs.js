import { Container, TextareaAutosize, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const contactUs = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74, 0.85)',
    backgroundBlendMode: 'darken',
    marginTop: '120px',
}
const ContactUs = () => {
    const handleContactUs = e => {
        e.preventDefault();
        alert('ok')
    }
    return (
        <Container style={contactUs} sx={{ py: 5, my: 5 }}>
            <Box>
                <Typography variant='p' component='p' sx={{ color: '#5ce7ed', fontWeight: 'bold', mb: 1 }}>
                    CONTACT US
                </Typography>
                <Typography variant='h5' component='h5' sx={{ fontSize: '35px', color: 'white' }}>
                    Always Contact With Us
                </Typography>
                <form onSubmit={handleContactUs}>
                    <TextField
                        sx={{ width: '90%', m: 1, backgroundColor: 'background.paper' }}
                        id="email"
                        placeholder="Your Email"
                        size="small"
                    />
                    <TextField
                        sx={{ width: '90%', m: 1, backgroundColor: 'background.paper' }}
                        id="subject"
                        placeholder="Subject"
                        size="small"
                    />
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={8}
                        placeholder="Your Message"
                        style={{ width: '90%' }}
                    /> <br />
                    <Button type="submit" sx={{ backgroundColor: '#5ce7ed', mt: 2 }}
                        variant="contained">
                        Submit
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default ContactUs;