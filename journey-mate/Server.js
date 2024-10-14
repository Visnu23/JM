// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const port = process.env.PORT || 3000;

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true,
//     unique: true
//   }
// });

// const User = mongoose.model('User', userSchema);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// mongoose.connect('mongodb://localhost:27017/username', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB database!'))
//   .catch(error => console.error('MongoDB connection error:', error));

// // Handle form submission
// app.post('/submit', async (req, res) => {
//   console.log('Received POST request to /submit');
//   try {
//     const username = req.body.username;
//     const email = req.body.email;
//     const password = req.body.password;
//     console.log('Username:', username);
//     console.log('Email:', email);
//     console.log('Password:',password);
//     const user = new User({ username, email, password});
//     await user.save();
//     console.log('User saved successfully');
//     res.redirect(`/username-added/${username}`);
//   } catch (error) {
//     console.error('Error saving user:', error);
//     res.status(500).send('Error adding user to database.');
//   }
// });


// app.get('/username-added/:username', (req, res) => {
//   const username = req.params.username;
//   res.send(`Username ${username} added successfully!`);
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });



























// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const port = process.env.PORT || 3000;

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   }
// });

// const User = mongoose.model('User', userSchema);

// // Middleware
// app.use(bodyParser.json());  // To handle JSON data
// app.use(cors());  // For cross-origin requests, useful if Register.jsx is served separately
// app.use(express.static('public'));

// // Database Connection
// mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB database!'))
//   .catch(error => console.error('MongoDB connection error:', error));

// // Handle Registration Form Submission
// app.post('/register', async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     // Validate inputs (this can be expanded with additional checks)
//     if (!username || !email || !password) {
//       return res.status(400).json({ message: 'All fields are required.' });
//     }

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists with this email.' });
//     }

//     // Create new user and save to database
//     const newUser = new User({ username, email, password });
//     await newUser.save();
//     console.log('User registered successfully:', username);

//     res.status(201).json({ message: 'User registered successfully!', user: { username, email } });
//   } catch (error) {
//     console.error('Error registering user:', error);
//     res.status(500).json({ message: 'Error registering user.' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
