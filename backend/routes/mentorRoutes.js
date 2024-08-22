const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController');

router.get('/', mentorController.getMentors);
router.get('/expertise/:expertise', mentorController.getMentorsByExpertise);

module.exports = router;
