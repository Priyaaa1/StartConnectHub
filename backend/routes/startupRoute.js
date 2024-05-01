const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const StartupProfile = require('../models/startupProfile');
const investorsProfile=require('../models/investorProfile')
const jwt = require("jsonwebtoken");
const secretKey = 'yourSecretKey'; // Replace 'yourSecretKey' with your actual secret key
const auth=require("../middleware/auth")
router.post('/signup', async (req, res) => {
  const {
    startupName,
    founder,
    fundingAmount,
    fundingRounds,
    latestRoundDate,
    description,
    website,
    category,
    businessPlan,
    investors,
    links,
    email,
    password
  } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await StartupProfile.findOne({ 'email': email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new StartupProfile({
      startupName,
      founder,
      fundingAmount,
      fundingRounds,
      latestRoundDate,
      description,
      website,
      category,
      businessPlan,
      investors,
      email,
      password: hashedPassword,
      links
    });

    await newUser.save();

    // Generate JWT for signup
    const token = jwt.sign({ userId: newUser._id }, secretKey, { expiresIn: '1d' });

    res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login route for StartupProfile
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await StartupProfile.findOne({ 'email': email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT for login
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1d' });

    // Successful login
    res.status(200).json({ message: 'Login successful', token, user });
  } catch (error) {
    console.error('Error logging in user:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.get('/investors', auth, async (req, res) => {
  try {
    // Check if the user is logged in and get their ID from the auth middleware
    //const userId = req.user.userId; // Assuming your auth middleware sets the userId in the request object

    // Fetch all investors from the investorProfile model
    const investors = await investorsProfile.find();

    res.status(200).json(investors);
  } catch (error) {
    console.error('Error fetching investors:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});
router.get('/investors/search', auth, async (req, res) => {
  try {
    const { field, value } = req.query;

    if (!field || !value) {
      return res.status(400).json({ message: 'Field name and value are required for search.' });
    }

    // Construct the search query dynamically
    const query = {};
    query[field] = { $regex: new RegExp(value, 'i') };

    // Perform the search
    const investors = await investorsProfile.find(query);

    res.status(200).json(investors);
  } catch (error) {
    console.error('Error searching investors:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});
router.get('/me', auth, async (req, res) => {
  try {
    const userId = req.user.userId; // Assuming your auth middleware sets the userId in the request object

    // Fetch user details using the userId
    const user = await StartupProfile.findById({'_id':userId});
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user details:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
//module.exports = router;
