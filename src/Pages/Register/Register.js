import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import login from '../../images/login.png'

const Register = () => {
    const [registerData, setRegisterData] = useState({})
    const [userCreated, setUserCreated] = useState(false);
    const { registerUser, setIsLoading, setUserName, saveUser, logOut, isLoading, googleSignIn, setAuthError, authError } = useAuth()
    const history = useHistory()
    const location = useLocation();
    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newRegisterData = { ...registerData }
        newRegisterData[field] = value;
        setRegisterData(newRegisterData)

    }
    const handleRegistration = e => {
        e.preventDefault();
        if (registerData.password !== registerData.confirmPassword) {
            alert('Password did not match')
            return
        }
        registerUser(registerData.email, registerData.password)
            .then(result => {
                setUserName(registerData.name)
                    .then(() => {
                        saveUser(registerData.email, registerData.name, 'POST')
                        setUserCreated(true);
                        setAuthError('')
                    }).catch((error) => {
                        setAuthError(error.message);
                    });
                logOut()
                    .then(() => {
                        history.replace('/login')
                    })
                    .catch((error) => {
                        setAuthError(error.message);
                    })
            })
            .catch(err => {
                setUserCreated(false);
                setAuthError(err.message)
            })
            .finally(() => {
                setIsLoading(false)
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                saveUser(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || '/';
                history.push(destination)
                setAuthError('')
            })
            .catch(err => { setAuthError(err.message) })
            .finally(() => setIsLoading(false))
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 20 }}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading &&
                        <form onSubmit={handleRegistration}>
                            <TextField sx={{ width: '75%' }}
                                id="name" label="Your Name"
                                name="name"
                                type='text'
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField sx={{ width: '75%' }}
                                id="email" label="Your Email"
                                name="email"
                                type='email'
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField sx={{ width: '75%' }}
                                type='password' id="password"
                                name="password"
                                onChange={handleOnChange}
                                label="Password" variant="standard" />
                            <TextField sx={{ width: '75%' }}
                                type='password' id="confirmPassword"
                                name="confirmPassword"
                                onChange={handleOnChange}
                                label="Confirm Password" variant="standard" />
                            <br />
                            <Button type="submit" sx={{ backgroundColor: '#5ce7ed', mt: 2, width: '75%' }}
                                variant="contained">
                                Register
                            </Button>
                            <Button onClick={handleGoogleSignIn} sx={{ backgroundColor: '#5ce7ed', mt: 2, width: '75%' }}
                                variant="contained">
                                Google SignIn
                            </Button>
                            <NavLink to='/login' style={{ textDecoration: 'none' }}>
                                <Button sx={{ mt: 2, width: '75%', textDecoration: 'none' }}
                                    variant="text">
                                    Already Registered ? Please Sign In
                                </Button>
                            </NavLink>
                        </form>
                    }
                    {
                        isLoading && <CircularProgress sx={{ mt: 20 }} color="inherit" />
                    }
                    {
                        userCreated && <Alert severity="success">User Created Successfully</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6} sx={{ mt: 2 }}>
                    <img width="100%" src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;