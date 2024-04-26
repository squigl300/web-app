const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Replace with MongoDB connection string
const db = 'mongodb+srv://<username>:<password>@cluster.mongodb.net/mydb';

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(bodyParser.json());

// Define routes
app.use('/api/clients', require('./routes/clients'));

app.listen(port, () => console.log(`Server running on port ${port}`));
