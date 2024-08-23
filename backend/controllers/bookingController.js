const bookingModel = require('../models/Booking');

// Get all bookings
const getAllBookings = (req, res) => {
    bookingModel.getAllBookings((err, bookings) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(bookings);
        }
    });
};

// Create a new booking
const addBooking = (req, res) => {
    const booking = req.body;
    bookingModel.addBooking(booking, (err, id) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ id });
        }
    });
};

// Get a booking by ID
const getBookingById = (req, res) => {
    const { id } = req.params;
    bookingModel.getBookingById(id, (err, booking) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (booking) {
            res.json(booking);
        } else {
            res.status(404).json({ message: 'Booking not found' });
        }
    });
};

// Delete a booking by ID
const deleteBooking = (req, res) => {
    const { id } = req.params;
    bookingModel.deleteBooking(id, (err) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(204).end();
        }
    });
};

module.exports = {
    getAllBookings,
    addBooking,
    getBookingById,
    deleteBooking
};
