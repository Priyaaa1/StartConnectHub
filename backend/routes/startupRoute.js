const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const StartupProfile = require('../models/startupProfile');

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
    contactInfo: { email, phone, address },
    password
  } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await StartupProfile.findOne({ 'contactInfo.email': email });
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
      contactInfo: { email, phone, address },
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
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
    const user = await StartupProfile.findOne({ 'contactInfo.email': email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Successful login
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error logging in user:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
