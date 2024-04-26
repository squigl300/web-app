const { runQuery } = require('../models/db');

// Get all workouts for a client
async function getClientWorkouts(req, res) {
  const clientId = req.params.clientId;

  try {
    const workouts = await runQuery(
      `SELECT id, exerciseName, description, timestamp, exerciseComplete AS completed
       FROM Exercise WHERE userId = ?`,
      [clientId]
    );

    res.json(workouts);
  } catch (error) {
    console.error('Error getting client workouts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Assign a workout to a client
async function assignWorkoutToClient(req, res) {
  const clientId = req.params.clientId;
  const { exerciseName, description } = req.body;

  try {
    const result = await runQuery(
      'INSERT INTO Exercise (userId, exerciseName, description) VALUES (?, ?, ?)',
      [clientId, exerciseName, description]
    );

    const assignedWorkout = await runQuery(
      `SELECT id, exerciseName, description, timestamp, exerciseComplete AS completed
       FROM Exercise WHERE id = ?`,
      [result.lastID]
    );

    res.status(201).json(assignedWorkout[0]);
  } catch (error) {
    console.error('Error assigning workout to client:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getClientWorkouts,
  assignWorkoutToClient,
};