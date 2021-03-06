import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect } from "react-router-dom";
import useAuth from '../../../../../../Final-Project/doctors-portal-clint/src/hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth()
    if (isLoading) {
        return <CircularProgress sx={{ mt: 20 }} />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/dashboard",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );

};

export default AdminRoute;