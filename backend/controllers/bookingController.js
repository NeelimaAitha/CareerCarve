const Booking = require('../models/Booking');

const createBooking = (req, res) => {
    const booking = req.body;
    Booking.create(booking, (err) => {
        if (err) {
            res.status(500).send("Error creating booking");
        } else {
            res.status(201).send("Booking created successfully");
        }
    });
};

const getBookingsByMentor = (req, res) => {
    const mentor_id = req.params.mentor_id;
    Booking.findAllByMentor(mentor_id, (err, bookings) => {
        if (err) {
            res.status(500).send("Error retrieving bookings");
        } else {
            res.json(bookings);
        }
    });
};

module.exports = {
    createBooking,
    getBookingsByMentor
};
