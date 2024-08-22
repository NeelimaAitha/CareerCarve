import React from 'react';

const PaymentPage = ({ bookingDetails }) => {
    const { duration, isPremium } = bookingDetails;
    const cost = duration === 30 ? 2000 : duration === 45 ? 3000 : 4000;
    const totalCost = isPremium ? cost + 1000 : cost;

    return (
        <div>
            <h2>Payment Page</h2>
            <p>Duration: {duration} minutes</p>
            <p>Premium Service: {isPremium ? 'Yes' : 'No'}</p>
            <p>Total Cost: {totalCost} INR</p>
            <button onClick={() => alert('Payment Processed!')}>Pay Now</button>
        </div>
    );
};

export default PaymentPage;
