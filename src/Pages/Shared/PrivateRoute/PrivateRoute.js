import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect } from "react-router-dom";
import useAuth from '../../../../../../Final-Project/doctors-portal-clint/src/hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    if (isLoading) {
        return <CircularProgress sx={{ mt: 20 }} />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );

};

export default PrivateRoute;