const { runQuery } = require('../models/db');

// Get all posts for a trainer's community
async function getPosts(req, res) {
  const trainerId = req.userId;

  try {
    const posts = await runQuery(
      `SELECT p.postId, p.postTitle, p.postDescription, p.tag, p.mediaUrl, p.likesCount, p.commentCount, p.creationTime
       FROM Posts p
       JOIN Trainers t ON p.communityId = t.communityId
       WHERE t.id = ?`,
      [trainerId]
    );

    res.json(posts);
  } catch (error) {
    console.error('Error getting posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Create a new post
async function createPost(req, res) {
  const trainerId = req.userId;
  const { title, description, tag, mediaUrl } = req.body;

  try {
    const community = await runQuery(
      'SELECT communityId FROM Trainers WHERE id = ?',
      [trainerId]
    );

    const communityId = community[0].communityId;

    await runQuery(
      `INSERT INTO Posts (postTitle, postDescription, tag, mediaUrl, postersId, communityId)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [title, description, tag, mediaUrl, trainerId, communityId]
    );

    res.sendStatus(201);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getPosts,
  createPost,
};