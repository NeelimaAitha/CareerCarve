const Mentor = require('../models/Mentor');

const getMentors = (req, res) => {
    Mentor.findAll((err, mentors) => {
        if (err) {
            res.status(500).send("Error retrieving mentors");
        } else {
            res.json(mentors);
        }
    });
};

const getMentorsByExpertise = (req, res) => {
    const expertise = req.params.expertise;
    Mentor.findByExpertise(expertise, (err, mentors) => {
        if (err) {
            res.status(500).send("Error retrieving mentors");
        } else {
            res.json(mentors);
        }
    });
};

module.exports = {
    getMentors,
    getMentorsByExpertise
};
