const { runQuery } = require('../models/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Login controller
async function login(req, res) {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await runQuery('SELECT * FROM trainers WHERE email = ?', [email]);

    if (user.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user[0].password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user[0].id }, 'your_secret_key');

    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  login,
};