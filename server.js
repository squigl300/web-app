const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const trainerRoutes = require('./routes/trainerRoutes');
const clientRoutes = require('./routes/clientRoutes');
const workoutRoutes = require('./routes/workoutRoutes');
const postRoutes = require('./routes/postRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/trainers', trainerRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/notifications', notificationRoutes);

// The "catchall" handler: for any request that doesn't
// match one above, send back the main `index.html` file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});