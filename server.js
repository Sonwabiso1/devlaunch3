const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
const port = 5000; // You can change this port if needed

// Middleware
app.use(cors());
app.use(bodyParser.json());

// File to store user data
const dataFile = './users.json';

// Utility to read/write to JSON file
const readUsers = () => {
    if (fs.existsSync(dataFile)) {
        const data = fs.readFileSync(dataFile);
        return JSON.parse(data);
    }
    return [];
};

const writeUsers = (users) => {
    fs.writeFileSync(dataFile, JSON.stringify(users, null, 2));
};

// Register user
app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Check if user already exists
    const users = readUsers();
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Add new user to the JSON file
    const newUser = { name, email, password: hashedPassword };
    users.push(newUser);
    writeUsers(users);

    res.status(201).json({ message: 'User registered successfully' });
});

// Login user
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    // Find user in the JSON file
    const users = readUsers();
    const user = users.find((user) => user.email === email);

    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }

    // Compare the entered password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: `Welcome back, ${user.name}!` });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
