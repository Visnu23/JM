const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.post('/add', async (req, res) => {
    try {
        const { name, distanceFromCenter, freeTaxi, roomType, features, price, rating, ratingLabel, freeCancellation, image } = req.body;
        const newProduct = new Product({name, distanceFromCenter, freeTaxi, roomType, features, price, rating, ratingLabel, freeCancellation, image});
        await newProduct.save();
        res.status(201).json({ message: 'Room added successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add Room' });
    }
});

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch room' });
    }
});

module.exports = router;