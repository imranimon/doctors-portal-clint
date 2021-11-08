import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import login from '../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { logIn, setAuthError, authError, saveUser, setIsLoading, isLoading, googleSignIn } = useAuth();
    const history = useHistory()
    const location = useLocation();
    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)

    }
    const handleLogin = e => {
        e.preventDefault();
        logIn(loginData.email, loginData.password)
            .then(result => {
                const destination = location?.state?.from || '/';
                history.push(destination)
                setAuthError('')
            })
            .catch(err => { setAuthError(err.message) })
            .finally(() => setIsLoading(false))
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
                        Login
                    </Typography>
                    {!isLoading &&
                        <form onSubmit={handleLogin}>
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
                            <br />
                            <Button type="submit" sx={{ backgroundColor: '#5ce7ed', mt: 2, width: '75%' }}
                                variant="contained">
                                Sign In
                            </Button>
                            <Button onClick={handleGoogleSignIn} sx={{ backgroundColor: '#5ce7ed', mt: 2, width: '75%' }}
                                variant="contained">
                                Google SignIn
                            </Button>
                            <NavLink to='/register' style={{ textDecoration: 'none' }}>
                                <Button sx={{ mt: 2, width: '75%', textDecoration: 'none' }}
                                    variant="text">
                                    New User ? Register
                                </Button>
                            </NavLink>
                        </form>
                    }
                    {
                        isLoading && <CircularProgress sx={{ mt: 20 }} color="inherit" />
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

export default Login;