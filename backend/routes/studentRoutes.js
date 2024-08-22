const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Route to create a new student
router.post('/', studentController.createStudent);

// Route to get all students
router.get('/', studentController.getStudents);

module.exports = router;
