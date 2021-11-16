import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JvrX8JUya7V5qRvYtBTwV4yUqcwF0IFX5sZNJ3NOpMKlVWkEw6pfMRDNPPjobIra1PJAxGaVM2ARWdpC4PYDtPO00OIomlokU')

const Payment = () => {

    const { appointmentId } = useParams()
    const [appointment, setAppointment] = useState({})
    useEffect(() => {
        axios.get(`https://aqueous-shelf-84077.herokuapp.com/appointments/${appointmentId}`)
            .then((response) =>
                setAppointment(response.data))
    }, [appointmentId])
    return (
        <div>
            <h1>Please pay for the following appointments</h1>
            <h4>Name: {appointment.serviceType}</h4>
            <p>Price: {appointment.price}€</p>
            {appointment.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}

                />
            </Elements>}
        </div>
    );
};

export default Payment;