import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut, setIsLoading } = useAuth()
    const history = useHistory()
    const handleLogout = () => {
        logOut().then(() => {
            history.push('/')
        }).catch(err => {
            console.log(err)
        }).finally(() => setIsLoading(false))
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#5ce7ed' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                            <Button color="inherit">
                                <Typography variant="h6">
                                    Doctor's Portal
                                </Typography>
                            </Button>
                        </Link>
                        <Link to='/appointment' style={{ textDecoration: 'none', color: 'white' }}>
                            <Button color="inherit">Appointment</Button>
                        </Link>
                        {user?.email &&
                            <NavLink to='/dashboard' style={{ textDecoration: 'none', color: 'white' }}>
                                <Button color="inherit">Dashboard</Button>
                            </NavLink>
                        }
                    </Box>
                    {
                        user?.email ?
                            <Box>
                                <Button onClick={handleLogout} color="inherit">Logout</Button>
                                <span>{user.displayName}</span>
                            </Box>
                            :
                            <NavLink to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;