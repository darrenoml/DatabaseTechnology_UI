const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'your-username',
    password: 'your-password',
    database: 'your-database',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(sql, [name, email], (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Database error' });
        } else {
            res.json({ message: 'Data submitted successfully!' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
