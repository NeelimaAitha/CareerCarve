const express = require('express');
const app = express();
const mentorRoutes = require('./routes/mentorRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const Mentor = require('./models/Mentor');
const Student = require('./models/Student');
const Booking = require('./models/Booking');

// Middleware
app.use(express.json());

// Database Initialization
Mentor.createTable();
Student.createTable();
Booking.createTable();

// Routes
app.use('/api/mentors', mentorRoutes);
app.use('/api/bookings', bookingRoutes);

module.exports = app;
