const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  roomType: { 
    type: String, 
    enum: ['Single', 'Double', 'Suite'],
    required: true 
  },
  numberOfGuests: { type: Number, required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  agreeToTerms: { type: Boolean, required: true }
});

module.exports = mongoose.model('Reservation', reservationSchema);
