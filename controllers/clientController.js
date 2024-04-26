const { runQuery } = require('../models/db');

// Get all clients for a trainer
async function getClients(req, res) {
  const trainerId = req.userId;

  try {
    const clients = await runQuery(
      `SELECT id, firstName, lastName, email, membershipType, dob
       FROM members WHERE trainerId = ?`,
      [trainerId]
    );

    res.json(clients);
  } catch (error) {
    console.error('Error getting clients:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Get a specific client
async function getClient(req, res) {
  const clientId = req.params.clientId;

  try {
    const client = await runQuery(
      `SELECT id, firstName, lastName, email, membershipType, dob
       FROM members WHERE id = ?`,
      [clientId]
    );

    if (client.length === 0) {
      return res.status(404).json({ error: 'Client not found' });
    }

    res.json(client[0]);
  } catch (error) {
    console.error('Error getting client:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getClients,
  getClient,
};