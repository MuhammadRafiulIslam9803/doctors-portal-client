import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_pk);
const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { treatment, price, appointmentDate, slot } = booking;
    return (
        <div className="max-w-md mx-auto bg-gray-50 rounded-lg shadow-md p-8">
            <h3 className="text-3xl font-semibold text-primary text-center mb-6">Payment Details</h3>
            <p className="text-lg mb-6 text-center">Amount due: <strong className="text-teal-500">${price}</strong></p>
            <div className="w-full max-w-xs mx-auto">
                <Elements stripe={stripePromise}>
                    <CheckOutForm booking={booking} />
                </Elements>
            </div>
        </div>

    );
};

export default Payment;