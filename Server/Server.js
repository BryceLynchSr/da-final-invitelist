const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require ('path');
const {MongoClient} = require ('mongodb');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema and model
const GuestSchema = new mongoose.Schema({
  name: String,
  partyOf: Number,
  allergies: String,
});

const Guest = mongoose.model('Guest', GuestSchema);

// API endpoint to fetch data
app.get('/api/guests', async (req, res) => {
  try {
    const guests = await Guest.find();
    res.json(guests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/guests', async (req, res) => {
    try {
      const newGuest = new Guest(req.body);
      const savedGuest = await newGuest.save();
      res.status(201).json(savedGuest);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





