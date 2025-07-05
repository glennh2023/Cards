const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/button-game', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Score Schema
const scoreSchema = new mongoose.Schema({
  score: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

const Score = mongoose.model('Score', scoreSchema);

// API Routes
app.get('/api/score', async (req, res) => {
  try {
    let score = await Score.findOne().sort({ createdAt: -1 });
    if (!score) {
      score = new Score({ score: 0 });
      await score.save();
    }
    res.json({ score: score.score });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get score' });
  }
});

app.post('/api/score', async (req, res) => {
  try {
    let score = await Score.findOne().sort({ createdAt: -1 });
    if (!score) {
      score = new Score({ score: 1 });
    } else {
      score.score += 1;
    }
    await score.save();
    res.json({ score: score.score });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update score' });
  }
});

// Serve static files from React app
const buildPath = path.join(__dirname, '../client/build');
app.use(express.static(buildPath));

// Fallback to React for any unknown route
app.get('*', (req, res) => {
  const indexPath = path.join(buildPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error('Error serving index.html:', err);
      res.status(500).send('Frontend not available. Please build the React app first.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 