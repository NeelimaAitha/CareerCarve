const API_BASE_URL = 'http://localhost:3000/api';

export const getMentors = async () => {
    const response = await fetch(`${API_BASE_URL}/mentors`);
    return response.json();
};

export const getMentorsByExpertise = async (expertise) => {
    const response = await fetch(`${API_BASE_URL}/mentors/expertise/${expertise}`);
    return response.json();
};

export const createBooking = async (booking) => {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(booking)
    });
    return response.json();
};
