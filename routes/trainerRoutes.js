const express = require('express');
const trainerController = require('../controllers/trainerController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/profile', authMiddleware, trainerController.getTrainerProfile);
router.put('/profile', authMiddleware, trainerController.updateTrainerProfile);

module.exports = router;