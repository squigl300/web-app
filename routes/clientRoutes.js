const express = require('express');
const clientController = require('../controllers/clientController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, clientController.getClients);
router.get('/:clientId', authMiddleware, clientController.getClient);

module.exports = router;