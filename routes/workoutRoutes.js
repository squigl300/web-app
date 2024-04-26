const express = require('express');
const workoutController = require('../controllers/workoutController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/clients/:clientId', authMiddleware, workoutController.getClientWorkouts);
router.post('/clients/:clientId', authMiddleware, workoutController.assignWorkoutToClient);

module.exports = router;