import { CircularProgress } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const CheckoutForm = ({ appointment }) => {
    const { price, patientName, _id } = appointment;
    const [error, setError] = useState('')
    const [clintSecret, setClintSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth()
    useEffect(() => {
        axios.post('https://aqueous-shelf-84077.herokuapp.com/create-payment-intent', { price })
            .then(response => {
                console.log(response.data)
                setClintSecret(response.data.clientSecret)
            })
    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        setProcessing(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            setProcessing(false);
            setError(error.message);
            setSuccess('');
        } else {
            setError('');
            console.log(paymentMethod);
        }

        //payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clintSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: user.email
                    },
                },
            },
        );

        if (intentError) {
            setProcessing(false);
            setSuccess('');
            setError(intentError.message);
        } else {
            setError('');
            setSuccess('Your payment was successfully');
            console.log(paymentIntent)
            setProcessing(false);
            //save payment intent to database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }
            const url = `https://aqueous-shelf-84077.herokuapp.com/appointments/${_id}`
            axios.put(url, payment)
                .then(response => {
                    console.log(response.data)
                })
        }

    }
    return (<div>
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {processing ?
                <CircularProgress></CircularProgress>
                :
                <button type="submit" disabled={!stripe || success}>
                    Pay {price}€
                </button>}
        </form>
        {
            error && <p style={{ color: 'red' }}>{error}</p>
        }
        {
            success && <p style={{ color: 'green' }}>{success}</p>
        }
    </div>
    );
};

export default CheckoutForm;