import React from 'react';

const MentorProfile = ({ mentor }) => {
    return (
        <div>
            <h2>{mentor.name}</h2>
            <p>Expertise: {mentor.areas_of_expertise}</p>
            <p>Availability: {mentor.availability}</p>
            <p>Premium: {mentor.is_premium ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default MentorProfile;
