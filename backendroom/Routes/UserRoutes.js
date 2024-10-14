const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Route to add a new user
router.post('/add', async (req, res) => {
    try {
        const { username, email, password, isAdmin } = req.body;

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword, // Store the hashed password
            isAdmin,
        });

        await newUser.save();

        res.status(201).json({ message: 'User added successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add user' });
    }
});

// Route to fetch all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// Route to login a user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare the password
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Create a JWT token
        const token = jwt.sign(
            { userId: user._id, isAdmin: user.isAdmin }, // Include isAdmin in the token payload
            'your_jwt_secret',
            { expiresIn: '1h' }
        );

        // Return response including whether the user is an admin
        res.status(200).json({
            message: 'Login successful',
            token,
            isAdmin: user.isAdmin
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Route to verify the token
router.get('/verifyToken', (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Invalid token' });

        // Return whether the user is an admin from the token
        res.status(200).json({
            message: 'Token is valid',
            isAdmin: decoded.isAdmin
        });
    });
});

module.exports = router;
