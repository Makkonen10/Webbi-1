const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the "public" directory

// Connect to SQLite database
const db = new sqlite3.Database('mydatabase.db', (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to SQLite database');
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT
        )`);
    }
});

// Route to add a new user via HTTP POST
app.post('/add-user', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    const sql = `INSERT INTO users (name, email) VALUES (?, ?)`;
    db.run(sql, [name, email], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'User added', userId: this.lastID });
        }
    });
});

// Route to fetch all users
app.get('/users', (req, res) => {
    const sql = `SELECT * FROM users`;
    
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});


// Route to update a user by ID
app.put('/users/:id', (req, res) => {
    const { name, email } = req.body;
    const userId = req.params.id;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    const sql = `UPDATE users SET name = ?, email = ? WHERE id = ?`;
    db.run(sql, [name, email, userId], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (this.changes === 0) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json({ message: 'User updated successfully' });
        }
    });
});


// Route to delete a user by ID
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;

    const sql = `DELETE FROM users WHERE id = ?`;
    db.run(sql, [userId], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (this.changes === 0) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json({ message: 'User deleted successfully' });
        }
    });
});


// Start the Express server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
