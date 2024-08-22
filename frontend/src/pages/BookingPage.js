import React from 'react';
import PaymentPage from '../components/PaymentPage';

const BookingPage = () => {
    const bookingDetails = {
        duration: 45,
        isPremium: true,
    };

    return (
        <div>
            <h1>Your Booking</h1>
            <PaymentPage bookingDetails={bookingDetails} />
        </div>
    );
};

export default BookingPage;
