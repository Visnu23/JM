const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

router.post('/add', async (req, res) => {
    try {
        const {
            fullName,
            email,
            phoneNumber,
            roomType,
            numberOfGuests,
            checkInDate,
            checkOutDate,
            agreeToTerms
        } = req.body;

        // Create a new reservation object based on the Reservation schema
        const newReservation = new Reservation({
            fullName,
            email,
            phoneNumber,
            roomType,
            numberOfGuests,
            checkInDate,
            checkOutDate,
            agreeToTerms
        });

        // Save the reservation to the database
        await newReservation.save();

        // Respond with success message
        res.status(201).json({ message: 'Reservation added successfully!' });
    } catch (error) {
        // Handle errors
        res.status(500).json({ error: 'Failed to add reservation' });
    }
});

// Route to fetch all reservations
router.get('/', async (req, res) => {
    try {
        // Fetch all reservations from the database
        const reservations = await Reservation.find();
        
        // Send the reservations as a JSON response
        res.json(reservations);
    } catch (error) {
        // Handle errors
        res.status(500).json({ error: 'Failed to fetch reservations' });
    }
});

module.exports = router;
