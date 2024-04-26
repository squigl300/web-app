const { runQuery } = require('../models/db');

// Get trainer profile
async function getTrainerProfile(req, res) {
  const trainerId = req.userId;

  try {
    const trainer = await runQuery(
      'SELECT firstName, lastName, email, membershipType FROM trainers WHERE id = ?',
      [trainerId]
    );

    if (trainer.length === 0) {
      return res.status(404).json({ error: 'Trainer not found' });
    }

    res.json(trainer[0]);
  } catch (error) {
    console.error('Error getting trainer profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Update trainer profile
async function updateTrainerProfile(req, res) {
  const trainerId = req.userId;
  const { firstName, lastName, email } = req.body;

  try {
    await runQuery(
      'UPDATE trainers SET firstName = ?, lastName = ?, email = ? WHERE id = ?',
      [firstName, lastName, email, trainerId]
    );

    const updatedTrainer = await runQuery(
      'SELECT firstName, lastName, email, membershipType FROM trainers WHERE id = ?',
      [trainerId]
    );

    res.json(updatedTrainer[0]);
  } catch (error) {
    console.error('Error updating trainer profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getTrainerProfile,
  updateTrainerProfile,
};