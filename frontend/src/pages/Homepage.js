import React from 'react';
import MentorList from '../components/MentorList';
import BookingForm from '../components/BookingForm';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to CareerCarve Scheduler</h1>
            <BookingForm />
            <MentorList />
        </div>
    );
};

export default HomePage;
