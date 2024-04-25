const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const InvestorProfile = require('../models/investorProfile');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
// Signup route for InvestorProfile
router.post('/signup', async (req, res) => {
  const {
    firmName,
    investorType,
    preferredStage,
    investments,
    email,
    socialMediaLinks,
    experience,
    riskAppetite,
    fundingCriteria,
    category,
    preferredCommunication,
    availability,
    password
  } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await InvestorProfile.findOne({ 'contactInfo.email': email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new InvestorProfile({
      firmName,
      investorType,
      preferredStage,
      investments,
      email,
      socialMediaLinks,
      category,
      experience,
      riskAppetite,
      fundingCriteria,
      preferredCommunication,
      availability,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login route for InvestorProfile
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await InvestorProfile.findOne({ 'contactInfo.email': email });
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
