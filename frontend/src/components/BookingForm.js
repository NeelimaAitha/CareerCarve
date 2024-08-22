import React, { useState, useEffect } from 'react';
import { getMentorsByExpertise, createBooking } from '../api';

const BookingForm = () => {
    const [expertise, setExpertise] = useState('');
    const [duration, setDuration] = useState(30);
    const [mentors, setMentors] = useState([]);
    const [selectedMentor, setSelectedMentor] = useState(null);

    useEffect(() => {
        if (expertise) {
            getMentorsByExpertise(expertise).then((data) => {
                setMentors(data);
            });
        }
    }, [expertise]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedMentor) {
            const booking = {
                mentor_id: selectedMentor.id,
                student_id: 1, // Assuming the student is logged in and has ID 1
                start_time: new Date().toISOString(), // This should be selected by the student
                duration
            };
            await createBooking(booking);
            alert('Booking created successfully!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Area of Interest:</label>
                <input
                    type="text"
                    value={expertise}
                    onChange={(e) => setExpertise(e.target.value)}
                />
            </div>
            <div>
                <label>Mentor:</label>
                <select onChange={(e) => setSelectedMentor(JSON.parse(e.target.value))}>
                    <option>Select a Mentor</option>
                    {mentors.map((mentor) => (
                        <option key={mentor.id} value={JSON.stringify(mentor)}>
                            {mentor.name} - {mentor.areas_of_expertise}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Duration (minutes):</label>
                <select value={duration} onChange={(e) => setDuration(Number(e.target.value))}>
                    <option value={30}>30 minutes</option>
                    <option value={45}>45 minutes</option>
                    <option value={60}>60 minutes</option>
                </select>
            </div>
            <button type="submit">Book Now</button>
        </form>
    );
};

export default BookingForm;
