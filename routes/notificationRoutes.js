const express = require('express');
const notificationController = require('../controllers/notificationController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, notificationController.getNotifications);

module.exports = router;