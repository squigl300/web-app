const { runQuery } = require('../models/db');

// Get all notifications for a trainer
async function getNotifications(req, res) {
  const trainerId = req.userId;

  try {
    const notifications = await runQuery(
      'SELECT id, message, timestamp FROM Notifications WHERE trainerId = ?',
      [trainerId]
    );

    res.json(notifications);
  } catch (error) {
    console.error('Error getting notifications:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getNotifications,
};