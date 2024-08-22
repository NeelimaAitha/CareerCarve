import React, { useState, useEffect } from 'react';
import { getMentorsByExpertise } from '../api';
import MentorProfile from '../components/MentorProfile';

const MentorPage = () => {
    const [expertise, setExpertise] = useState('');
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        if (expertise) {
            getMentorsByExpertise(expertise).then((data) => {
                setMentors(data);
            });
        }
    }, [expertise]);

    return (
        <div>
            <h1>Mentors</h1>
            <input
                type="text"
                placeholder="Enter area of expertise"
                value={expertise}
                onChange={(e) => setExpertise(e.target.value)}
            />
            <div>
                {mentors.map((mentor) => (
                    <MentorProfile key={mentor.id} mentor={mentor} />
                ))}
            </div>
        </div>
    );
};

export default MentorPage;
