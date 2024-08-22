import React, { useEffect, useState } from 'react';
import { getMentors } from '../api';

const MentorList = () => {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        getMentors().then((data) => {
            setMentors(data);
        });
    }, []);

    return (
        <div>
            <h2>Available Mentors</h2>
            <ul>
                {mentors.map((mentor) => (
                    <li key={mentor.id}>
                        {mentor.name} - {mentor.areas_of_expertise}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MentorList;
