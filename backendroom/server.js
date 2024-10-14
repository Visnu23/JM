const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000; 

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/jmr', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('error connecting to MongoDB:', err));

const productRoutes = require('./Routes/ProductRoutes');
app.use('/api/products', productRoutes);

const reservationRoutes = require('./Routes/ReservationRoutes');
app.use('/api/reservations', reservationRoutes);

const userRoutes = require('./Routes/UserRoutes');
app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});