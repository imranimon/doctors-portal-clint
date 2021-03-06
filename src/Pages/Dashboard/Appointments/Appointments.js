import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Appointments = ({ date }) => {
    const { user, token } = useAuth()
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        axios.get(`https://aqueous-shelf-84077.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString("de-DE")}`, { headers: { "authorization": `Bearer ${token}` } })
            .then(res => {
                setAppointments(res.data)
            })
            .catch(err => console.log(err))
    }, [date, user?.email, token])
    return (
        <div>
            <h2>Appointments</h2>
            <TableContainer component={Paper}>
                <Table aria-label="Appointments Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Patient Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Service Name</TableCell>
                            <TableCell align="right">Payment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.serviceType}</TableCell>
                                <TableCell align="right">{row.payment ? 'Paid' :
                                    <Link to={`/dashboard/payment/${row._id}`}>
                                        <button
                                            style={{
                                                backgroundColor: '#5ce7ed',
                                                border: 'none',
                                                color: '#fff',
                                                height: '30px',
                                                width: '40px',
                                                borderRadius: '5px',
                                                cursor: 'pointer'
                                            }}>
                                            Pay
                                        </button>
                                    </Link>
                                }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;