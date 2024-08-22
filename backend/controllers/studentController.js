const Student = require('../models/Student');

const createStudent = (req, res) => {
    const { name, availability, area_of_interest } = req.body;
    const student = { name, availability, area_of_interest };

    Student.create(student, (err) => {
        if (err) {
            res.status(500).send("Error creating student");
        } else {
            res.status(201).send("Student created successfully");
        }
    });
};

const getStudents = (req, res) => {
    Student.findAll((err, students) => {
        if (err) {
            res.status(500).send("Error retrieving students");
        } else {
            res.json(students);
        }
    });
};

module.exports = {
    createStudent,
    getStudents
};
