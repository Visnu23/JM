const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
  distanceFromCenter: { type: Number, required: true },
  freeTaxi: { type: Boolean, default: false },
  roomType: { type: String, required: true },
  features: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, default: 7.0 },
  ratingLabel: { type: String, default: "Good" },
  freeCancellation: { type: Boolean, default: true },
  image: { type: String, required: false },
});

module.exports = mongoose.model('Product', productSchema);