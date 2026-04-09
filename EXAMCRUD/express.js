
    // faculty_api.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const DB_URI = 'mongodb://localhost:27017/faculty_db';

// Middleware to parse JSON bodies
app.use(express.json());

// --- 1. Mongoose Setup ---
mongoose.connect(DB_URI)
    .then(() => console.log('Faculty MongoDB Connected!'))
    .catch(err => console.error('Connection error:', err));

// Faculty Schema and Model
const FacultySchema = new mongoose.Schema({
    name: String,
    department: String,
    hireDate: { type: Date, default: Date.now }
});
const Faculty = mongoose.model('Faculty', FacultySchema);

// --- 2. CRUD Routes (RESTful API) ---

// C: Create (POST /api/faculty)
app.post('/api/faculty', async (req, res) => {
    try {
        const newFaculty = new Faculty(req.body);
        const savedFaculty = await newFaculty.save();
        res.status(201).json(savedFaculty);
    } catch (err) {  
        res.status(400).json({ error: err.message });
    }
});

// R: Read All (GET /api/faculty)
app.get('/api/faculty', async (req, res) => {
    try {
        const faculties = await Faculty.find();
        res.json(faculties);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// R: Read One (GET /api/faculty/:id)
app.get('/api/faculty/:id', async (req, res) => {
    try {
        const faculty = await Faculty.findById(req.params.id);
        if (!faculty) return res.status(404).send('Faculty not found.');
        res.json(faculty);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

// U: Update (PUT /api/faculty/:id)
app.put('/api/faculty/:id', async (req, res) => {
    try {
        const updatedFaculty = await Faculty.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        );
        if (!updatedFaculty) return res.status(404).send('Faculty not found.');
        res.json(updatedFaculty);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.delete('/api/faculty/:id', async (req, res) => {
    try {
        const result = await Faculty.findByIdAndDelete(req.params.id);
        if (!result) return res.status(404).send('Faculty not found.');
        res.status(204).send(); // 204 No Content for successful deletion
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(4000, () => {
    console.log(`Faculty API running`);
});



