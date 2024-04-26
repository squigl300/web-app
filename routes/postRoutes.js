const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, postController.getPosts);
router.post('/', authMiddleware, postController.createPost);

module.exports = router;